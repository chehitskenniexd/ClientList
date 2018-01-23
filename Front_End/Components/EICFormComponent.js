'use strict'

import React from 'react';
import { Link } from 'react-router';
import FormGroup from 'material-ui/Form/FormGroup';
import TextField from 'material-ui/TextField/TextField';

export default class EICForm extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <FormGroup>
                    <TextField
                        className="EIC-text-input textfield"
                        label="Text"
                        margin="normal"
                    />
                </FormGroup>
            </div>
        );
    }
}