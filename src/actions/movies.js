import request from 'superagent';
import { APIEndpoints } from 'constants/CommonConstants';
import {toastr} from 'react-redux-toastr'

function addMovieResponse(payload) {
    
    toastr.success('Success', 'The movie has been added successfully.');
    return {
        type: 'ADD_MOVIE',
        payload
    }
}

function getAllMoviesResponse(payload) {
    return {
        type: 'GET_ALL_MOVIES',
        payload
    }
}

function deleteMovieResponse(id) {
    toastr.success('Success', 'The movie has been deleted successfully.');
    return {
        type: 'DELETE_MOVIE',
        id
    }
}

function cancelDeleteMovie() {
    return {
        type: 'CANCEL_DELETE_MOVIE'
    }
}

function getMovieResponse(res) {
    return {
        type: 'GET_MOVIE',
        res
    }
}

export function addMovie(payload) {
    return dispatch => {
        request.post(APIEndpoints.ADD_MOVIE)
        .set('Content-Type', 'application/json')
        .set('authorization', localStorage.getItem('token'))
        .send(payload)
        .end(function(err, res) {
            if(!res.error) {
                dispatch(addMovieResponse(res.body.res));
            }
        })
    }
}

export function getAllMovies() {
    return dispatch => {
        request.get(APIEndpoints.MOVIES)
        .set('authorization', localStorage.getItem('token'))
        .end(function(err, res) {
            if(!res.error) {
                dispatch(getAllMoviesResponse(res.body.res));
            }
        })
    }
}

export function deleteMovie(id) {
    return dispatch => {
        toastr.confirm('Are you sure about that!', {
            onOk: () => {
                request.delete(APIEndpoints.MOVIES + id)
                .set('authorization', localStorage.getItem('token'))
                .end(function(err, res) {
                    if(!res.error) {
                        dispatch(deleteMovieResponse(id));
                    }
                })
            },
            onCancel: () => {
                cancelDeleteMovie();
            }
        });
    }    
}

export function getMovie(id) {
    return dispatch => {
        request.get(APIEndpoints.MOVIES + id)
        .set('authorization', localStorage.getItem('token'))
        .end(function(err, res) {
            if(!res.error) {
                dispatch(getMovieResponse(res.body.res));
            }
        })
    }
}

export function getLatestMovies() {
    return dispatch => {
        request.post(APIEndpoints.LATEST_MOVIES)
        .set('authorization', localStorage.getItem('token'))
        .set('Content-Type', 'application/json')
        .end(function(err, res) {
            if(!res.error) {
                dispatch(getLatestMoviesResponse(res.body.res));
            }
        })
    }
}

function getLatestMoviesResponse(res) {
    return {
        type: 'LATEST_MOVIES_RESPONSE',
        res
    }
}

export function getBestMovies() {
    return dispatch => {
        request.post(APIEndpoints.BEST_MOVIES)
        .set('authorization', localStorage.getItem('token'))
        .set('Content-Type', 'application/json')
        .end(function(err, res) {
            if(!res.error) {
                dispatch(getBestMoviesResponse(res.body.res));
            }
        })
    }
}


function getBestMoviesResponse(res) {
    return {
        type: 'BEST_MOVIES_RESPONSE',
        res
    }
}