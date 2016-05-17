import request from 'superagent';

function registerSuccess(userData) {
    return {
        type: 'ADD_USER',
        userData
    }
}

function loginSuccess(userData) {
    return {
        type: 'LOGIN_USER',
        userData
    }
}

export function addUser(userData) {
    return dispatch => {
        request.post('http://localhost:8080/users/register')
        .set('Content-Type', 'application/json')
        .send(userData)
        .end(function(err, res) {
            if(!res.error) {
                dispatch(registerSuccess(res.body.res));
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
                dispatch(loginSuccess(res.body.res));
            }
        })
    }
}

export function logout() {
    return {
        type: 'LOGOUT'
    }
}