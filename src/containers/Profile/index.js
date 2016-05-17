import React, { Component } from 'react';

import { UserCard } from 'components/Profile/UserCard';
import { UserProfileReviews } from 'components/Profile/UserProfileReviews';

import { styles } from './style.scss';

export class Profile extends Component {
    render() {
        return (
            <section className={`${styles}`}>
                <div className="container">
                    <div className="row">
                        <UserCard />
                        <UserProfileReviews />
                    </div>
                </div>
            </section>
        );
    }
}