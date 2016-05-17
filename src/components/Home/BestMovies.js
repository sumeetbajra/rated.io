import React, { Component } from 'react';

import { styles } from './styles/styles.scss';

export class BestMovies extends Component {
    render() {
        return (
            <section id="latest-movies" className={`${styles}`}>
                <div className="container">
                    <h2>Best Movies this week</h2>
                    <div className="row">
                        <div className="col-sm-2">
                            <img src="http://www.fubiz.net/wp-content/uploads/2015/02/movie-posters-twofive-04.jpg" className="img-responsive"/>
                            <div className="movie-details">
                                <span className="movie-details__title">
                                    It follows (2015)
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
                            <img src="http://www.fubiz.net/wp-content/uploads/2015/02/Lost-River.jpg" className="img-responsive"/>
                            <div className="movie-details">
                                <span className="movie-details__title">
                                    Lost River (2013)
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
                            <img src="http://www.fubiz.net/wp-content/uploads/2015/02/Vice-Versa.png" className="img-responsive"/>
                            <div className="movie-details">
                                <span className="movie-details__title">
                                    Inside Out (2016)
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
                            <img src="http://www.fubiz.net/wp-content/uploads/2015/02/Un-homme-ideal.jpg" className="img-responsive"/>
                            <div className="movie-details">
                                <span className="movie-details__title">
                                    Un Homme Ideal (2015)
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
                            <img src="http://www.fubiz.net/wp-content/uploads/2015/02/Seafog.jpg" className="img-responsive"/>
                            <div className="movie-details">
                                <span className="movie-details__title">
                                    Sea of Fog (2015)
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
                            <img src="http://www.fubiz.net/wp-content/uploads/2015/02/0-Spectre.jpg" className="img-responsive"/>
                            <div className="movie-details">
                                <span className="movie-details__title">
                                    Spectre (2015)
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