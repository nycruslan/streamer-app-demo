import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import { Button } from '@material-ui/core';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: `912008168740-cein3ub265kak66fb533bf40rqvc3tpf.apps.googleusercontent.com`,
                    scope: `email`,
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = isSignedIn => {
        if (isSignedIn) this.props.signIn(this.auth.currentUser.get().getId());
        else this.props.signOut();
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <Button onClick={this.onSignOutClick} variant='contained' color='secondary'>
                    <ion-icon style={{ marginRight: `0.5rem` }} name='logo-google'></ion-icon>Sign
                    out
                </Button>
            );
        } else {
            return (
                <Button onClick={this.onSignInClick} variant='contained' color='secondary'>
                    <ion-icon style={{ marginRight: `0.5rem` }} name='logo-google'></ion-icon>Sign
                    in with google
                </Button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
