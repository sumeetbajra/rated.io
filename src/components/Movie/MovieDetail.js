import React, { Component } from 'react';

export class MovieDetail extends Component {
    render() {
        const movie = this.props.data;
        return (
            <div>
                <h2>{movie.title} ({movie.year})</h2>
                <div className="movie-meta">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    &nbsp;(52 reviews)
                    <br />
                    {movie.duration} mins - Action | Fiction | SciFi<br />
                    Director: {movie.director}<br />
                    Cast: {movie.cast}
                </div>
                <div className="movie-desc">
                    {movie.description}
                </div>
            </div>
        );
    }
}