import React, { Component } from 'react';

export class MovieCover extends Component {
    render() {
        return (
            <div className="row" id="movie-cover" style={
                {
                    backgroundImage: 'url("http://blogs-images.forbes.com/scottmendelson/files/2016/03/captain-america-civil-war-poster-fea-1200x737.jpg")'
                }
            }>
            </div>
        );
    }
}