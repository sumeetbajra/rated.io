import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getMovieCategories } from 'actions/movies';

@connect(
  null,
  dispatch => {
    return {
      getMovieCategories: bindActionCreators(getMovieCategories, dispatch),
    };
  },
)
export class AllCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount = () => {
    this.props.getMovieCategories().end((err, res) => {
      if (!res.error) {
        this.setState({
          categories: res.body.res,
        });
      }
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <section className={ `page` }>
        <div className="container">
          <h4>Categories</h4><hr />
            <ul>
              {categories.map((category) => {
                return (<li key={category._id}><Link to={`/category/${category._id}`}>{ category.categoryName } ({ category.count })</Link></li>);
              })}
            </ul>
        </div>
      </section>
    );
  }
}

AllCategories.propTypes = {
  getMovieCategories: PropTypes.func,
};
