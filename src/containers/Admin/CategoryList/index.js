import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { CategoriesTable } from 'components/Admin/CategoriesTable';
import { getMovieCategories } from 'actions/movies';

@connect(
	state => {
		return {
			categories: state.movies.categories
		}
	},
	dispatch => {
		return {
			getMovieCategories: bindActionCreators(getMovieCategories, dispatch)
		}
	}
)
export class CategoryList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			categories: []
		}
	}

	componentDidMount() {
		this.props.getMovieCategories().end((err, res) => {
			if(!res.body.error) {
				this.setState({
					categories: res.body.res
				})
			}
		});	
	}

	render() {
		return (
			<div>
                <h2>Manage Categories</h2>
                <hr />
                <CategoriesTable categories={this.state.categories}/>
            </div>
		);
	}
}
