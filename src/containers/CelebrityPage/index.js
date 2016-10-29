import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';

import { getCelebrity } from 'actions/celebrities';
import { getCelebrityRatedMovies } from 'actions/celebrities';
import { getCelebrityMovies } from 'actions/celebrities';

import { CelebrityInfo } from 'components/CelebrityPage/CelebrityInfo';
import { RatedMovies } from 'components/CelebrityPage/RatedMovies';
import { Filmography } from 'components/CelebrityPage/Filmography';

import { styles } from './style.scss';

@connect(
    state => { 
    	return { 
    		celebrity: state.celebrities.celebrity,
    		ratedMovies: state.celebrities.ratedMovies,
    		allMovies: state.celebrities.allMovies,
    	} 
    },
    dispatch => {
    	return {
	    	getCelebrity: bindActionCreators(getCelebrity, dispatch),
	    	getCelebrityRatedMovies: bindActionCreators(getCelebrityRatedMovies, dispatch),
	    	getCelebrityMovies: bindActionCreators(getCelebrityMovies, dispatch)
	    }
    }
)
export class CelebrityPage extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getCelebrity(this.props.params.id);
		this.props.getCelebrityRatedMovies(this.props.params.id);
		this.props.getCelebrityMovies(this.props.params.id);
	}

	render() {
		return (
			<section className={ `${styles} page` }>
                <div className="container">
                    <div className="row">
						<div className="col-sm-3">
							<img className="img img-responsive" src={this.props.celebrity.picture} />
						</div>
						<div className="col-sm-9 celebrity-description">
							<CelebrityInfo data={this.props.celebrity} bestMovie={this.props.ratedMovies.length ? this.props.ratedMovies[0] : null} />
							<hr />
							<RatedMovies movies={this.props.ratedMovies.length ? this.props.ratedMovies : []} />
							<hr />
							<Filmography movies={this.props.allMovies.length ? this.props.allMovies : []} />
						</div>
					</div>
				</div>
			</section> 
		);
	}
}