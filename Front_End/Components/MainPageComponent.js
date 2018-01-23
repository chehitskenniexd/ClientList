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
        this.state = {
            firstName: '',
            lastName: '',
            tpSSN: -1,
            spSSN: -1,
            bEIC: false,
            bMissingDocs: false,
            preparer: '',
            phoneNum: '',
            fee: -1,
            comments: ''
        }

        this.onInputChangeFirstName = this.onInputChangeFirstName.bind(this);
        this.onInputChangeLastName = this.onInputChangeLastName.bind(this);
        this.onInputChangeTPSSN = this.onInputChangeTPSSN.bind(this);
        this.onInputChangeSPSSN = this.onInputChangeSPSSN.bind(this);
        this.onInputChangeBoolEIC = this.onInputChangeBoolEIC.bind(this);
        this.onInputChangeBoolMissing = this.onInputChangeBoolMissing.bind(this);
        this.onInputChangePreparer = this.onInputChangePreparer.bind(this);
        this.onInputChangePhoneNum = this.onInputChangePhoneNum.bind(this);
        this.onInputChangeFee = this.onInputChangeFee.bind(this);
        this.onInputChangeComments = this.onInputChangeComments.bind(this);
        this.onCreateClient = this.onCreateClient.bind(this);
    }

    onInputChangeFirstName(event) {
        this.setState({ firstName: event.target.value });
    }

    onInputChangeLastName(event) {
        this.setState({ lastName: event.target.value });
    }

    onInputChangeTPSSN(event) {
        this.setState({ tpSSN: event.target.value });
    }

    onInputChangeSPSSN(event) {
        this.setState({ spSSN: event.target.value });
    }

    onInputChangeBoolEIC(event) {
        this.setState({ bEIC: event.target.value });
    }

    onInputChangeBoolMissing(event) {
        this.setState({ bMissingDocs: event.target.value });
    }

    onInputChangePreparer(event) {
        this.setState({ preparer: event.target.value });
    }

    onInputChangePhoneNum(event) {
        this.setState({ phoneNum: event.target.value });
    }

    onInputChangeFee(event) {
        this.setState({ fee: event.target.value });
    }

    onInputChangeComments(event) {
        this.setState({ comments: event.target.value });
    }

    onCreateClient(event) {

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
                    onChange={this.onInputChangeFirstName}
                />
                <Textfield 
                    className="last-name-input textfield"
                    label="Last Name"
                    margin="normal"
                    onChange={this.onInputChangeLastName}
                />
                <Textfield 
                    className="tp-ssn-input textfield"
                    label="Taxpayer SSN"
                    margin="normal"
                    onChange={this.onInputChangeTPSSN}
                />
                <Textfield 
                    className="sp-ssn-input textfield"
                    label="Spouse SSN"
                    margin="normal"
                    onChange={this.onInputChangeSPSSN}
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
                    className="preparer-input textfield"
                    label="Preparer"
                    margin="normal"
                    onChange={this.onInputChangePreparer}
                />
                <Textfield 
                    className="telephone-input textfield"
                    label="Telephone Number"
                    margin="normal"
                    onChange={this.onInputChangePhoneNum}
                />
                <Textfield 
                    className="fee-input textfield"
                    label="Fee"
                    margin="normal"
                    onChange={this.onInputChangeFee}
                />
                <Textfield 
                    className="comments-input textfield"
                    label="Comments"
                    margin="normal"
                    onChange={this.onInputChangeComments}
                />
                {this.props.children}
            </div>
        );
    }
}