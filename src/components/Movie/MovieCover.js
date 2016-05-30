import React, { Component } from 'react';

export class MovieCover extends Component {
    render() {
        return (
            <div className="row" id="movie-cover" style={
                this.props.img ? 
                {
                    backgroundImage: 'url("' + this.props.img + '")'
                }
                :
                {
                    background: '#F7F7F7',
                    height: '155px'
                }
            }>
            </div>
        );
    }
}