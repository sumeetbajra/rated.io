import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AddCategoryForm } from 'components/Admin/AddCategoryForm';

import { getMovieCategory, updateCategory } from 'actions/movies';

@connect(
	state => {
		return {}
	},
	dispatch => {
		return {
			getMovieCategory: bindActionCreators(getMovieCategory, dispatch),
			updateCategory: bindActionCreators(updateCategory, dispatch)
		}
	}
)
export class UpdateCategory extends Component {

	constructor(props) {
		super(props);
		this.state = {
			category: null
		}
	}

	componentDidMount = () => {
		this.props.getMovieCategory(this.props.params.id).end((err, res) => {
			if(!res.error) {
				this.setState({
					category: res.body.res[0]
				})
			}
		})
	}

	render() {
		return (
			<div>
                <h2>Update Category</h2>		
                <AddCategoryForm category={this.state.category} save={this.props.updateCategory}/>
         	</div>
		);
	}
}
