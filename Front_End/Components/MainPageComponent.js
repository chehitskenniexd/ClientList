'use strict'

import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                    <Typography type="title" color="inherit">
                        Title
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Button raised className="button">
                    Default
                </Button>
                {this.props.children}
            </div>
        );
    }
}