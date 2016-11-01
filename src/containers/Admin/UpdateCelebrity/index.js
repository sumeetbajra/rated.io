/**
 * Created by sumit on 10/31/16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AddCelebrityForm } from 'components/Admin/AddCelebrityForm';

import { getCelebrity } from 'actions/celebrities';
import { updateCelebrity } from 'actions/celebrities';

import { styles } from '../AddCelebrity/styles.scss';

@connect(
    state => {
        return {
            celebrity: state.celebrities.celebrity,
        }
    },
    dispatch => {
        return {
            getCelebrity: bindActionCreators(getCelebrity, dispatch),
            updateCelebrity: bindActionCreators(updateCelebrity, dispatch)
        }
    }
)
export class UpdateCelebrity extends Component {

    componentWillMount() {
        this.props.getCelebrity(this.props.params.id);
    }

    render() {

        return (
            <div className={`${styles}`}>
                <h2>Update Celebrity</h2>
                <hr />
                <AddCelebrityForm celebrity={this.props.celebrity} update={true} submit={this.props.updateCelebrity}/>
            </div>
        );
    }
}