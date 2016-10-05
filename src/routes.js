import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { Register } from 'containers/Register';
import { SignIn } from 'containers/SignIn';
import { MoviePage } from 'containers/MoviePage';
import { Profile } from 'containers/Profile';
import { Admin } from 'containers/Admin';
import { AddMovie } from 'containers/Admin/AddMovie';
import { UpdateMovie } from 'containers/Admin/UpdateMovie';
import { MovieList } from 'containers/Admin/MovieList';

function checkAdmin() {
    return JSON.parse(localStorage.getItem('userData')).role != 'admin';
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="register" component={Register} />
    <Route path="sign-in" component={SignIn} />
    <Route path="movie/:id" component={MoviePage} />
    <Route path="profile/:id" component={Profile} />
    <Route path="admin" component={Admin} onEnter={checkAdmin()}>
        <Route path="add-movie" component={AddMovie} />
        <Route path="update-movie/:id" component={UpdateMovie} />
        <Route path="list" component={MovieList} />
    </Route>
    <Route status={404} path="*" component={Home} />
  </Route>
);

