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
            pageNumber: 1,
            loading: false
        }
    }

    componentDidMount = () => {
        this.props.getAllMovies(this.state.pageNumber);
        document.addEventListener('scroll', this.scrollPaginate);
    };

    scrollPaginate = (event) => {
        if (document.body.scrollHeight <
            document.body.scrollTop +
            window.innerHeight + 200 && !this.state.loading) {
            this.paginate();
        }
    };

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollPaginate);
        this.props.resetMovieList();
    }

    paginate = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1,
            loading: true
        });
        this.props.getAllMovies(this.state.pageNumber);
    };

    componentWillReceiveProps(nextProps) {
        if(this.props.movies.length != nextProps.movies.length) {
            this.setState({
                loading: false
            });
        }
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