import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router';

import { MovieStars } from './MovieStars';
import { styles } from './styles/styles.scss';

export class LatestMovies extends Component {
    render() {
        var settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 8,
          slidesToScroll: 1
        };
        return (
            <section id="latest-movies" className={`${styles}`}>
                <div className="container">
                    <h2>Latest Movies this week</h2>
                    <div className="row">
                        <Slider {...settings}>
                            {this.props.movies.map((movie) => {
                                let rating = 0;
                                if(movie.ratings) {
                                    for (let i = movie.ratings.length - 1; i >= 0; i--) {
                                        rating += parseInt(movie.ratings[i].rating)
                                    }
                                    rating = Math.round(((rating/movie.ratings.length)*2)/2);
                                }
                                return (
                                    <div className="col-sm-2" key={movie._id}>
                                        <Link to={'/movie/' + movie._id}><img src={movie.posterUrl} className="img-responsive"/></Link>
                                        <div className="movie-details">
                                            <span className="movie-details__title">
                                                {movie.title} ({movie.year})
                                            </span>
                                            <span className="movie-details__rating">
                                                <MovieStars ratings={movie.ratings} />
                                                {rating ? <div>{rating}/5 ({movie.ratings.length} reviews)</div> : 'No reviews yet'}
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
