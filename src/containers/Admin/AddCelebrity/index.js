/**
 * Created by sumit on 10/30/16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AddCelebrityForm } from 'components/Admin/AddCelebrityForm';

import { addCelebrity } from 'actions/celebrities';

import { styles } from './styles.scss';

@connect(
    state => { return {} },
    dispatch => bindActionCreators({ addCelebrity }, dispatch)
)
export class AddCelebrity extends Component {

    render() {
        return (
            <div className={`${styles}`}>
                <h2>Add Celebrity</h2>
                <hr />
                <AddCelebrityForm submit={this.props.addCelebrity}/>
            </div>
        )
    }
}
