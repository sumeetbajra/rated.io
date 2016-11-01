import React, { Component } from 'react';
import moment from 'moment';

import { MovieStars } from 'components/Movie/MovieStars';

export class CelebrityInfo extends Component {

	render() {
		return (
			<div>
				<h2>{this.props.data.fullName}</h2>
				<div className="row celebrity-description__row">
					<div className="col-sm-2 celebrity-description__row__label">
						<span>Best Movie:</span>
					</div>
					<div className="col-sm-10 celebrity-description__row__desc">
						{this.props.bestMovie ? <span><MovieStars rating={this.props.bestMovie.overallRating} /> {this.props.bestMovie.title} ({this.props.bestMovie.year})</span> : <i>No movies yet</i>}
					</div>
				</div>
				{/**<div className="row celebrity-description__row">
					<div className="col-sm-2 celebrity-description__row__label">
						<span>Worst Movie:</span>
					</div>
					<div className="col-sm-10 celebrity-description__row__desc">
						<MovieStars rating="2" /> The Journey (1988)
					</div>
				</div>**/}
				<div className="row celebrity-description__row">
					<div className="col-sm-2 celebrity-description__row__label">
						<span>Birth Date:</span>
					</div>
					<div className="col-sm-10 celebrity-description__row__desc">
						{moment(this.props.data.birthDate).format('MMM DD, YYYY')}
					</div>
				</div>
				<div className="row celebrity-description__row">
					<div className="col-sm-2 celebrity-description__row__label">
						<span>Birth Place:</span>
					</div>
					<div className="col-sm-10 celebrity-description__row__desc">
						{this.props.data.birthPlace}
					</div>
				</div>
				<div className="row celebrity-description__row">
					<div className="col-sm-2 celebrity-description__row__label">
						<span>Bio:</span>
					</div>
					<div className="col-sm-10 celebrity-description__row__desc">
						{this.props.data.bio}
					</div>
				</div>
			</div>
		)
	}
}