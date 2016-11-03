
import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router';

export class MovieReviews extends Component {

    constructor(props) {
        super(props);
    }

    renderStars = (j) => {
        var ratings = j.split('.');
        var fullStars = parseInt(ratings[0]);
        var stars = [];
        for (var i = fullStars - 1; i >= 0; i--) {
            stars.push(<i className="fa fa-star" key={Date.now + i}/>);
        }
        if(ratings[1]) {
            stars.push(<i className="fa fa-star-half" key={1}/>);
        }
        return stars;
    }

    render() {
        return (
            <div className="movie-reviews row">
                <div className="col-sm-12"><h4>Reviews ({this.props.ratings ? this.props.ratings.length : 0} reviews)</h4><hr />
                    {!(this.props.ratings && this.props.ratings.length) && <i>Be the first one to review</i>}
                </div>
                <div className="row">
                    {this.props.ratings.map((rating, i) => {
                        return (
                            <div className="movie-reviews__single col-sm-6" style={!(i%2) ? {clear: 'both'} : null} key={rating._id}>
                                <div className="row">
                                    <div className="col-sm-3" style={{textAlign: 'center'}}>
                                        <img src={rating.userId.profilePic} width="50" height="50" className="img img-circle"/><br />
                                        <div className="movie-reviews__single__username">
                                            <Link to={ '/profile/' + rating.userId._id }>{rating.userId.username || rating.userId.firstName + ' ' + rating.userId.lastName}</Link>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 movie-reviews__single__review">
                                        <div className="movie-reviews__single__review__rating">
                                            {this.renderStars(rating.rating)}
                                        </div>
                                        <div className="movie-reviews__single__review_comment">
                                            {rating.review}<br/><br />   
                                            <i>{moment(rating.timestamp).format('MMM DD, YYYY')}</i>                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}