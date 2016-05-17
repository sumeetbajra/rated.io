import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { List } from 'containers/List';
import { Register } from 'containers/Register';
import { SignIn } from 'containers/SignIn';
import { MoviePage } from 'containers/MoviePage';
import { Profile } from 'containers/Profile';
import { Admin } from 'containers/Admin';
import { AddMovie } from 'containers/Admin/AddMovie';
import { MovieList } from 'containers/Admin/MovieList';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="list" component={List} />
    <Route path="register" component={Register} />
    <Route path="sign-in" component={SignIn} />
    <Route path="movie" component={MoviePage} />
    <Route path="profile" component={Profile} />
    <Route path="admin" component={Admin}>
        <Route path="add-movie" component={AddMovie} />
        <Route path="update-movie/:id" component={AddMovie} />
        <Route path="list" component={MovieList} />
    </Route>
    <Route status={404} path="*" component={Home} />
  </Route>
);

