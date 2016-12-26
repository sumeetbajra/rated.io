import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {toastr} from 'react-redux-toastr';

import { CategoriesTable } from 'components/Admin/CategoriesTable';
import { getMovieCategories, deleteMovieCategory } from 'actions/movies';

@connect(
	state => {
		return {
			categories: state.movies.categories
		}
	},
	dispatch => {
		return {
			getMovieCategories: bindActionCreators(getMovieCategories, dispatch),
			deleteMovieCategory: bindActionCreators(deleteMovieCategory, dispatch)
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

	loadMovieCategories = () => {
		this.props.getMovieCategories().end((err, res) => {
			if(!res.body.error) {
				this.setState({
					categories: res.body.res
				})
			}
		});	
	}

	componentDidMount() {
		this.loadMovieCategories();
	}

	deleteMovieCategory = (id) => {
		 toastr.confirm('Are you sure about that!', {
            onOk: () => {
                this.props.deleteMovieCategory(id).end((err, res) => {
		            if(!res.error) {
		            	toastr.success('Success', 'The movie category has been deleted successfully.');
		            	this.loadMovieCategories();
		            }
		        })
            },
            onCancel: () => {
                //cancelDeleteMovie();
            }
        });
	}

	render() {
		return (
			<div>
                <h2>Manage Categories</h2>
                <hr />
                <CategoriesTable categories={this.state.categories} delete={this.deleteMovieCategory}/>
            </div>
		);
	}
}
