
var serverUrl = 'http://localhost:8080/';

export const APIEndpoints = {
    ADD_MOVIE: serverUrl + 'movies/add',
    ALL_MOVIES: serverUrl + 'movies/all/',
    MOVIES: serverUrl + 'movies/',
    LATEST_MOVIES: serverUrl + 'movies/latest',
    BEST_MOVIES: serverUrl + 'movies/best',
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


}