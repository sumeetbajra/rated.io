import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { MovieCover } from 'components/Movie/MovieCover';
import { MovieDetail } from 'components/Movie/MovieDetail';
import { MovieReviews } from 'components/Movie/MovieReviews';
import { MovieImg } from 'components/Movie/MovieImg';

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

    render() {
        let movie = this.props.movieData ? this.props.movieData : {};
        return (
             <section>
                <MovieCover img={movie.coverUrl}/>
                <div className="container">
                    <div className="row" style={{marginTop: '-20px'}}>
                        <MovieImg img={movie.posterUrl}/>
                        <div className="col-sm-9">
                            <MovieDetail data={movie}/>
                            <MovieReviews />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}