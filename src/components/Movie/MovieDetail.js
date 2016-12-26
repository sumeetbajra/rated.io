import React, { Component } from 'react';
import { Link } from 'react-router';

import { MovieStars } from './MovieStars';

export class MovieDetail extends Component {
    render() {
        const movie = this.props.data;

        return (
            <div>
                <h2>{movie.title} ({movie.year})</h2>
                <div className="movie-meta">
                    <MovieStars rating={movie.overallRating} />
                    &nbsp;({movie.ratingsCount} {movie.ratingsCount > 1 ? 'reviews' : 'review'})
                    <br />
                    {movie.duration} mins - {movie.category ? movie.category.categoryName : ''}<br />
                    <b>Director:</b> {movie.director && movie.director.map((director, i) => {
                                return <span key={director._id}><Link to={'/celebrity/' + director.celebrityId._id}>{director.celebrityId.fullName}</Link>{i+1 != movie.director.length && <span>,</span>} </span>
                            })}<br />
                    <b>Cast:</b> {movie.cast && movie.cast.map((cast, i) => {
                                return <span key={cast._id}><Link to={'/celebrity/' + cast.celebrityId._id}>{cast.celebrityId.fullName}</Link>{i+1 != movie.cast.length && <span>,</span>} </span>
                            })}<br />
                </div>
                <div className="movie-desc">
                    {movie.description}
                </div>
            </div>
        );
    }
}