import React, { Component } from 'react';
import { createForm } from 'rc-form';

@createForm()
export class UpdateMovieForm extends Component {

    constructor(props) {
        super(props);
    }

    validateText(rule, value, callback) {
        var re = /^[a-zA-Z, ]*$/;
        if(value && !re.test(value)) {
            callback('The value you entered is invalid.');
        }else {
            callback();
        }       
    }

    submitForm = (e) => {
        e.preventDefault();

        this.props.form.validateFields((error, value) => {
            if(!error) {
               this.props.updateMovie(this.props.movie._id, {
                    title: document.getElementsByName('title')[0].value,
                    description: document.getElementsByName('description')[0].value,
                    year: document.getElementsByName('year')[0].value,
                    director: document.getElementsByName('director')[0].value,
                    cast: document.getElementsByName('cast')[0].value,
                    duration: document.getElementsByName('duration')[0].value,
                    trailer: document.getElementsByName('trailer')[0].value,
                    posterUrl: document.getElementsByName('poster')[0].value,
                    coverUrl: document.getElementsByName('cover')[0].value,
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
                    <textarea type="text" className="form-control" name="description" placeholder="Description" rows="6" {...getFieldProps('Description', {initialValue: movie.description, rules: [{required: true}]})}/>
                    <span className="form-error">{(errors = getFieldError('Description')) ? errors.join(',') : null}</span>
                </div>
                
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="year">Year of release</label>
                            <input type="number" className="form-control" min="1800" max="2016" name="year" placeholder="Year of release" {...getFieldProps('Year of release', {initialValue: movie.year, rules: [{required: true}]})}/>
                            <span className="form-error">{(errors = getFieldError('Year of release')) ? errors.join(',') : null}</span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="title">Director</label>
                            <input type="text" className="form-control" name="director" placeholder="Director of the movie" {...getFieldProps('Movie Director', {initialValue: movie.director, rules: [{required: true}, {validator: this.validateText}]})}/>
                            <span className="form-error">{(errors = getFieldError('Movie Director')) ? errors.join(',') : null}</span>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="title">Cast</label>
                    <input type="text" className="form-control" name="cast" placeholder="List of cast" {...getFieldProps('Cast', {initialValue: movie.cast, rules: [{required: true}]})}/>
                    <span className="form-error">{(errors = getFieldError('Cast')) ? errors.join(',') : null}</span>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="title">Duration</label>
                            <input type="number" className="form-control" name="duration" placeholder="Duration of movie in minutes" {...getFieldProps('Duration', {initialValue: movie.duration, rules: [{required: true}]})}/>
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
                            <input type="text" className="form-control" name="poster" defaultValue={movie.posterUrl} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label htmlFor="title">Movie Cover Image</label>
                            <input type="text" className="form-control" name="cover" defaultValue={movie.coverUrl}/>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Submit</button>
                </div>
            </form>
        );
    }
}