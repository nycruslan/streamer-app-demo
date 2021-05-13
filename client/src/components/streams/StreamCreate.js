import React from 'react';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    onSubmit = formValues => {
        this.props.createStream(formValues);
    };

    render() {
        return (
            <div>
                <Typography variant='h4'>Create Stream</Typography>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);
