import React, { Component } from 'react';
import { createForm } from 'rc-form';
import { APIEndpoints } from 'constants/CommonConstants';

import { SearchCelebrity } from './SearchCelebrity';

@createForm()
export class AddMovieForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            poster: null,
            cover: null,
            directorsIds: [],
            directors: [],
            castsIds: [],
            casts: []
        }
    }

    validateText(rule, value, callback) {
        var re = /^[a-zA-Z, ]*$/;
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
    }

    addCelebrity = (field, value) => {
        if(this.state[field + 'Ids'].indexOf(value) == -1) {
            this.setState({
                [field]: this.state[field].concat(value),
                [field + 'Ids']: this.state[field + 'Ids'].concat({celebrityId: value._id})
            })
        }
    }

    submitForm = (e) => {
        e.preventDefault();

        this.props.form.validateFields((error, value) => {
            if(!error) {
               this.props.addMovie({
                    title: document.getElementsByName('title')[0].value,
                    description: document.getElementById('description').value,
                    year: document.getElementsByName('year')[0].value,
                    director: this.state.directorsIds,
                    cast: this.state.castsIds,
                    duration: document.getElementsByName('duration')[0].value,
                    trailer: document.getElementsByName('trailer')[0].value,
                    posterUrl: this.state.poster,
                    coverUrl: this.state.cover,
                    slug: document.getElementsByName('title')[0].value.split(' ').join('-') + '-' + Date.now()
               });
            }
        });
    }

    validateAlphaNumeric(rule, value, callback) {
        var re = /^[a-z0-9A-Z :()]*$/;
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
            <form onSubmit={this.submitForm}>
                <div className="form-group">
                    <label htmlFor="title">Movie Title</label>
                    <input type="text" className="form-control" name="title" placeholder="Title" {...getFieldProps('Movie Title', {rules: [{required: true}, {validator: this.validateAlphaNumeric}]})} maxLength="60"/>
                    <span className="form-error">{(errors = getFieldError('Movie Title')) ? errors.join(',') : null}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" id="description" className="form-control" name="description" placeholder="Description" rows="6" {...getFieldProps('Description', {rules: [{required: true}]})}/>
                    <span className="form-error">{(errors = getFieldError('Description')) ? errors.join(',') : null}</span>
                </div>
                
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="year">Year of release</label>
                            <input type="number" className="form-control" min="1800" max="2016" name="year" placeholder="Year of release" {...getFieldProps('Year of release', {rules: [{required: true}]})}/>
                            <span className="form-error">{(errors = getFieldError('Year of release')) ? errors.join(',') : null}</span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="title">Director</label>
                            <SearchCelebrity addCelebrity={this.addCelebrity.bind(null, 'directors')}/>
                            <div className="celebrity-tag">
                                {this.state.directors.map((director) => {
                                    return <span key={director._id} className="celebrity-tag__item">{director.fullName}</span>
                                })}
                            </div>
                            {/**<input type="text" className="form-control" name="director" placeholder="Director of the movie" {...getFieldProps('Movie Director', {rules: [{required: true}, {validator: this.validateText}]})}/>**/}
                            {/**<span className="form-error">{(errors = getFieldError('Movie Director')) ? errors.join(',') : null}</span>**/}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Cast</label>
                    <SearchCelebrity addCelebrity={this.addCelebrity.bind(null, 'casts')}/>
                    <div className="celebrity-tag">
                        {this.state.casts.map((cast) => {
                            return <span key={cast._id} className="celebrity-tag__item">{cast.fullName}</span>
                        })}
                    </div>
                    {/**<input type="text" className="form-control" name="cast" placeholder="List of cast" {...getFieldProps('Cast', {rules: [{required: true}]})}/>**/}
                    {/**<span className="form-error">{(errors = getFieldError('Cast')) ? errors.join(',') : null}</span>**/}
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="title">Duration</label>
                            <input type="number" className="form-control" name="duration" placeholder="Duration of movie in minutes" {...getFieldProps('Duration', {rules: [{required: true}]})}/>
                            <span className="form-error">{(errors = getFieldError('Duration')) ? errors.join(',') : null}</span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="title">Trailer URL</label>
                            <input type="text" className="form-control" name="trailer" placeholder="Paste url of movie trailer" {...getFieldProps('Trailer Url', {rules: [{required: true}]})}/>
                        <span className="form-error">{(errors = getFieldError('Trailer Url')) ? errors.join(',') : null}</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="title">Movie Poster</label>
                            <input type="file" className="form-control" name="poster" onChange={this._fileUpload.bind(this, 'poster')}/>
                            {this.state.poster && <img src={this.state.poster} className="img img-responsive" style={{height: '180px', marginTop: '10px'}}/>}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="title">Movie Cover Image</label>
                            <input type="file" className="form-control" name="cover" onChange={this._fileUpload.bind(this, 'cover')}/>
                            {this.state.cover && <img src={this.state.cover} className="img img-responsive" style={{height: '180px', marginTop: '10px'}}/>}
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default" id="submit">Submit</button>
                </div>
            </form>
        );
    }
}