import request from 'superagent';
import { APIEndpoints } from 'constants/CommonConstants';
import { toastr } from 'react-redux-toastr';

function addMovieResponse(res) {
  if (res.ok) toastr.success('Success', 'The movie has been added successfully.');
  return {
    type: 'ADD_MOVIE',
    res,
  };
}

function getAllMoviesResponse(res) {
  return {
    type: 'GET_ALL_MOVIES',
    res,
  };
}

function deleteMovieResponse(res) {
  if (res.ok) toastr.success('Success', 'The movie has been deleted successfully.');
  return {
    type: 'DELETE_MOVIE',
    res,
  };
}

function cancelDeleteMovie() {
  return {
    type: 'CANCEL_DELETE_MOVIE',
  };
}

function getMovieResponse(res) {
  return {
    type: 'GET_MOVIE',
    res,
  };
}

export function addMovie(payload) {
  return dispatch => {
    request.post(APIEndpoints.ADD_MOVIE)
    .set('Content-Type', 'application/json')
    .set('authorization', localStorage.getItem('token'))
    .send(payload)
    .end((err, res) => {
      if (res.ok) {
        dispatch(addMovieResponse(res.body));
      }
    });
  };
}

export function getAllMovies(page = 1) {
  return dispatch => {
    request.get(APIEndpoints.ALL_MOVIES + page)
    .set('authorization', localStorage.getItem('token'))
    .end((err, res) => {
      if (res.ok) {
        dispatch(getAllMoviesResponse(res.body));
      }
    });
  };
}

export function deleteMovie(id) {
  return dispatch => {
    toastr.confirm('Are you sure about that!', {
      onOk: () => {
        request.delete(APIEndpoints.MOVIES + id)
        .set('authorization', localStorage.getItem('token'))
        .end((err, res) => {
          if (res.ok) {
            dispatch(deleteMovieResponse(id));
          }
        });
      },
      onCancel: () => {
        cancelDeleteMovie();
      },
    });
  };
}

export function getMovie(id) {
  return dispatch => {
    request.get(APIEndpoints.MOVIES + id)
    .set('authorization', localStorage.getItem('token'))
    .end((err, res) => {
      if (res.ok) {
        dispatch(getMovieResponse(res.body));
      }
    });
  };
}

function updateMovieResponse(res) {
  toastr.success('Success', 'The movie has been updated successfully.');
  return {
    type: 'UPDATE_MOVIE_RESPONSE',
    res,
  };
}

export function updateMovie(id, payload) {
  return dispatch => {
    request.put(APIEndpoints.MOVIES + id)
    .set('authorization', localStorage.getItem('token'))
    .send(payload)
    .end((err, res) => {
      if (res.ok) {
        dispatch(updateMovieResponse(res));
      }
    });
  };
}

function getLatestMoviesResponse(res) {
  return {
    type: 'LATEST_MOVIES_RESPONSE',
    res,
  };
}

export function getLatestMovies() {
  return dispatch => {
    request.post(APIEndpoints.LATEST_MOVIES)
    .set('authorization', localStorage.getItem('token'))
    .set('Content-Type', 'application/json')
    .end((err, res) => {
      if (res.ok) {
        dispatch(getLatestMoviesResponse(res.body));
      }
    });
  };
}

function getBestMoviesResponse(res) {
  return {
    type: 'BEST_MOVIES_RESPONSE',
    res,
  };
}

export function getBestMovies() {
  return dispatch => {
    request.post(APIEndpoints.BEST_MOVIES)
    .set('authorization', localStorage.getItem('token'))
    .set('Content-Type', 'application/json')
    .end((err, res) => {
      if (res.ok) {
        dispatch(getBestMoviesResponse(res.body));
      }
    });
  };
}

function addRatingResponse(res) {
  return {
    type: 'ADD_RATING_RESPONSE',
    res,
  };
}

export function addRating(id, payload) {
  return dispatch => {
    request.put(APIEndpoints.ADD_RATING + id)
    .set('Content-Type', 'application/json')
    .set('authorization', localStorage.getItem('token'))
    .send(payload)
    .end((err, res) => {
      if (res.ok) {
        dispatch(addRatingResponse(res.body));
      }
    });
  };
}

function updateRatingResponse(res) {
  return {
    type: 'UPDATE_RATING_RESPONSE',
    res,
  };
}

export function updateRating(id, payload) {
  return dispatch => {
    request.put(APIEndpoints.UPDATE_RATING + id)
    .set('Content-Type', 'application/json')
    .set('authorization', localStorage.getItem('token'))
    .send(payload)
    .end((err, res) => {
      if (res.ok) {
        dispatch(updateRatingResponse(res.body));
      }
    });
  };
}

function uploadImageSuccess(url) {
  return {
    type: 'IMAGE_UPLOAD_SUCCESS',
    url,
  };
}

export function uploadImage(imageData) {
  return dispatch => {
    request.post(APIEndpoints.IMAGE_UPLOAD)
    .set('Content-Type', 'application/json')
    .set('Authorization', APIEndpoints.IMAGE_UPLOAD_AUTHORIZATION)
    .send({
      image: imageData,
      type: 'base64',
    })
    .end((err, res) => {
      if (res.success) {
        dispatch(uploadImageSuccess(res.data.link));
      } else {
        console.log(res);
      }
    });
  };
}

export function getMovieCategories() {
  return () => {
    return request.get(APIEndpoints.GET_MOVIE_CATEGORIES)
    .set('authorization', localStorage.getItem('token'));
  };
}

export function getMovieCategory(id) {
  return () => {
    return request.get(APIEndpoints.MOVIE_CATEGORY + id)
    .set('authorization', localStorage.getItem('token'));
  };
}

function addMovieCategorySuccess(res) {
  toastr.success('Success', 'The movie category has been added successfully.');
  return {
    type: 'ADD_MOVIE_CATEGORY_RESPONSE',
    res,
  };
}

function updateMovieCategorySuccess() {
  toastr.success('Success', 'The movie category has been updated successfully.');
  return {
    type: 'UPDATE_MOVIE_CATEGORY_RESPONSE',
  };
}

export function addMovieCategory(payload) {
  return dispatch => {
    request.post(APIEndpoints.ADD_MOVIE_CATEGORY)
    .set('authorization', localStorage.getItem('token'))
    .set('Content-Type', 'application/json')
    .send(payload)
    .end((err, res) => {
      if (res.ok) {
        dispatch(addMovieCategorySuccess(res.body));
      }
    });
  };
}

export function updateCategory(id, payload) {
  return dispatch => {
    request.put(APIEndpoints.MOVIE_CATEGORY + id)
    .set('authorization', localStorage.getItem('token'))
    .set('Content-Type', 'application/json')
    .send(payload)
    .end((err, res) => {
      if (res.ok) {
        dispatch(updateMovieCategorySuccess(res.body));
      }
    });
  };
}

export function deleteMovieCategory(id) {
  return () => {
    return request.delete(APIEndpoints.MOVIE_CATEGORY + id)
    .set('authorization', localStorage.getItem('token'));
  };
}


function getCategoryMoviesSuccess(res) {
  return {
    type: 'GET_CATEGORY_MOVIES_RESPONSE',
    res,
  };
}

export function getCategoryMovies(id) {
  return dispatch => {
    request.get(APIEndpoints.CATEGORY_MOVIES + id)
    .set('authorization', localStorage.getItem('token'))
    .end((err, res) => {
      if (res.ok) {
        dispatch(getCategoryMoviesSuccess(res.body));
      }
    });
  };
}

export function resetMovieList() {
  return {
    type: 'RESET_MOVIE_LIST',
  };
}
