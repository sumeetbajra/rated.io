import React, { Component } from 'react';
import { Link } from 'react-router';
import { createForm } from 'rc-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { MoviesTable } from 'components/Admin/MoviesTable';

import * as actionCreators from 'actions/movies';

@connect(
    state => state.movies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class MovieList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getAllMovies();
    }

    render() {
        return (
            <div>
                <h2>Movie List</h2>
                <hr />
                <MoviesTable movies={this.props.movies} />
            </div>
        )
    }
}