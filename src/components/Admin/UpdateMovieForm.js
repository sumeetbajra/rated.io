import React, { Component } from 'react';
import { createForm } from 'rc-form';
import { APIEndpoints } from 'constants/CommonConstants';

import { SearchCelebrity } from './SearchCelebrity';

@createForm()
export class UpdateMovieForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cover: null,
            poster: null,
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

    componentWillReceiveProps(nextProps) {
        let {movie} = nextProps;
        this.setState({
            cover: movie.coverUrl,
            poster: movie.posterUrl,
            casts: movie.cast,
            castsIds: movie.cast.map((cast) => { return {celebrityId: cast.celebrityId._id}}),
            directors: movie.director,
            directorsIds: movie.director.map((cast) => { return {celebrityId: cast.celebrityId._id}}),
        })
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

    removeCelebrity = (field, value, e) => {
        e.preventDefault();
        if(this.state[field + 'Ids'].map((item) => item.celebrityId).indexOf(value) > -1) {
            this.setState({
                [field]: this.state[field].filter((item) => item.celebrityId ? item.celebrityId._id != value : item._id != value),
                [field + 'Ids']: this.state[field + 'Ids'].filter((item) => item.celebrityId != value)
            })
        }
    }

    _removePicture = (field, e) => {
        this.setState({
            [field]: null
        });
        e.preventDefault();
    }

    submitForm = (e) => {
        e.preventDefault();

        this.props.form.validateFields((error, value) => {
            if(!error) {
                var payload = {
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
               }
               this.props.updateMovie(this.props.movie._id, payload);
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

        let {movie} = this.props;
        if(!movie) {
            movie = {}
        }

        return (
            <form onSubmit={this.submitForm}>
                <div className="form-group">
                    <label htmlFor="title">Movie Title</label>
                    <input type="text" className="form-control" name="title" placeholder="Title" {...getFieldProps('Movie Title', {initialValue: movie.title, rules: [{required: true}, {validator: this.validateAlphaNumeric}]})} maxLength="60"/>
                    <span className="form-error">{(errors = getFieldError('Movie Title')) ? errors.join(',') : null}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" className="form-control" id="description" name="description" placeholder="Description" rows="6" {...getFieldProps('Description', {initialValue: movie.description, rules: [{required: true}]})}/>
                    <span className="form-error">{(errors = getFieldError('Description')) ? errors.join(',') : null}</span>
                </div>
                
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="year">Year of release</label>
                            <input type="number" className="form-control" name="year" placeholder="Year of release" {...getFieldProps('Year of release', {initialValue: movie.year ? movie.year.toString() : null, rules: [{required: true}]})}/>
                            <span className="form-error">{(errors = getFieldError('Year of release')) ? errors.join(',') : null}</span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="title">Director</label>
                            <SearchCelebrity addCelebrity={this.addCelebrity.bind(null, 'directors')}/>
                            <div className="celebrity-tag">
                                {this.state.directors.map((director) => {
                                    return <span key={director._id} className="celebrity-tag__item">{director.fullName || director.celebrityId.fullName}&nbsp;<a href="#" onClick={this.removeCelebrity.bind(null, 'directors', director.celebrityId ? director.celebrityId._id : director._id)}>X</a></span>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Cast</label>
                    <SearchCelebrity addCelebrity={this.addCelebrity.bind(null, 'casts')}/>
                    <div className="celebrity-tag">
                        {this.state.casts.map((cast) => {
                            return <span key={cast._id} className="celebrity-tag__item">{cast.fullName || cast.celebrityId.fullName}&nbsp;<a href="#" onClick={this.removeCelebrity.bind(this, 'casts', cast.celebrityId ? cast.celebrityId._id: cast._id)}>X</a></span>
                        })}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="title">Duration (in mins)</label>
                            <input type="number" className="form-control" name="duration" placeholder="Duration of movie in minutes" {...getFieldProps('Duration', {initialValue: movie.duration ? movie.duration.toString() : null, rules: [{required: true}]})}/>
                            <span className="form-error">{(errors = getFieldError('Duration')) ? errors.join(',') : null}</span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="title">Trailer URL</label>
                            <input type="text" className="form-control" name="trailer" placeholder="Paste url of movie trailer" {...getFieldProps('Trailer Url', {initialValue: movie.trailer, rules: [{required: true}]})}/>
                        <span className="form-error">{(errors = getFieldError('Trailer Url')) ? errors.join(',') : null}</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="title">Movie Poster</label>
                            <input type="file" className="form-control" name="poster" onChange={this._fileUpload.bind(this, 'poster')}/>
                            {this.state.poster &&
                                <span>
                                    <img src={this.state.poster} className="img img-responsive" style={{height: '180px', marginTop: '10px'}}/>
                                    <a href="#" onClick={this._removePicture.bind(null, 'poster')}>Remove</a>
                                </span>
                            }
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="title">Movie Cover Image</label>
                            <input type="file" className="form-control" name="cover" onChange={this._fileUpload.bind(this, 'cover')}/>
                            {this.state.cover &&
                                <span>
                                    <img src={this.state.cover} className="img img-responsive" style={{height: '180px', marginTop: '10px'}}/>
                                    <a href="#" onClick={this._removePicture.bind(null, 'cover')}>Remove</a>
                                </span>
                            }
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