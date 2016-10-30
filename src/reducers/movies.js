const initialState = {
    movies: [], 
    added: false,
    movieData: {},
    bestMovies: [],
    latestMovies: [],
    errorMessage: null,
    imgUrl: null
}

function setError(message) {
    return {
        ...initialState,
        errorMessage: message
    }
}

export function movies(state = initialState, action) {
    console.log(action);
    if(action.res && action.res.error && (action.res.message == 'AUTHENTICATION_ERROR' || action.res.message == 'NO_TOKEN_PROVIDED')) {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        location.hash = '/sign-in';
        return {
            ...state,
            errorMessage: 'Please log in.'
        };
    }

    switch(action.type) {

        case 'ADD_MOVIE':
            if(!action.res.error) {
                location.hash = "/admin/list";
                return {
                    ...state,
                    movies: [
                        ...state.movies,
                        action.res.res
                    ],
                    added: true
                }
            }else {
                return {
                    ...state,
                    errorMessage: action.res.message
                }
            }
            break;

        case 'GET_ALL_MOVIES':
            if(!action.res.error) {
                return {
                    ...state,
                    movies: state.movies.concat(action.res.res.docs)
                }
            }else {
                return {
                    ...state,
                    errorMessage: action.res.message
                }
            }
            break;

        case 'GET_MOVIE':
            if(!action.res.error) {
                return {
                    ...state,
                    movieData: action.res.res
                }
            }else {
                return {
                    ...state,
                    errorMessage: action.res.message
                }
            }
            break;

        case 'DELETE_MOVIE':
            if(!action.res.error) {
                var movies = state.movies.filter(function(movie) {
                    return movie._id != action.id
                });
                return {
                    ...state,
                    movies: movies
                }
            }else {
                return {
                    ...state,
                    errorMessage: action.res.message
                }
            }
            break;

        case 'LATEST_MOVIES_RESPONSE':
            if(!action.res.error) {
                return {
                    ...state,
                    latestMovies: action.res.res
                }
            }else {
                return {
                    ...state,
                    errorMessage: action.res.message
                }
            }
            break;

        case 'BEST_MOVIES_RESPONSE':
            if(!action.res.error) {
                return {
                    ...state,
                    bestMovies: action.res.res
                }
            }else {
                return {
                    ...state,
                    errorMessage: action.res.message
                }
            }
            break;

        case 'UPDATE_MOVIE_RESPONSE':
            if(!action.res.error) {
                location.hash = '/admin/list';
                return state;
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

        case 'ADD_RATING_RESPONSE':
            if(!action.res.error) {
                return {
                    ...state,
                    movieData: action.res.res
                }
                return state;                    
            }else {
                return {
                    ...state,
                    errorMessage: action.res.message
                }
            }
            break;

        case 'UPDATE_RATING_RESPONSE':
            if(!action.res.error) {
                return {
                    ...state,
                    movieData: action.res.res
                }
                return state;                    
            }else {
                return {
                    ...state,
                    errorMessage: action.res.message
                }
            }
            break;

        case 'IMAGE_UPLOAD_SUCCESS':
            return {
                ...state, 
                imgUrl: action.url
            }
            break;

        default:
            return state;
    }
}