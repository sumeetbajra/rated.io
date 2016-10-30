import React, { Component } from 'react';
import { Link } from 'react-router';

export class MoviesTable extends Component {

    deleteMovie = (id, e) => {
        e.preventDefault();
        this.props.deleteMovie(id)
    };

    render() {
        return (
            <table className="table table-responsive">
                <thead>
                    <tr>                    
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
                                <td>{movie.title} ({movie.year})</td>
                                <td>{movie.director.map((director) => {
                                    return <div key={director._id}>{director.fullName || director.celebrityId.fullName}</div>
                                })}</td>
                                 <td>{movie.cast.map((cast) => {
                                    return <div key={cast._id}>{cast.fullName || cast.celebrityId.fullName}</div>
                                })}</td>
                                <td>
                                    <Link to={'/admin/update-movie/' + movie._id} className="btn btn-primary btn-sm">
                                        <i className="fa fa-pencil" />
                                    </Link>&nbsp;
                                    <a href="#" onClick={this.deleteMovie.bind(this, movie._id)} className="btn btn-danger btn-sm">
                                        <i className="fa fa-trash" />
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}