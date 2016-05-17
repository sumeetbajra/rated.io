import request from 'superagent';
import { APIEndpoints } from 'constants/CommonConstants';

function addMovieResponse(payload) {
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
    return {
        type: 'DELETE_MOVIE',
        id
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
        .end(function(err, res) {
            if(!res.error) {
                dispatch(getAllMoviesResponse(res.body.res));
            }
        })
    }
}

export function deleteMovie(id) {
    return dispatch => {
        request.delete(APIEndpoints.MOVIES + id)
        .end(function(err, res) {
            if(!res.error) {
                dispatch(deleteMovieResponse(id));
            }
        })
    }
}

export function getMovie(id) {
    return dispatch => {
        request.get(APIEndpoints.MOVIES + id)
        .end(function(err, res) {
            if(!res.error) {
                dispatch(getMovieResponse(res.body.res));
            }
        })
    }
}