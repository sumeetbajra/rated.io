import React, { Component } from 'react';
import { Link } from 'react-router';

import './styles.scss';

export class Admin extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 admin-menu">
                            <ul className="admin-menu-list nav nav-pills nav-stacked">
                                <li><Link to={'/admin'}>Dashboard</Link></li>
                                <li><Link to={'/admin/list'}>List movies</Link></li>
                                <li><Link to={'/admin/add-movie'}>Add movie</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-9 admin-section">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}