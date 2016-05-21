import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { modal } from 'react-redux-modal'; // The modal emitter

import { MovieCover } from 'components/Movie/MovieCover';
import { MovieDetail } from 'components/Movie/MovieDetail';
import { MovieReviews } from 'components/Movie/MovieReviews';
import { MovieImg } from 'components/Movie/MovieImg';
import { AddReviewForm } from 'components/Movie/AddReviewForm';

import * as actionCreators from 'actions/movies';

import './moviepage.scss';

@connect(
    state => state.movies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class MoviePage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getMovie(this.props.params.id)
    }

    openReviewModal = () => {
        modal.add(AddReviewForm, {
            title: 'Submit a review for the movie',
            size: 'medium', // large, medium or small,
            closeOnOutsideClick: false, // (optional) Switch to true if you want to close the modal by clicking outside of it,
            hideCloseButton: false, // (optional) if you don't wanna show the top right close button
            movieId: this.props.params.id,
            addRating: this.props.addRating
            //.. all what you put in here you will get access in the modal props ;)
        });
    }

    render() {

        let movie = this.props.movieData ? this.props.movieData : {};
        return (
             <section>
                <MovieCover img={movie.coverUrl}/>
                <div className="container">
                    <div className="row" style={{marginTop: '-20px'}}>
                        <MovieImg img={movie.posterUrl} addReviewModal={this.openReviewModal}/>
                        <div className="col-sm-9">
                            <MovieDetail data={movie}/>
                            <MovieReviews movieId={movie._id}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}