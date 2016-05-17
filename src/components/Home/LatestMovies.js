import React, { Component } from 'react';

import { styles } from './styles/styles.scss';

export class LatestMovies extends Component {
    render() {
        return (
            <section id="latest-movies" className={`${styles}`}>
                <div className="container">
                    <h2>Latest Movies this week</h2>
                    <div className="row">
                        <div className="col-sm-2">
                            <img src="http://www.fubiz.net/wp-content/uploads/2015/02/Jurassic-World.jpg" className="img-responsive"/>
                            <div className="movie-details">
                                <span className="movie-details__title">
                                    Jurassic World (2015)
                                </span>
                                <span className="movie-details__rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    &nbsp;3.2 (400)
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <img src="http://www.fubiz.net/wp-content/uploads/2015/02/Mad-Max.jpg" className="img-responsive"/>
                            <div className="movie-details">
                                <span className="movie-details__title">
                                    Mad Max (2015)
                                </span>
                                <span className="movie-details__rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    &nbsp;3.2 (400)
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <img src="http://www.fubiz.net/wp-content/uploads/2015/02/z-Frank.jpg" className="img-responsive"/>
                            <div className="movie-details">
                                <span className="movie-details__title">
                                    Frank (2013)
                                </span>
                                <span className="movie-details__rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    &nbsp;3.2 (400)
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <img src="http://www.fubiz.net/wp-content/uploads/2015/02/Theory-of-Everything.jpg" className="img-responsive"/>
                            <div className="movie-details">
                                <span className="movie-details__title">
                                    Theory of Everything (2014)
                                </span>
                                <span className="movie-details__rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    &nbsp;3.2 (400)
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <img src="http://www.fubiz.net/wp-content/uploads/2015/02/movie-posters-twofive-07.jpg" className="img-responsive"/>
                            <div className="movie-details">
                                <span className="movie-details__title">
                                    Ant Man (2015)
                                </span>
                                <span className="movie-details__rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    &nbsp;3.2 (400)
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <img src="http://www.fubiz.net/wp-content/uploads/2015/02/movie-posters-twofive-03.jpg" className="img-responsive"/>
                            <div className="movie-details">
                                <span className="movie-details__title">
                                    Heart of Sea (2016)
                                </span>
                                <span className="movie-details__rating">
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    <i className="fa fa-star" />
                                    &nbsp;3.2 (400)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}