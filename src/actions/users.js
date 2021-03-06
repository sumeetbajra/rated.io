import request from 'superagent';
import { APIEndpoints } from 'constants/CommonConstants';
import {toastr} from 'react-redux-toastr';

export function verifyToken(payload) {
    return dispatch => {
        request.post(APIEndpoints.VERIFY_TOKEN)
            .set('Content-Type', 'application/json')
            .send(payload)
            .end(function(err, res) {
                if(!res.error) {
                    dispatch(verifyTokenResponse(res.body));
                }
            });
    }
}

function verifyTokenResponse(res) {
    return {
        type: 'VERIFY_TOKEN_RESPONSE',
        res
    }
}

function registerSuccess(res, redirect) {
    if(!res.error)
        toastr.success('Success', 'You have been registered successfully. Please sign in.');
    return {
        type: 'LOGIN_USER',
        res,
        redirect
    }
}

function loginSuccess(res, redirect) {
    return {
        type: 'LOGIN_USER',
        res,
        redirect: redirect
    }
}

export function addUser(userData, redirect) {
    return dispatch => {
        request.post(APIEndpoints.REGISTER_USER)
        .set('Content-Type', 'application/json')
        .send(userData)
        .end(function(err, res) {
            console.log(res);
            if(!res.error) {
                dispatch(registerSuccess(res.body, redirect));
            }
        })
    }
}

export function login(payload, redirect) {
    return dispatch => {
        request.post(APIEndpoints.LOGIN_USER)
        .set('Content-Type', 'application/json')
        .send(payload)
        .end(function(err, res) {
            if(!res.error) {
                dispatch(loginSuccess(res.body, redirect));
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