import React, { Component } from 'react';

import { MovieStars } from 'components/Movie/MovieStars';

export class Filmography extends Component {

	render() {
		return (
			<div>
				<h2 className="main-title">Filmography</h2>
				<table className="table table-responsive" id="filmography-table">
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
							<tr>
								<td>{movie.title}</td>
								<td>{movie.year}</td>
								<td>Actor</td>
								<td><MovieStars rating={movie.overallRating} /> ({movie.ratingsCount} reviews)</td>
							</tr>
						)
					})}
				</table>
			</div>
		)
	}
}