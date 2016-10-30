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
        this.state = {
            pageNumber: 1
        }
    }

    componentDidMount = () => {
        this.props.getAllMovies(this.state.pageNumber);
        var that = this;

        document.addEventListener('scroll', function (event) {
            if (document.body.scrollHeight <
                document.body.scrollTop +
                window.innerHeight + 200) {
                that.paginate();
            }
        });
    };

    paginate = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1
        });

        this.props.getAllMovies(this.state.pageNumber);
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