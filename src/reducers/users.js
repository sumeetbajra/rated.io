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
            localStorage.setItem('userData', JSON.stringify({
                username: action.userData.user.username, 
                firstName: action.userData.user.firstName, 
                lastName: action.userData.user.lastName
            }));
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

        default:
            return state;
    }
}