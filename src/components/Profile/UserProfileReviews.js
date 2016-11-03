import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router';
import { MovieStars } from 'components/Home/MovieStars';

export class UserProfileReviews extends Component {
    render() {
        return (
            <div className="col-sm-9 user-ratings-row">
                <h2 className="section-title">
                    User movie reviews
                </h2>
                {!this.props.reviews.length && <i>No reviews made</i>}
                {this.props.reviews.map((review) => {
                    return (
                        <div key={review._id}>
                            {review.ratings.map((rating) => {
                                if(rating.userId == this.props.userId) {
                                    return (
                                        <div className="row user-ratings-row__movie" key={rating._id}>
                                            <div className="col-sm-2 user-ratings-row__movie__movie-detail">
                                                <img src={review.posterUrl} className="img img-responsive" />
                                            </div>
                                            <div className="col-sm-10 user-ratings-row__movie__movie-rating">
                                                <div className="user-ratings-row__movie__movie-rating__name">
                                                    <Link to={'/movie/' + review._id}>{review.title} ({review.year})</Link>
                                                </div>
                                                <div className="user-ratings-row__movie__movie-rating__stars">
                                                    <MovieStars ratings={rating.rating} />
                                                </div>
                                                <div className="user-ratings-row__movie__movie-rating__review">
                                                    {rating.review}
                                                </div><br />
                                                <i>Reviewed on {moment(rating.timestamp).format('MMM DD, YYYY')}</i>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                            <hr />
                        </div>
                    )
                })}
            </div>
        );
    }
}