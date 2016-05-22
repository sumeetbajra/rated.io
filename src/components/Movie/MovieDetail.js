import React, { Component } from 'react';

export class MovieDetail extends Component {
    render() {
        const movie = this.props.data;
        let rating = 0;
        let stars = [];
        if(movie.ratings) {
            for (let i = movie.ratings.length - 1; i >= 0; i--) {
                rating += parseInt(movie.ratings[i].rating)
            }
            rating = Math.round(((rating/movie.ratings.length)*2)/2);
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