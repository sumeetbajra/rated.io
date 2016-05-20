const initialState = {
    movies: [], 
    added: false,
    movieData: {},
    bestMovies: [],
    latestMovies: []
}

export function movies(state = initialState, action) {
    switch(action.type) {

        case 'ADD_MOVIE':
            location.hash = "/admin/list";
            return {
                ...state,
                movies: [
                    ...state.movies,
                    action.payload
                ],
                added: true
            }
            break;

        case 'GET_ALL_MOVIES':
            return {
                movies: action.payload
            }
            break;

        case 'GET_MOVIE':
            return {
                ...state,
                movieData: action.res[0]
            }
            break;

        case 'DELETE_MOVIE':
            var movies = state.movies.filter(function(movie) {
                return movie._id != action.id
            });
            return {
                ...state,
                movies: movies
            }
            break;

        case 'LATEST_MOVIES_RESPONSE':
            return {
                ...state,
                latestMovies: action.res
            }
            break;

        case 'BEST_MOVIES_RESPONSE':
            return {
                ...state,
                bestMovies: action.res
            }
            break;

        case 'UPDATE_MOVIE_RESPONSE':
            location.hash = '/admin/list';
            return state;
            break;

        default:
            return state;
    }
}