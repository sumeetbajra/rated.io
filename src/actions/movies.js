import request from 'superagent';
import { APIEndpoints } from 'constants/CommonConstants';
import {toastr} from 'react-redux-toastr';

function addMovieResponse(res) {
    if(!res.error)
        toastr.success('Success', 'The movie has been added successfully.');
    return {
        type: 'ADD_MOVIE',
        res
    }
}

function getAllMoviesResponse(res) {
    return {
        type: 'GET_ALL_MOVIES',
        res
    }
}

function deleteMovieResponse(res) {
     if(!res.error) toastr.success('Success', 'The movie has been deleted successfully.');
    return {
        type: 'DELETE_MOVIE',
        res
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
                dispatch(addMovieResponse(res.body));
            }
        })
    }
}

export function getAllMovies(page=1) {
    return dispatch => {
        request.get(APIEndpoints.ALL_MOVIES + page)
        .set('authorization', localStorage.getItem('token'))
        .end(function(err, res) {
            if(!res.error) {
                dispatch(getAllMoviesResponse(res.body));
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
                dispatch(getMovieResponse(res.body));
            }
        })
    }
}

export function updateMovie(id, payload) {
    return dispatch => {
        request.put(APIEndpoints.MOVIES + id)
        .set('authorization', localStorage.getItem('token'))
        .send(payload)
        .end(function(err, res) {
            if(!res.error) {
                dispatch(updateMovieResponse(res));
            }
        })
    }
}

function updateMovieResponse(res) {
    toastr.success('Success', 'The movie has been updated successfully.');
    return {
        type: 'UPDATE_MOVIE_RESPONSE',
        res
    }
}

export function getLatestMovies() {
    return dispatch => {
        request.post(APIEndpoints.LATEST_MOVIES)
        .set('authorization', localStorage.getItem('token'))
        .set('Content-Type', 'application/json')
        .end(function(err, res) {
            if(!res.error) {
                dispatch(getLatestMoviesResponse(res.body));
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
                dispatch(getBestMoviesResponse(res.body));
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

export function addRating(id, payload) {
    return dispatch => {
        request.put(APIEndpoints.ADD_RATING + id)
        .set('Content-Type', 'application/json')
        .set('authorization', localStorage.getItem('token'))
        .send(payload)
        .end(function(err, res) {
            if(!res.error) {
                dispatch(addRatingResponse(res.body));
            }
        })
    }
}

function addRatingResponse(res) {
    return {
        type: 'ADD_RATING_RESPONSE',
        res
    }
}

export function updateRating(id, payload) {
    return dispatch => {
        request.put(APIEndpoints.UPDATE_RATING + id)
        .set('Content-Type', 'application/json')
        .set('authorization', localStorage.getItem('token'))
        .send(payload)
        .end(function(err, res) {
            if(!res.error) {
                dispatch(updateRatingResponse(res.body));
            }
        })
    }
}

function updateRatingResponse(res) {
    return {
        type: 'UPDATE_RATING_RESPONSE',
        res
    }
}

export function uploadImage(imageData) {
    return dispatch => {
        request.post(APIEndpoints.IMAGE_UPLOAD)
        .set('Content-Type', 'application/json')
        .set('Authorization', APIEndpoints.IMAGE_UPLOAD_AUTHORIZATION)
        .send({
            image: imageData,
            type: 'base64'
        })
        .end(function(err, res) {
            if(res.success) {
                dispatch(uploadImageSuccess(res.data.link));
            }else {
                console.log(res);
            }
        })
    }
}

function uploadImageSuccess(url) {
    return {
        type: 'IMAGE_UPLOAD_SUCCESS',
        url
    }
}

export function resetMovieList() {
    return {
        type: 'RESET_MOVIE_LIST'
    }
}