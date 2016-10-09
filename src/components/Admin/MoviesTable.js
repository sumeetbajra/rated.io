import React, { Component } from 'react';
import { Link } from 'react-router';

export class MoviesTable extends Component {

    deleteMovie = (id, e) => {
        e.preventDefault();
        this.props.deleteMovie(id)
    }

    render() {
        return (
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
                                <td>{movie.director.map((director) => {
                                    return <li>{director.celebrityId.fullName}</li>
                                })}</td>
                                 <td>{movie.cast.map((cast) => {
                                    return <li>{cast.celebrityId.fullName}</li>
                                })}</td>
                                <td><Link to={'/admin/update-movie/' + movie._id}>Edit</Link> <a href="#" onClick={this.deleteMovie.bind(this, movie._id)}>Delete</a></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}