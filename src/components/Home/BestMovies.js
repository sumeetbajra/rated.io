import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

import { MovieStars } from './MovieStars';
import { styles } from './styles/styles.scss';

export class BestMovies extends Component {
    render() {
        var settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 8,
          slidesToScroll: 1
        };
        return (
            <section id="best-movies" className={`${styles}`}>
                <div className="container">
                    <h2 className="main-title">Best Movies this week</h2>
                    <div className="row">
                        <Slider {...settings}>
                            {this.props.movies && this.props.movies.map((movie) => {
                               let rating = Math.round((movie.overallRating)*2)/2;
                                return (
                                    <div className="col-sm-2" key={movie._id}>
                                        <Link to={'/movie/' + movie._id}>
                                            <div className="movie-carousel__poster" style={{backgroundImage: "url('" + movie.posterUrl + "')"}}/>
                                        </Link>
                                        <div className="movie-details">
                                            <span className="movie-details__title">
                                                {movie.title} ({movie.year})
                                            </span>
                                            <span className="movie-details__rating">
                                                <MovieStars ratings={rating} />
                                                {rating ? <div>{rating}/5 ({movie.ratingsCount} {movie.ratingsCount > 1 ? 'reviews' : 'review'})</div> : 'No reviews yet'}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </section>
        )
    }
}

