import React, { Component } from 'react';
import moment from 'moment';
import { MovieStars } from 'components/Home/MovieStars';

export class UserProfileReviews extends Component {
    render() {
        return (
            <div className="col-sm-9 user-ratings-row">
                <h2 className="user-ratings-row__header">
                    User movie reviews
                </h2>
                {this.props.reviews.map((review) => {
                    return (
                        <div>
                            <div className="row user-ratings-row__movie">
                                <div className="col-sm-2 user-ratings-row__movie__movie-detail">
                                    <img src={review.posterUrl} className="img img-responsive" />
                                </div>
                                <div className="col-sm-10 user-ratings-row__movie__movie-rating">
                                    <div className="user-ratings-row__movie__movie-rating__name">
                                        {review.title} ({review.year})
                                    </div>
                                    <div className="user-ratings-row__movie__movie-rating__stars">
                                        <MovieStars ratings={review.ratings[0].rating} />
                                    </div>
                                    <div className="user-ratings-row__movie__movie-rating__review">
                                        {review.ratings[0].review}
                                    </div><br />
                                    <i>Reviewed on {moment(review.ratings[0].timestamp).format('MMM DD, YYYY')}</i>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        );
    }
}