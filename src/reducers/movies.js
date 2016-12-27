const initialState = {
  movies: [],
  added: false,
  movieData: {},
  bestMovies: [],
  latestMovies: [],
  errorMessage: null,
  imgUrl: null,
  categories: [],
  categoryMovies: [],
};

function setError(message) {
  return {
    ...initialState,
    errorMessage: message,
  };
}

export function movies(state = initialState, action) {
  console.log(action);
  if (action.res && action.res.error && (action.res.message === 'AUTHENTICATION_ERROR' || action.res.message === 'NO_TOKEN_PROVIDED')) {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    location.hash = '/sign-in';
    return {
      ...state,
      errorMessage: 'Please log in.',
    };
  }

  switch (action.type) {

    case 'ADD_MOVIE':
      if (!action.res.error) {
        location.hash = '/admin/list';
        return {
          ...state,
          movies: [
            ...state.movies,
            action.res.res,
          ],
          added: true,
        };
      }
      return {
        ...state,
        errorMessage: action.res.message,
      };

    case 'GET_ALL_MOVIES':
      if (!action.res.error) {
        return {
          ...state,
          movies: state.movies.concat(action.res.res.docs),
        };
      }
      return {
        ...state,
        errorMessage: action.res.message,
      };

    case 'GET_MOVIE':
      if (!action.res.error) {
        return {
          ...state,
          movieData: action.res.res,
        };
      }
      return {
        ...state,
        errorMessage: action.res.message,
      };

    case 'DELETE_MOVIE':
      if (!action.res.error) {
        const newMovies = state.movies.filter((movie) => {
          return movie._id !== action.res;
        });
        return {
          ...state,
          newMovies,
        };
      }
      return {
        ...state,
        errorMessage: action.res.message,
      };

    case 'LATEST_MOVIES_RESPONSE':
      if (!action.res.error) {
        return {
          ...state,
          latestMovies: action.res.res,
        };
      }
      return {
        ...state,
        errorMessage: action.res.message,
      };

    case 'BEST_MOVIES_RESPONSE':
      if (!action.res.error) {
        return {
          ...state,
          bestMovies: action.res.res,
        };
      }
      return {
        ...state,
        errorMessage: action.res.message,
      };

    case 'UPDATE_MOVIE_RESPONSE':
      if (!action.res.error) {
        location.hash = '/admin/list';
        return state;
      }
      return {
        ...state,
        errorMessage: action.res.message,
      };

    case 'RESET_ERROR':
      return {
        ...state,
        errorMessage: null,
      };

    case 'ADD_RATING_RESPONSE':
      if (!action.res.error) {
        return {
          ...state,
          movieData: action.res.res,
        };
      }
      return {
        ...state,
        errorMessage: action.res.message,
      };

    case 'UPDATE_RATING_RESPONSE':
      if (!action.res.error) {
        return {
          ...state,
          movieData: action.res.res,
        };
      }
      return {
        ...state,
        errorMessage: action.res.message,
      };

    case 'IMAGE_UPLOAD_SUCCESS':
      return {
        ...state,
        imgUrl: action.url,
      };

    case 'RESET_MOVIE_LIST':
      return {
        ...state,
        movies: [],
      };

    case 'ADD_MOVIE_CATEGORY_RESPONSE':
      location.hash = '/admin/category-list';
      return state;

    case 'UPDATE_MOVIE_CATEGORY_RESPONSE':
      location.hash = '/admin/category-list';
      return state;

    case 'GET_CATEGORY_MOVIES_RESPONSE':
      if (!action.res.error) {
        return {
          ...state,
          categoryMovies: action.res.res,
        };
      }
      return state;

    default:
      return state;
  }
}
