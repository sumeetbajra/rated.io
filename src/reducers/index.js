import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as modalReducer } from 'react-redux-modal'
import { users } from './users';
import { movies } from './movies';

const rootReducer = combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  modals: modalReducer,
  /* your reducers */
  users,
  movies,
});

export default rootReducer;
