import React, { Component } from 'react';
import { createForm } from 'rc-form';

@createForm()
export class SignInForm extends Component {

    login = (e) => {
        e.preventDefault();
        this.props.form.validateFields((error, value) => {
            if(!error) {
                var payload = {
                    username: value['Username'],
                    password: value['Password']
                }
                this.props.login(payload);
            }
        });
    }

    validateUsername(rule, value, callback) {
        var re = /^[a-z0-9A-Z_]*$/;
        if(value && !re.test(value)) {
            callback('The value can only be aplha numberic.');
        }else {
            callback();
        }    
    }

    render() {

        let errors;
        const {getFieldProps, getFieldError} = this.props.form;

        return (
            <form onSubmit={this.login}>
                <div className="form-group">
                    <label htmlFor="firstName">Username:</label>
                    <input className="input form-control" name="username" {...getFieldProps('Username', {rules: [{required: true}, {validator: this.validateUsername}]})} maxLength="20"/>
                    <span className="form-error">{(errors = getFieldError('Username')) ? errors.join(',') : null}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Password:</label>
                    <input className="input form-control" name="password" {...getFieldProps('Password', {rules: [{required: true}]})} type="password" maxLength="50"/>
                    <span className="form-error">{(errors = getFieldError('Password')) ? errors.join(',') : null}</span>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Login</button>&nbsp;
                    <button className="btn btn-default">Register</button>
                </div>
            </form>
        );
    }
}