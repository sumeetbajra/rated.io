import React, { Component } from 'react';

export class MovieStars extends Component {
    render() {
        let stars = [];
        let rating = 0;
        if(this.props.ratings) {
            
            let ratings = this.props.ratings.toString().split('.');
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