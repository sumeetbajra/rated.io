import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from 'actions/movies';
import { AddMovieForm } from 'components/Admin/AddMovieForm';
import { styles } from './styles.scss';

@connect(
    state => state.movies,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class AddMovie extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={`${styles}`}>
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Add new movie</h2>
                    </div>
                </div>
                <hr />
                <AddMovieForm addMovie={this.props.addMovie} uploadImage={this.props.uploadImage}/>
            </div>
        );
    }
}