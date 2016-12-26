import React, {Component, PropTypes} from 'react';
import { createForm } from 'rc-form';

/* component styles */
import { styles } from './styles.scss';

@createForm()
export default class Form extends Component {

    constructor(props) {
        super(props)
    }

    validateText(rule, value, callback) {
        var re = /^[a-zA-Z]*$/;
        if(value && !re.test(value)) {
            callback('The value you entered is invalid.');
        }else {
            callback();
        }       
    }

    validateEmail(rule, value, callback) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(value && !re.test(value)) {
            callback('Invalid Email address.');
        }else {
            callback();
        }       
    }

    validateAlphaNumeric(rule, value, callback) {
        var re = /^[a-z0-9A-Z ]*$/;
        if(value && !re.test(value)) {
            callback('The value can only be aplha numberic.');
        }else {
            callback();
        }    
    }

    validateUsername(rule, value, callback) {
        var re = /^[a-z0-9A-Z_]*$/;
        if(value && !re.test(value)) {
            callback('The value can only be aplha numberic.');
        }else {
            callback();
        }    
    }

    validatePassword(rule, value, callback) {
        if(value && value.length < 8) {
            callback('Password must be atleast 8 characters long');
        }else {
            callback();
        }
    }

    validateRePassword(rule, value, callback) {
        if(value != document.getElementsByName('password')[0].value) {
            callback('Passwords do not match');
        }else {
            callback();
        }
    }

    submitForm = (e) => {
        e.preventDefault();

        document.getElementsByName('submit')[0].innerHTML = '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> Please Wait';

        this.props.form.validateFields((error, value) => {
            if(!error) {
                this.props.addUser({
                    firstName: value['First Name'],
                    lastName: value['First Name'],
                    address: value['Address'],
                    gender: value['Gender'],
                    email: value['Email'],
                    username: value['Username'],
                    password: value['Password'],
                }, this.props.redirect);
            }
        });
    }

    render() {
        let errors;
        const {getFieldProps, getFieldError} = this.props.form;

        return (
            <form className={`${styles} col-sm-8 col-sm-offset-2`} onSubmit={this.submitForm}>
                <h1 className="section-header">User registration</h1>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input className="input form-control" name="firstName" {...getFieldProps('First Name', {rules: [{required: true}, {validator: this.validateText}]})} maxLength="60"/>
                    <span className="form-error">{(errors = getFieldError('First Name')) ? errors.join(',') : null}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input className="input form-control" name="lastName" {...getFieldProps('Last Name', {rules: [{required: true}, {validator: this.validateText}]})} maxLength="60"/>
                    <span className="form-error">{(errors = getFieldError('Last Name')) ? errors.join(',') : null}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input className="input form-control" name="address" {...getFieldProps('Address', {rules: [{required: true}]})} maxLength="100"/>
                    <span className="form-error">{(errors = getFieldError('Address')) ? errors.join(',') : null}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender:</label>
                    <select className="form-control" name="gender" {...getFieldProps('Gender', {rules: [{required: true}]})}>
                        <option value="">--Select Gender--</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                    <span className="form-error">{(errors = getFieldError('Gender')) ? errors.join(',') : null}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input className="input form-control" name="email" {...getFieldProps('Email', {rules: [{required: true}, {validator: this.validateEmail}]})} maxLength="100"/>
                    <span className="form-error">{(errors = getFieldError('Email')) ? errors.join(',') : null}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Username:</label>
                    <input className="input form-control" name="username" {...getFieldProps('Username', {rules: [{required: true}, {validator: this.validateUsername}]})} maxLength="20"/>
                    <span className="form-error">{(errors = getFieldError('Username')) ? errors.join(',') : null}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Password:</label>
                    <input className="input form-control" type="password" name="password" {...getFieldProps('Password', {rules: [{required: true}, {validator: this.validatePassword}]})} maxLength="20"/>
                    <span className="form-error">{(errors = getFieldError('Password')) ? errors.join(',') : null}</span>
                </div>
                 <div className="form-group">
                    <label htmlFor="email">Retype password:</label>
                    <input className="input form-control" type="password" name="repassword" {...getFieldProps('Repeat password', {rules: [{required: true}, {validator: this.validateRePassword}]})} maxLength="20"/>
                    <span className="form-error">{(errors = getFieldError('Repeat password')) ? errors.join(' and ') : null}</span>
                </div>
                <div className="form-group">
                    <button type="submit" name="submit" className="btn btn-primary">Submit</button>&nbsp;
                    <button type="reset" name="reset" className="btn btn-danger">Reset</button>
                </div>
            </form>
        );
    }
}

Form.propTypes = {
  addUser: PropTypes.func.isRequired
}