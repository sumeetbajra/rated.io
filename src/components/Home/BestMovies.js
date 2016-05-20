import React, { Component } from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';

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
                    <h2>Best Movies this week</h2>
                    <div className="row">
                        <Slider {...settings}>
                            {this.props.movies.map((movie) => {
                                return (
                                    <div className="col-sm-2" key={movie._id}>
                                        <Link to={'/movie/' + movie._id}><img src={movie.posterUrl} className="img-responsive"/></Link>
                                        <div className="movie-details">
                                            <span className="movie-details__title">
                                                {movie.title} ({movie.year})
                                            </span>
                                            <span className="movie-details__rating">
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                <i className="fa fa-star" />
                                                &nbsp;3.2 (400)
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
