import React, { Component } from 'react';
import { Link } from 'react-router';

import { MovieStars } from 'components/Movie/MovieStars';

export class RatedMovies extends Component {

	render() {
		return (
			<div>
				<h2 className="main-title">Highest Rated Movies</h2>
				<div className="row">
					{this.props.movies.map( ( movie ) => {
						return (
							<div className="col-sm-2" key={movie._id}>
								<Link to={'/movie/' + movie._id}><img src={movie.posterUrl} className="img img-responsive" /></Link><br />
								<b>{movie.title}</b> <br />
								<MovieStars rating={movie.overallRating} /> <br /> ({movie.ratingsCount} reviews)
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}