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
        this.props.getUser(this.props.params.id);
        this.props.getUserRatings(this.props.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.params.id != this.props.params.id) {
            this.props.params.id = nextProps.params.id;
            this.props.getUser(nextProps.params.id);
            this.props.getUserRatings(nextProps.params.id);
        }
    }

    render() {
        const user = this.props.profile || {};
        const reviews = this.props.reviews || {};
        return (
            <section className={`${styles}`}>
                <div className="container">
                    <div className="row">
                        <UserCard user={user} ownProfile={this.props.params.id == JSON.parse(localStorage.getItem('userData')).id}/>
                        <UserProfileReviews reviews={reviews} userId={this.props.params.id}/>
                    </div>
                </div>
            </section>
        );
    }
}