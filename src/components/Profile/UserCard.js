import React, { Component } from 'react';

export class UserCard extends Component {
    render() {
        return (
            <div className="col-sm-3 user-row">
                <img src="http://www.keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg" className="img img-circle user-row__pic" width="100"/>
                <div className="user-row__name">Sumit Bajracharya</div>
                <div className="user-row__username">@sumeetbajra</div>
                <div className="user-row__description">
                    <div><i className="fa fa-map-marker" />Lives in Kathmandu, Nepal</div>
                    <div><i className="fa fa-calendar" />Joined on July 12, 2016</div>
                    <div><i className="fa fa-sign-in" />Last logged in: 1 day ago</div>
                </div>
            </div>
        );
    }
}