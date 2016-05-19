
import React, { Component } from 'react';

export class MovieImg extends Component {
    render() {
        return (
            <div className="col-sm-3" id="movie-img">
                <img src={this.props.img} className="img-responsive img-bordered" /><br/>
                <button className="btn btn-primary btn-primary-modified btn-block"><i className="fa fa-pencil"/> Submit a review</button>
                <button className="btn btn-primary btn-primary-modified btn-block"><i className="fa fa-play"/> Watch the trailer</button>
                <button className="btn btn-primary btn-primary-modified btn-block"><i className="fa fa-ticket"/> Find ticket</button>
            </div>
        );
    }
}