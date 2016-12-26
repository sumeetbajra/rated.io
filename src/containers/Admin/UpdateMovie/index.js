import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { UpdateMovieForm } from 'components/Admin/UpdateMovieForm';

import * as actionCreators from 'actions/movies';

@connect(
    state => state.movies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class UpdateMovie extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getMovie(this.props.params.id);
    }

    render() {
        return (
            <div>
                <h2>Update movie</h2>
                <hr />
                <UpdateMovieForm updateMovie={this.props.updateMovie} getMovieCategories={this.props.getMovieCategories} movie={this.props.movieData}/>
            </div>
        )
    }
}