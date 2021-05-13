import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Tab, Toolbar } from '@material-ui/core';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div style={{ marginBottom: '6rem' }}>
            <AppBar position='fixed'>
                <Toolbar>
                    <Tab label='Streamer' component={Link} to='/' />
                    <Tab
                        style={{ marginLeft: `auto` }}
                        label='All Streams'
                        component={Link}
                        to='/'
                    />
                    <GoogleAuth />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
