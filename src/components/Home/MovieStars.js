import React, { Component } from 'react';

export class MovieStars extends Component {
    render() {
        let stars = [];
        let rating = 0;
        if(this.props.ratings) {
            for (let i = this.props.ratings.length - 1; i >= 0; i--) {
                rating += parseInt(this.props.ratings[i].rating)
            }
            rating = Math.round(((rating/this.props.ratings.length)*2)/2);
            rating = rating.toString();

            let ratings = rating.split('.');
            let fullStars = parseInt(ratings[0]);

            for (let i = fullStars - 1; i >= 0; i--) {
                stars.push(<i className="fa fa-star" key={i}/>);
            }
            if(ratings[1]) {
                stars.push(<i className="fa fa-star-half" key={Date.now}/>);
            }
        }

        return (<div>{stars}</div>);
    }
}