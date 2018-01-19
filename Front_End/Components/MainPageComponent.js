'use strict'

import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';
import Textfield from 'material-ui/Textfield';
import { withStyles } from 'material-ui/styles';
import Checkbox from 'material-ui/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui/Form';

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
                        Client List
                    </Typography>
                    </Toolbar>
                </AppBar>
                <Textfield 
                    className="first-name-input textfield"
                    label="First Name"
                    margin="normal"
                />
                <Textfield 
                    className="last-name-input textfield"
                    label="Last Name"
                    margin="normal"
                />
                <Textfield 
                    className="tp-ssn-input textfield"
                    label="Taxpayer SSN"
                    margin="normal"
                />
                <Textfield 
                    className="sp-ssn-input textfield"
                    label="Spouse SSN"
                    margin="normal"
                />
                <FormGroup row>
                    <FormControlLabel
                        control={
                        <Checkbox
                            className="eic-checkbox muicheckbox"
                        />
                        }
                        label="EIC with children"
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            className="miss-docs-checkbox muicheckbox"
                        />
                        }
                        label="Missing Documents"
                    />
                </FormGroup>
                <Textfield 
                    className="telephone-input textfield"
                    label="Telephone Number"
                    margin="normal"
                />
                <Textfield 
                    className="fee-input textfield"
                    label="Fee"
                    margin="normal"
                />
                {this.props.children}
            </div>
        );
    }
}