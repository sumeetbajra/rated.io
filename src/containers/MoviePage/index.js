import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { modal } from 'react-redux-modal'; // The modal emitter

import { PageSpinner } from 'components/Utility/PageSpinner';
import { MovieCover } from 'components/Movie/MovieCover';
import { MovieDetail } from 'components/Movie/MovieDetail';
import { MovieReviews } from 'components/Movie/MovieReviews';
import { MovieImg } from 'components/Movie/MovieImg';
import { AddReviewForm } from 'components/Movie/AddReviewForm';
import { MovieTrailerModal } from 'components/Movie/MovieTrailerModal';

import * as actionCreators from 'actions/movies';

import './moviepage.scss';

@connect(
    state => state.movies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class MoviePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentWillMount = () => {
        this.props.getMovie(this.props.params.id);
        this.setState({
            loading: true
        })
    }

    componentWillReceiveProps() {
        this.setState({
            loading: false
        })
    }

    openReviewModal = () => {
        modal.add(AddReviewForm, {
            title: 'Submit a review for the movie',
            size: 'medium', // large, medium or small,
            closeOnOutsideClick: false, // (optional) Switch to true if you want to close the modal by clicking outside of it,
            hideCloseButton: false, // (optional) if you don't wanna show the top right close button
            movieId: this.props.params.id,
            addRating: this.props.addRating,
            updateRating: this.props.updateRating,
            myRating: this.props.movieData.ratings.filter(rating => rating.userId._id == JSON.parse(localStorage.getItem('userData')).id)
            //.. all what you put in here you will get access in the modal props ;)
        });
    }

    openTrailerModal = (url, e) => {
        modal.add(MovieTrailerModal, {
            size: 'large', // large, medium or small,
            closeOnOutsideClick: true, // (optional) Switch to true if you want to close the modal by clicking outside of it,
            hideCloseButton: false, // (optional) if you don't wanna show the top right close button
            url: url,
            //.. all what you put in here you will get access in the modal props ;)
        });
    }

    render() {

        let movie = this.props.movieData ? this.props.movieData : {};
        let ratings = movie.ratings ? movie.ratings : [];
        return (
            this.state.loading ? <PageSpinner /> :
             <section>
                <MovieCover img={movie.coverUrl}/>
                <div className="container">
                    <div className="row" style={{marginTop: '-20px'}}>
                        <MovieImg img={movie.posterUrl} addReviewModal={this.openReviewModal} playTrailer={this.openTrailerModal.bind(this, movie.trailer)}/>
                        <div className="col-sm-9">
                            <MovieDetail data={movie}/>
                            <MovieReviews ratings={ratings}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}