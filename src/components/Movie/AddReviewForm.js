import React, { Component } from 'react';

import {styles} from './styles.scss';

export class AddReviewForm extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var stars = this.props.myRating.length ? this.props.myRating[0].rating : 0;
        var splitStars = stars.toString().split('.');
        if(splitStars.length == 1) {
            document.getElementById('star' + splitStars[0]).click();
        }else {
            if(splitStars[0] == 0) {
                document.getElementById('starhalf').click();
            }else {
                document.getElementById('star' + splitStars[0] + 'half').click();
            }
        }
    }

    removeThisModal = () => {
        this.props.removeModal();
    }

    addMovieReview = () => {
        var payload = {
            review: document.getElementsByTagName('textarea')[0].value,
            rating: document.querySelector('input[name="rating"]:checked').value,
            userId: JSON.parse(localStorage.getItem('userData')).id
        }
        if(this.props.myRating.length) {
            this.props.updateRating(this.props.movieId, payload);
        }else {
            this.props.addRating(this.props.movieId, payload);
        }
        this.removeThisModal();
    }

    render() {
        var myRating = this.props.myRating.length ? this.props.myRating[0] : {};
        return (
            <div>
                {this.props.myRating.length != 0 && <small><i>You have already rated the movie. You can edit your ratings below.</i></small>}
                <ReviewStarsInput />
                <textarea style={{resize: 'none'}} rows="5" className="form-control" placeholder="Type your movie review" defaultValue={myRating.review}/><br />
                <button className="btn btn-primary" onClick={this.addMovieReview}>Submit</button>&nbsp;
                <button className="btn btn-danger" onClick={this.removeThisModal}>Close</button>
            </div>
        )
    }
}

class ReviewStarsInput extends Component {
    render() {
        return (
            <div className= { `${styles}` }>
                <fieldset className="rating">
                    <input type="radio" id="star5" name="rating" value="5" /><label className = "full" htmlFor="star5" title="Awesome - 5 stars"></label>
                    <input type="radio" id="star4half" name="rating" value="4.5" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" /><label className = "full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                    <input type="radio" id="star3half" name="rating" value="3.5" /><label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" /><label className = "full" htmlFor="star3" title="Meh - 3 stars"></label>
                    <input type="radio" id="star2half" name="rating" value="2.5" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" /><label className = "full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                    <input type="radio" id="star1half" name="rating" value="1.5" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
                    <input type="radio" id="star1" name="rating" value="1" /><label className = "full" htmlFor="star1" title="Sucks big time - 1 star"></label>
                    <input type="radio" id="starhalf" name="rating" value="0.5" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
                </fieldset>
            </div>
        )
    }
}