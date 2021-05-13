import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
} from '@material-ui/core';
import { IconButton, Avatar, Divider, Typography, Button } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div>
                    <IconButton component={Link} to={`/streams/edit/${stream.id}`}>
                        <EditIcon />
                    </IconButton>
                    <IconButton component={Link} to={`/streams/delete/${stream.id}`}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div key={stream.id}>
                    <List>
                        <ListItem button component={Link} to={`/streams/${stream.id}`}>
                            <ListItemAvatar>
                                <Avatar>
                                    <VideocamIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={stream.title} secondary={stream.description} />
                            <ListItemSecondaryAction>
                                {this.renderAdmin(stream)}
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider />
                    </List>
                </div>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'end' }}>
                    <Button component={Link} to='/streams/new' variant='contained' color='primary'>
                        Create Stream
                    </Button>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <Typography variant='h4'>Streams</Typography>
                <div>{this.renderList()}</div>
                <div>{this.renderCreate()}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
