import React, { Component } from 'react';
import { Link } from 'react-router';

export class MovieDetail extends Component {
    render() {
        const movie = this.props.data;
        let rating = 0;
        let stars = [];
        if(movie.ratings) {
            for (let i = movie.ratings.length - 1; i >= 0; i--) {
                rating += +movie.ratings[i].rating;
            }
            rating = (Math.round((rating/movie.ratings.length)*2))/2;
            rating = rating.toString();

            let ratings = rating.split('.');
            let fullStars = parseInt(ratings[0]);
            
            for (let i = fullStars - 1; i >= 0; i--) {
                stars.push(<i className="fa fa-star" key={i}/>);
            }
            if(ratings[1]) {
                stars.push(<i className="fa fa-star-half" key={Date.now}/>);
            }
        }

        return (
            <div>
                <h2>{movie.title} ({movie.year})</h2>
                <div className="movie-meta">
                    {stars}
                    &nbsp;({movie.ratings ? movie.ratings.length : 0} reviews)
                    <br />
                    {movie.duration} mins - Action | Fiction | SciFi<br />
                    <b>Director:</b> {movie.director && movie.director.map((director, i) => {
                                return <span><Link to={'/celebrity/' + director.celebrityId._id}>{director.celebrityId.fullName}</Link>{i+1 != movie.director.length && <span>,</span>} </span>
                            })}<br />
                    <b>Cast:</b> {movie.cast && movie.cast.map((cast, i) => {
                                return <span><Link to={'/celebrity/' + cast.celebrityId._id}>{cast.celebrityId.fullName}</Link>{i+1 != movie.cast.length && <span>,</span>} </span>
                            })}<br />
                </div>
                <div className="movie-desc">
                    {movie.description}
                </div>
            </div>
        );
    }
}