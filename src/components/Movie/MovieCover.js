import React, { Component } from 'react';

export class MovieCover extends Component {
    render() {
        return (
            <div className="row" id="movie-cover" style={
                {
                    backgroundImage: 'url("' + this.props.img + '")'
                }
            }>
            </div>
        );
    }
}