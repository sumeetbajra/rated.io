import request from 'superagent';
import { APIEndpoints } from 'constants/CommonConstants';

export function getCelebrity(id) {
	return dispatch => {
		request.get(APIEndpoints.GET_CELEBRITY + id)
        .set('Content-Type', 'application/json')
        .set('Authorization', localStorage.getItem('token'))
        .end(function(err, res) {
            if(!res.error) {
                dispatch(getCelebrityResponse(res.body));
            }
        })
	}
}

function getCelebrityResponse(res) {
	return {
		type: 'GET_CELEBRITY_RESPONSE',
		res
	}
}

export function getCelebrityRatedMovies(id) {
	return dispatch => {
		request.get(APIEndpoints.GET_CELEBRITY_RATED_MOVIES + id)
		.set('Content-Type', 'application/json')
        .set('Authorization', localStorage.getItem('token'))
        .end(function(err, res) {
        	if(!res.error) {
        		dispatch(getCelebrityRatedMoviesResponse(res.body));
        	}
        });
	}
}

function getCelebrityRatedMoviesResponse(res) {
	return {
		type: 'GET_CELEBRITY_RATED_MOVIES_RESPONSE',
		res
	}
}

export function getCelebrityMovies(id) {
	return dispatch => {
		request.get(APIEndpoints.GET_CELEBRITY_MOVIES + id)
		.set('Content-Type', 'application/json')
        .set('Authorization', localStorage.getItem('token'))
        .end(function(err, res) {
        	if(!res.error) {
        		dispatch(getCelebrityMoviesResponse(res.body));
        	}
        });
	}
}

function getCelebrityMoviesResponse(res) {
	return {
		type: 'GET_CELEBRITY_MOVIES_RESPONSE',
		res
	}
}