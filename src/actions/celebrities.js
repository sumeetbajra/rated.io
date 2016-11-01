import request from 'superagent';
import { APIEndpoints } from 'constants/CommonConstants';
import { toastr } from 'react-redux-toastr';

export function getCelebrityList(page) {
	return dispatch => {
		request.get(APIEndpoints.GET_CELERITY_LIST + page)
			.set('Content-Type', 'application/json')
			.set('Authorization', localStorage.getItem('token'))
			.end(function(err, res) {
				if(!res.error) {
					dispatch(getCelebrityListResponse(res.body));
				}
			});
	}
}

function getCelebrityListResponse(res) {
	return {
		type: 'GET_CELEBRITY_LIST_RESPONSE',
		res
	}
}


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

export function resetCelebrityList() {
	return {
		type: 'RESET_CELEBRITY_LIST'
	}
}

export function addCelebrity(payload) {
	return dispatch => {
		request.post(APIEndpoints.ADD_CELEBRITY)
			.set('Content-Type', 'application/json')
			.set('Authorization', localStorage.getItem('token'))
			.send(JSON.stringify(payload))
			.end(function(err, res) {
				if(!res.error) {
					dispatch(addCelebrityResponse(res.body));
				}
			});
	}
}

function addCelebrityResponse(res) {
	if(!res.error)
		toastr.success('Success', 'Celebrity has been added successfully.');
	return {
		type: 'ADD_CELEBRITY_RESPONSE',
		res
	}
}

export function deleteCelebrity(id) {
	return dispatch => {
		toastr.confirm('Are you sure about that!', {
			onOk: () => {
				request.delete(APIEndpoints.GET_CELEBRITY + id)
					.set('authorization', localStorage.getItem('token'))
					.end(function(err, res) {
						if(!res.error) {
							dispatch(deleteCelebrityResponse(id));
						}
					})
			},
			onCancel: () => {
				cancelDeleteCelebrity();
			}
		});
	}
}

function deleteCelebrityResponse(id) {
	return {
		type: 'DELETE_CELEBRITY_RESPONSE',
		id: id
	}
}

export function updateCelebrity(id, payload) {
	return dispatch => {
		request.put(APIEndpoints.GET_CELEBRITY + id)
			.set('authorization', localStorage.getItem('token'))
			.send(payload)
			.end(function(err, res) {
				if(!res.error) {
					dispatch(updateCelebrityResponse(res));
				}
			})
	}
}

function updateCelebrityResponse(res) {
	if(!res.error)
		toastr.success('Success', 'Celebrity has been updated successfully.');
	return {
		type: 'UPDATE_CELEBRITY_RESPONSE',
		res
	}
}