import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AddCategoryForm } from 'components/Admin/AddCategoryForm';
import { addMovieCategory } from 'actions/movies';

@connect(
	state => {
		return {}
	},
	dispatch => {
		return {
			addMovieCategory: bindActionCreators(addMovieCategory, dispatch)
		}
	}
)
export class AddCategory extends Component {
	render() {
		return (
            <div>
                <h2>Add Category</h2>
                <hr />
                <AddCategoryForm save={this.props.addMovieCategory}/>
            </div>
        )
	}
}
