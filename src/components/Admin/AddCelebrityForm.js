/**
 * Created by sumit on 10/30/16.
 */

import React, { Component } from 'react';
import { createForm } from 'rc-form';
import moment from 'moment';

import { APIEndpoints } from 'constants/CommonConstants';

@createForm()
export class AddCelebrityForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            picture: null
        }
    }

    validateAlphabet(rule, value, callback) {
        var re = /^[a-zA-Z ]*$/;
        if(value && !re.test(value)) {
            callback('The value you entered is invalid.');
        }else {
            callback();
        }
    }

    validateAlphaNumeric(rule, value, callback) {
        var re = /^[a-z0-9A-Z, ]*$/;
        if(value && !re.test(value)) {
            callback('The value you entered is invalid.');
        }else {
            callback();
        }
    }

    _fileUpload = (field, e) => {
        var that = this;
        var upload = document.getElementsByName(field)[0];
        var submitBtn = document.getElementById('submit');
        submitBtn.innerHTML = 'Uploading image...';
        submitBtn.disabled = true;
        if(upload.files && upload.files[0]) {
            var reader = new FileReader();
            reader.onload = function(readerEvt) {
                var binaryString = readerEvt.target.result;
                var request = new XMLHttpRequest();
                request.open('POST', APIEndpoints.IMAGE_UPLOAD, true);
                request.setRequestHeader("Content-type", "application/json");
                request.setRequestHeader('Authorization', APIEndpoints.IMAGE_UPLOAD_AUTHORIZATION);
                request.send(JSON.stringify({
                    image: btoa(binaryString),
                    type: 'base64'
                }));
                request.onreadystatechange = function() {
                    if (request.readyState == 4 && request.status == 200) {
                        var res = JSON.parse(request.responseText);
                        if(res.status) {
                            submitBtn.innerHTML = 'Submit';
                            submitBtn.disabled = false;
                            that.setState({
                                [field]: res.data.link
                            });
                        }
                    }
                };
            };

            reader.readAsBinaryString(upload.files[0]);
        }
    };

    submitForm = (e) => {
        e.preventDefault();

        this.props.form.validateFields((error, value) => {
            if(!error) {
                this.props.submit({
                    fullName: document.getElementsByName('name')[0].value,
                    birthPlace: document.getElementsByName('birthPlace')[0].value,
                    birthDate: moment(document.getElementsByName('birthDate')[0].value).unix() * 1000,
                    bio: document.getElementsByName('bio')[0].value,
                    picture: this.state.picture
                });
            }
        });
    }

    render() {

        let errors;
        const {getFieldProps, getFieldError} = this.props.form;

        return (
            <form className="form-inline" id="add-celebrity-form" onSubmit={this.submitForm}>
                <div className="row">
                    <div className="form-group col-sm-12">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Full Name" className="input form-control" {...getFieldProps('Name', {rules: [{required: true}, {validator: this.validateAlphabet}]})} maxLength="60"/>
                        <span className="form-error">{(errors = getFieldError('Name')) ? errors.join(',') : null}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-12">
                        <label htmlFor="birthPlace">Birth Place</label>
                        <input type="text" name="birthPlace" placeholder="Birth Place" className="input form-control" {...getFieldProps('Birth Place', {rules: [{required: true}, {validator: this.validateAlphaNumeric}]})}/>
                        <span className="form-error">{(errors = getFieldError('Birth Place')) ? errors.join(',') : null}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-12">
                        <label htmlFor="birthDate">Birth Date</label>
                        <input type="date" name="birthDate" className="input form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-12">
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" rows="5" placeholder="Bio" cols="50" className="input form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-sm-12">
                        <label htmlFor="picture">Picture</label>
                        <input type="file" name="picture" className="input form-control" onChange={this._fileUpload.bind(this, 'picture')}/> <br />
                    </div>
                </div>
                {this.state.picture ?
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <label htmlFor=""></label>
                            <img src={this.state.picture} width="150" />
                        </div>
                    </div>
                : null}
                <div className="row">
                    <div className="form-group col-sm-12">
                        <button type="submit" id="submit" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </form>
        );
    }
}