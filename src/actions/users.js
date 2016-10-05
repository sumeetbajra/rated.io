import request from 'superagent';
import { APIEndpoints } from 'constants/CommonConstants';
import {toastr} from 'react-redux-toastr';

function registerSuccess(res) {
    if(!res.error)
        toastr.success('Success', 'You have been registered successfully. Please sign in.');
    return {
        type: 'LOGIN_USER',
        res
    }
}

function loginSuccess(res) {
    return {
        type: 'LOGIN_USER',
        res
    }
}

export function addUser(userData) {
    return dispatch => {
        request.post('http://localhost:8080/users/register')
        .set('Content-Type', 'application/json')
        .send(userData)
        .end(function(err, res) {
            console.log(res);
            if(!res.error) {
                dispatch(registerSuccess(res.body));
            }
        })
    }
}

export function login(payload) {
    return dispatch => {
        request.post('http://localhost:8080/users/login')
        .set('Content-Type', 'application/json')
        .send(payload)
        .end(function(err, res) {
            if(!res.error) {
                dispatch(loginSuccess(res.body));
            }
        })
    }
}

export function getUser(id) {
    return dispatch => {
        request.get(APIEndpoints.GET_USER + id)
        .set('Content-Type', 'application/json')
        .set('Authorization', localStorage.getItem('token'))
        .end(function(err, res) {
            if(!res.error) {
                dispatch(getUserResponse(res.body));
            }
        })
    }
}

function getUserResponse(res) {
    return {
        type: 'GET_USER_RESPONSE',
        res
    }
}

export function getUserRatings(id) {
    return dispatch => {
        request.get(APIEndpoints.GET_USER_RATINGS + id)
        .set('Authorization', localStorage.getItem('token'))
        .end(function(err, res) {
            if(!res.error) {
                dispatch(getUserRatingsResponse(res.body));
            }
        })
    }
}

function getUserRatingsResponse(res) {
    return {
        type: 'GET_USER_RATINGS_RESPONSE',
        res
    }
}

export function logout() {
    return {
        type: 'LOGOUT'
    }
}

export function resetError() {
    return {
        type: 'RESET_ERROR'
    }
}