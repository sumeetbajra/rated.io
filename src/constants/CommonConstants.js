
var serverUrl = 'http://localhost:8080/';

export const APIEndpoints = {
    ADD_MOVIE: serverUrl + 'movies/add',
    MOVIES: serverUrl + 'movies/',
    LATEST_MOVIES: serverUrl + 'movies/latest',
    BEST_MOVIES: serverUrl + 'movies/best',
    GET_USER: serverUrl + 'users/',
    ADD_RATING: serverUrl + 'ratings/add/',
    UPDATE_RATING: serverUrl + 'ratings/update/',
    GET_USER_RATINGS: serverUrl + 'users/ratings/',

    IMAGE_UPLOAD: 'https://api.imgur.com/3/image',
    IMAGE_UPLOAD_AUTHORIZATION: 'Client-ID 931b184cacc4b7d'


}