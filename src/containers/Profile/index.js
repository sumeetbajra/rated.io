import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { UserCard } from 'components/Profile/UserCard';
import { UserProfileReviews } from 'components/Profile/UserProfileReviews';
import * as actionCreators from 'actions/users';

import { styles } from './style.scss';

@connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Profile extends Component {

    componentDidMount() {
        this.props.getUser(JSON.parse(localStorage.getItem('userData')).id);
    }

    render() {
        const user = this.props.profile || {};
        return (
            <section className={`${styles}`}>
                <div className="container">
                    <div className="row">
                        <UserCard user={user}/>
                        <UserProfileReviews />
                    </div>
                </div>
            </section>
        );
    }
}