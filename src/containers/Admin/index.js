import React, {Component} from 'react';
import {Link} from 'react-router';

import './styles.scss';

export class Admin extends Component {
    render() {
        return (
            <section>
                <div className="row">
                    <div className="side-menu">
                        <nav className="navbar navbar-default" role="navigation">
                            <div className="side-menu-container">
                                <ul className="nav navbar-nav">
                                    <li className="active"><Link to={'/admin'}><i className="fa fa-dashboard"></i> Dashboard</Link></li>
                                    <li className="panel panel-default" id="dropdown">
                                        <a data-toggle="collapse" href="#movies-dropdown">
                                            <i className="fa fa-film"></i> Movies <span
                                            className="caret"></span>
                                        </a>
                                        <div id="movies-dropdown" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <ul className="nav navbar-nav">
                                                    <li><Link to={'/admin/list'}><i className="fa fa-list"></i> List Movies</Link></li>
                                                    <li><Link to={'/admin/add-movie'}><i className="fa fa-plus"></i> Add New Movie</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="panel panel-default" id="dropdown">
                                        <a data-toggle="collapse" href="#celebrities-dropdown">
                                            <i className="fa fa-users"></i> Celebrities <span
                                            className="caret"></span>
                                        </a>
                                        <div id="celebrities-dropdown" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <ul className="nav navbar-nav">
                                                    <li><Link to={'/admin/celebrity-list'}><i className="fa fa-list"></i> List Celebrities</Link></li>
                                                    <li><Link to={'/admin/add-celebrity'}><i className="fa fa-plus"></i> Add New Celebrity</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link to={'/admin'}><i className="fa fa-gear"></i> Settings</Link></li>
                                    <li><Link to={'/admin'}><i className="fa fa-sign-out"></i> Logout</Link></li>

                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div className="container-fluid">
                        <div className="side-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}