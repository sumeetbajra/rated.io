import React, { Component } from 'react';

import { MovieCover } from 'components/Movie/MovieCover';
import { MovieDetail } from 'components/Movie/MovieDetail';
import { MovieReviews } from 'components/Movie/MovieReviews';
import { MovieImg } from 'components/Movie/MovieImg';

import './moviepage.scss';

export class MoviePage extends Component {
    render() {
        return (
             <section>
                <MovieCover />
                <div className="container">
                    <div className="row" style={{marginTop: '-20px'}}>
                        <MovieImg />
                        <div className="col-sm-9">
                            <MovieDetail />
                            <MovieReviews />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}