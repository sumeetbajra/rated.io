import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import { styles } from './styles.scss';

export class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={`${styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-5 col-sm-2 col-md-2 col-lg-2 logo">
              <Link to="/">
                Rated.io
              </Link>
            </div>

            <div className="col-xs-7 col-sm-4 col-md-4 col-lg-4 hidden-xs text-right right-nav middle-section">
              <ul id="middle-section__list">
                <li className="middle-section__list-item active">
                  <a href="#">
                    Home
                  </a>
                </li>
                <li className="middle-section__list-item">
                  <a href="#">
                    Categories
                  </a>
                </li>
                <li className="middle-section__list-item">
                  <a href="#">
                    Genre
                  </a>
                </li>
                <li className="middle-section__list-item">
                  <a href="#">
                    Celebrities
                  </a>
                </li>
                <li className="middle-section__list-item">
                  <a href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-6 hidden-xs text-right right-nav">
              {localStorage.getItem('token') && localStorage.getItem('token') != undefined ? 
                <nav>
                  <span className="right-nav__search">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-search" /></span>
                      <input type="text" className="input form-control" placeholder="Search movies" />
                    </div>
                  </span>
                  <span className="right-nav__welcome">
                    <span className="right-nav__welcome__dropdown dropdown">
                      <a style={{cursor: 'pointer'}} className="dropdown-toggle" data-toggle="dropdown">Welcome {JSON.parse(localStorage.getItem('userData')).firstName}
                      &nbsp;<span className="caret"></span></a>
                      <ul className="dropdown-menu right-nav__welcome__dropdown__dropdown-menu">
                        <li><Link to={'/profile/' + JSON.parse(localStorage.getItem('userData')).id }><i className="fa fa-user" /> Profile</Link></li>
                        <li><a href="#"><i className="fa fa-gear" /> Settings</a></li>
                      </ul>
                    </span>
                  </span>
                  <a href="#" onClick={this.props.logout}>
                    Logout
                  </a>
                </nav>
                :
                <nav>
                  <Link to="/sign-in" activeClassName="active">
                    Sign In
                  </Link>
                  <Link to="/register" activeClassName="active">
                    Register
                  </Link>
                </nav>
              }
            </div>
          </div>
        </div>
      </header>
    );
  }
}
