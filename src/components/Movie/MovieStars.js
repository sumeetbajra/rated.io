import React, { Component } from 'react';

export class MovieStars extends Component {
    render() {

    	let rating = 0;
        let stars = [];

        rating = (Math.round((this.props.rating)*2))/2;
        rating = rating.toString();

        let ratings = rating.split('.');
        let fullStars = parseInt(ratings[0]);
        
        for (let i = fullStars - 1; i >= 0; i--) {
            stars.push(<i className="fa fa-star" key={i}/>);
        }
        if(ratings[1]) {
            stars.push(<i className="fa fa-star-half" key={Date.now}/>);
        }

    	return (
    		<span>{stars}</span>
    	);
    }
}