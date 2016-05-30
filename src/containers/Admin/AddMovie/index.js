import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from 'actions/movies';
import { AddMovieForm } from 'components/Admin/AddMovieForm';

@connect(
    state => state.movies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class AddMovie extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h2>Add new movie</h2>
                <hr />
                <AddMovieForm addMovie={this.props.addMovie} uploadImage={this.props.uploadImage}/>
            </div>
        );
    }
}