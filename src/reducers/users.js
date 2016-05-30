import { browserHistory } from 'react-router';

const initialState = {
    users: [],
    session: {
        userId: null,
        token: null,
        userData: null
    },
    profile: null,
    errorMessage: null,
    reviews: []
}

export function users(state = initialState, action) {

     if(action.res && action.res.error && (action.res.message == 'AUTHENTICATION_ERROR' || action.res.message == 'NO_TOKEN_PROVIDED')) {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        location.hash = '/sign-in';
        return {
            ...state,
            errorMessage: 'Your login session has expired. Please login again.'
        };
    }

    switch(action.type) {
        case 'ADD_USER':
        if(!action.res.error) {
            location.hash = '/sign-in';
            return {
                ...state,
                users: [
                    ...state.users,
                    action.res.res
                ]
            }
        }else {
            return {
                    ...state,
                    errorMessage: action.res.message
                }
        }
        break;

        case 'LOGIN_USER':
            if(!action.res.error) {
                localStorage.setItem('token', action.res.res.token);
                localStorage.setItem('userData', JSON.stringify({
                    id: action.res.res.user._id,
                    username: action.res.res.user.username, 
                    firstName: action.res.res.user.firstName, 
                    lastName: action.res.res.user.lastName
                }));
                location.hash = "/";
                return {
                    ...state,
                    session: {
                        userId: action.res.res.user._id,
                        token: action.res.res.token,
                        userData: action.res.res.user
                    }
                }
            }else {
                return {
                    ...state,
                    errorMessage: action.res.message
                }
            }
            break;

        case 'LOGOUT':
            localStorage.removeItem('token');
            localStorage.removeItem('userData');
            return {
                ...state,
                session: {
                    userId: null,
                    token: null,
                    userData: null
                }
            }
            break;

        case 'GET_USER_RESPONSE':
            if(!action.res.error) {
                return {
                    ...state,
                    profile: action.res.res
                }
            }else {
                return {
                    ...state,
                    errorMessage: action.res.message
                }
            }
            break;

        case 'GET_USER_RATINGS_RESPONSE':
            if(!action.res.error) {
                return {
                    ...state, 
                    reviews: action.res.res
                }
            }else {
                return {
                    ...state,
                    errorMessage: action.res.message
                }
            }
            break;

        case 'RESET_ERROR':
            return {
                ...state,
                errorMessage: null
            }
            break;

        default:
            return state;
    }
}