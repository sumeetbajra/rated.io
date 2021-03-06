import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* containers */
import { App } from 'containers/App';
import { Home } from 'containers/Home';
import { Register } from 'containers/Register';
import { SignIn } from 'containers/SignIn';
import { MoviePage } from 'containers/MoviePage';
import { CelebrityPage } from 'containers/CelebrityPage';
import { Profile } from 'containers/Profile';
import { AllCategories } from 'containers/AllCategories';
import { CategoryMovies } from 'containers/CategoryMovies';
import { Admin } from 'containers/Admin';
import { AddMovie } from 'containers/Admin/AddMovie';
import { UpdateMovie } from 'containers/Admin/UpdateMovie';
import { MovieList } from 'containers/Admin/MovieList';
import { AddCelebrity } from 'containers/Admin/AddCelebrity';
import { UpdateCelebrity } from 'containers/Admin/UpdateCelebrity';
import { CelebrityList } from 'containers/Admin/CelebrityList';
import { CategoryList } from 'containers/Admin/CategoryList';
import { AddCategory } from 'containers/Admin/AddCategory';
import { UpdateCategory } from 'containers/Admin/UpdateCategory';

function checkAdmin(nextState, replace, callback) {
  if (!localStorage.getItem('token') || localStorage.getItem('userData') && JSON.parse(localStorage.getItem('userData')).role !== 'admin') {
    replace('/');
  }
  callback();
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="register" component={Register} />
    <Route path="sign-in" component={SignIn} />
    <Route path="movie/:id" component={MoviePage} />
    <Route path="celebrity/:id" component={CelebrityPage} />
    <Route path="profile/:id" component={Profile} />
    <Route path="categories/all" component={AllCategories} />
    <Route path="category/:id" component={CategoryMovies} />
    <Route path="admin" component={Admin} onEnter={checkAdmin}>
        <Route path="add-movie" component={AddMovie} />
        <Route path="update-movie/:id" component={UpdateMovie} />
        <Route path="list" component={MovieList} />
        <Route path="add-celebrity" component={AddCelebrity} />
        <Route path="update-celebrity/:id" component={UpdateCelebrity} />
        <Route path="celebrity-list" component={CelebrityList} />
        <Route path="category-list" component={CategoryList} />
        <Route path="add-category" component={AddCategory} />
        <Route path="update-category/:id" component={UpdateCategory} />
    </Route>
    <Route status={404} path="*" component={Home} />
  </Route>
);
