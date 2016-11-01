import React, { Component } from 'react';
import moment from 'moment';

import { MovieStars } from 'components/Movie/MovieStars';

export class CelebrityInfo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bioExcerpt: true
		}
	}

	_readMore = (e) => {
		this.setState({
			bioExcerpt: false
		});
		e.preventDefault();
	}

	_readLess = (e) => {
		this.setState({
			bioExcerpt: true
		});
		e.preventDefault();
	}

	render() {
		let excerptLink = this.props.data.bio && <span>{this.props.data.bio.substring(0, 400)}.. <a href="#" onClick={this._readMore}>Read More</a></span>;
		let bio = this.state.bioExcerpt && this.props.data.bio ? (this.props.data.bio[401] ? excerptLink : this.props.data.bio.substring(0, 400)) : <span>{this.props.data.bio} <a href="#" onClick={this._readLess}>Show Less</a></span>;
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
						{bio}
					</div>
				</div>
			</div>
		)
	}
}