
// var serverUrl = 'http://localhost:8080/';
var serverUrl = 'https://rated-io.herokuapp.com/';

export const APIEndpoints = {
    ADD_MOVIE: serverUrl + 'movies/add',
    ALL_MOVIES: serverUrl + 'movies/all/',
    MOVIES: serverUrl + 'movies/',
    LATEST_MOVIES: serverUrl + 'movies/latest',
    BEST_MOVIES: serverUrl + 'movies/best',

    VERIFY_TOKEN: serverUrl + 'users/verifyToken',
    REGISTER_USER: serverUrl + 'users/register',
    LOGIN_USER: serverUrl + 'users/login',
    GET_USER: serverUrl + 'users/',
    ADD_RATING: serverUrl + 'ratings/add/',
    UPDATE_RATING: serverUrl + 'ratings/update/',
    GET_USER_RATINGS: serverUrl + 'users/ratings/',

    IMAGE_UPLOAD: 'https://api.imgur.com/3/image',
    IMAGE_UPLOAD_AUTHORIZATION: 'Client-ID 931b184cacc4b7d',

    GET_CELERITY_LIST: serverUrl + 'celebrity/all/',
    SEARCH_CELEBRITY: serverUrl + 'celebrity/search/',
    GET_CELEBRITY: serverUrl + 'celebrity/',
    GET_CELEBRITY_RATED_MOVIES: serverUrl + 'celebrity/movies/rated/',
    GET_CELEBRITY_MOVIES: serverUrl + 'celebrity/movies/',
    ADD_CELEBRITY: serverUrl + 'celebrity/add',
    SEARCH_MOVIES: serverUrl + 'movies/search/',

    GET_MOVIE_CATEGORIES: serverUrl + 'categories/all',
    ADD_MOVIE_CATEGORY: serverUrl + 'categories/add'

}