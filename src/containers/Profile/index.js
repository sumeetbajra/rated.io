import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PageSpinner } from 'components/Utility/PageSpinner';
import { UserCard } from 'components/Profile/UserCard';
import { UserProfileReviews } from 'components/Profile/UserProfileReviews';
import * as actionCreators from 'actions/users';

import { styles } from './style.scss';

@connect(
    state => state.users,
    dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentWillMount() {
        this.props.getUser(this.props.params.id);
        this.props.getUserRatings(this.props.params.id);
        this.setState({
            loading: true
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loading: false
        });
        if(nextProps.params.id != this.props.params.id) {
            this.props.params.id = nextProps.params.id;
            this.props.getUser(nextProps.params.id);
            this.props.getUserRatings(nextProps.params.id);
            this.setState({
                loading: true
            })
        }
    }

    render() {
        const user = this.props.profile || {};
        const reviews = this.props.reviews || {};
        return (
            this.state.loading ? <PageSpinner /> :
            <section className={`${styles} page`}>
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