import React, { Component } from 'react';
import { createForm } from 'rc-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

    deleteMovie = (id, e) => {
        e.preventDefault();
        this.props.deleteMovie(id)
    }

    render() {
        return (
            <div>
                <h2>Movie List</h2>
                <hr />
                <table className="table table-responsive table-striped table-bordered">
                    <thead>
                        <tr>                    
                            <td>
                                Poster
                            </td>
                            <td>
                                Title
                            </td>
                            <td>
                                Director
                            </td>
                            <td>
                                Cast
                            </td>
                            <td>
                                Action
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.movies.map((movie) => {
                            return (
                                <tr key={movie._id}>
                                    <td><img src={movie.posterUrl} width="200"/></td>
                                    <td>{movie.title} ({movie.year})</td>
                                    <td>{movie.director}</td>
                                    <td>{movie.cast}</td>
                                    <td><a href="#">Edit</a> <a href="#" onClick={this.deleteMovie.bind(this, movie._id)}>Delete</a></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}