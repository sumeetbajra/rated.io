import React, { Component } from 'react';
import moment from 'moment';

export class UserCard extends Component {
    render() {
        return (
            <div className="col-sm-3 user-row">
                <img src={this.props.user.profilePic} className="img img-circle user-row__pic" width="100"/>
                <div className="user-row__name">{this.props.user.firstName} {this.props.user.lastName}</div>
                {this.props.user.username && <div className="user-row__username">@ {this.props.user.username}</div>}
                <div className="user-row__description">
                    {this.props.user.address && <div><i className="fa fa-map-marker" />Lives in {this.props.user.address}</div>}
                    <div><i className="fa fa-calendar" />Joined on {moment(this.props.user.timestamp).format('MMM DD, YYYY')}</div>
                </div>
                <br />
                <div className="user-row__action">
                    {this.props.ownProfile && <a className="btn btn-primary btn-primary-modified btn-block" href="#"><i className="fa fa-pencil" /> &nbsp;Profile details</a>}
                    {!this.props.ownProfile && <a className="btn btn-primary btn-primary-modified btn-block" href="#"><i className="fa fa-plus" /> &nbsp;Add to favorites</a>}
                </div>
            </div>
        );
    }
}