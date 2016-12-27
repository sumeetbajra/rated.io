import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCategoryMovies } from 'actions/movies';

import { MovieStars } from 'components/Movie/MovieStars';

@connect(
  state => {
    return {
      movies: state.movies.categoryMovies,
    };
  },
  dispatch => {
    return {
      getCategoryMovies: bindActionCreators(getCategoryMovies, dispatch),
    };
  }
)
export class CategoryMovies extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getCategoryMovies(this.props.params.id);
  }

  render() {
    const categoryName = this.props.movies.length ? this.props.movies[0].category.categoryName : '';
    return (
      <section className={ `page` }>
        <div className="container">
          <h4>Movies of { categoryName } genre</h4><hr />
          <div>
            <Link to={'categories/all'}><i className="fa fa-arrow-left" /> Back to categories</Link>
          </div><br /><br />
          <div className="row">
            {this.props.movies.map((movie) => {
              return (
                <div className="col-sm-2" key={movie._id}>
                  <Link to={'/movie/' + movie._id}><img src={movie.posterUrl} className="img img-responsive" /></Link><br />
                  <b>{movie.title}</b> <br />
                  <MovieStars rating={movie.overallRating} /> <br /> ({movie.ratingsCount} reviews)
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

CategoryMovies.propTypes = {
  params: PropTypes.object,
  getCategoryMovies: PropTypes.func,
  movies: PropTypes.array,
};
