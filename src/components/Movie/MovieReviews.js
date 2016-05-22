
import React, { Component } from 'react';

export class MovieReviews extends Component {

    constructor(props) {
        super(props);
    }

    renderStars = (j) => {
        var ratings = j.split('.');
        var fullStars = parseInt(ratings[0]);
        var stars = [];
        for (var i = fullStars - 1; i >= 0; i--) {
            stars.push(<i className="fa fa-star" />);
        }
        if(ratings[1]) {
            stars.push(<i className="fa fa-star-half" />);
        }
        return stars;
    }

    render() {
        return (
            <div className="movie-reviews row">
                <div className="col-sm-12"><h4>Reviews ({this.props.ratings ? this.props.ratings.length : 0} reviews)</h4><hr />
                    {!(this.props.ratings && this.props.ratings.length) && <i>Be the first one to review</i>}
                </div>
                    {this.props.ratings.map((rating) => {
                        return (
                            <div className="movie-reviews__single col-sm-6">
                                <div className="row">
                                    <div className="col-sm-3" style={{textAlign: 'center'}}>
                                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" width="50" height="50" className="img img-circle"/><br />
                                        <div className="movie-reviews__single__username">
                                            {rating.userId.username}
                                        </div>
                                    </div>
                                    <div className="col-sm-9 movie-reviews__single__review">
                                        <div className="movie-reviews__single__review__rating">
                                            {this.renderStars(rating.rating)}
                                        </div>
                                        <div className="movie-reviews__single__review_comment">
                                            {rating.review}                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        );
    }
}