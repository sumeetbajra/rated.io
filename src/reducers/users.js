import { browserHistory } from 'react-router';

const initialState = {
    users: [],
    session: {
        userId: null,
        token: null,
        userData: null
    }
}

export function users(state = initialState, action) {
    switch(action.type) {
        case 'ADD_USER':
            return {
                ...state,
                users: [
                    ...state.users,
                    action.userData
                ]
            }
            break;

        case 'LOGIN_USER':
            localStorage.setItem('token', action.userData.token);
            location.hash = "/";
            return {
                ...state,
                session: {
                    userId: action.userData.user._id,
                    token: action.userData.token,
                    userData: action.userData.user
                }
            }
            break;

        case 'LOGOUT':
            localStorage.setItem('token', null);
            return {
                ...state,
                session: {
                    userId: null,
                    token: null,
                    userData: null
                }
            }
            break;

        default:
            return state;
    }
}