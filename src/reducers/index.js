import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { items } from './items';
import { users } from './users';
import { movies } from './movies';

const rootReducer = combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  /* your reducers */
  items,
  users,
  movies,
});

export default rootReducer;
