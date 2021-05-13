import React from 'react';
import Modal from '../Modal';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';
import history from '../../history';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        const { id } = this.props.match.params;

        return (
            <React.Fragment>
                <Button onClick={() => this.props.deleteStream(id)} color='secondary'>
                    Delete
                </Button>
                <Button component={Link} to='/' color='primary'>
                    Cancel
                </Button>
            </React.Fragment>
        );
    }

    render() {
        return (
            <Modal
                title='Delete Stream'
                content={`Are you sure you want to delete this stream with title: ${this.props.stream?.title}?`}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
