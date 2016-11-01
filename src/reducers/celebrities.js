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
			break;

		case 'RESET_CELEBRITY_LIST':
			return {
				...state,
				allCelebrities: []
			};
			break;

		case 'ADD_CELEBRITY_RESPONSE':
			if(!action.res.error) {
				location.hash = '/admin/celebrity-list';
				return {
					...state,
					allCelebrities: state.allCelebrities.concat(action.res.res)
				}
			}
			break;

		case 'DELETE_CELEBRITY_RESPONSE':
			if(action.id) {
				return {
					...state,
					allCelebrities: state.allCelebrities.filter((celebrity) => celebrity._id != action.id)
				}
			}
			break;

		case 'UPDATE_CELEBRITY_RESPONSE':
			if(!action.res.error) {
				location.hash='/admin/celebrity-list';
				return {
					...state,
					// allCelebrities: state.allCelebrities.filter((k, celebrity) => {
					// 	if(celebrity._id == action.res.res._id) {
					// 		state.allCelebrities[k] = action.res.res
					// 	}
					// })
				}
			}
			break;

		default:
			return state;
	}
}

