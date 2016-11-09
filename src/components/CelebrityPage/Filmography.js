import React, { Component } from 'react';

import { MovieStars } from 'components/Movie/MovieStars';

export class Filmography extends Component {

	render() {
		return (
			<div>
				<h2 className="main-title">Filmography</h2>
				<table className="table table-responsive" id="filmography-table">
					<tbody>
						<tr>
							<th>
								Title
							</th>
							<th>
								Year
							</th>
							<th>
								Credit
							</th>
							<th>
								Ratings
							</th>
						</tr>
						{this.props.movies.map( (movie) => {
							return (
								<tr key={movie._id}>
									<td>{movie.title}</td>
									<td>{movie.year}</td>
									<td>
										<div>{movie.cast.map(c => c.celebrityId == this.props.celebrityId ? 'Cast' : '')}</div>
										<div>{movie.director.map(d => d.celebrityId == this.props.celebrityId ? 'Director' : '')}</div>
									</td>
									<td><MovieStars rating={movie.overallRating} /> ({movie.ratingsCount} {movie.ratingsCount > 1 ? 'reviews' : 'review'})</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}