const initialState = {
	celebrity: {},
	ratedMovies: {},
	allMovies: {},
	allCelebrities: []
};

export function celebrities(state=initialState, action) {
	switch(action.type) {

		case 'GET_CELEBRITY_RESPONSE':
			if(!action.res.error) {
				return {
					...state,
					celebrity: action.res.res
				}
			}
			break;

		case 'GET_CELEBRITY_RATED_MOVIES_RESPONSE':
			if(!action.res.error) {
				return {
					...state,
					ratedMovies: action.res.res
				}
			}
			break;

		case 'GET_CELEBRITY_MOVIES_RESPONSE':
			if(!action.res.error) {
				return {
					...state,
					allMovies: action.res.res
				}
			}
			break;

		case 'GET_CELEBRITY_LIST_RESPONSE':
			if(!action.res.error) {
				return {
					...state,
					allCelebrities: state.allCelebrities.concat(action.res.res.docs)
				}
			}

		default:
			return state;
	}
}

