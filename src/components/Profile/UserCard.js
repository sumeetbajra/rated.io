import React, { Component } from 'react';
import moment from 'moment';

export class UserCard extends Component {
    render() {
        return (
            <div className="col-sm-3 user-row">
                <img src="https://world-outreach.com/wp-content/uploads/2014/08/placeholder-profile-male.jpg" className="img img-circle user-row__pic" width="100"/>
                <div className="user-row__name">{this.props.user.firstName} {this.props.user.lastName}</div>
                <div className="user-row__username">@ {this.props.user.username}</div>
                <div className="user-row__description">
                    <div><i className="fa fa-map-marker" />Lives in {this.props.user.address}</div>
                    <div><i className="fa fa-calendar" />Joined on {moment(this.props.user.timestamp).format('MMM DD, YYYY')}</div>
                    <div><i className="fa fa-sign-in" />Last logged in: 1 day ago</div>
                </div>
            </div>
        );
    }
}