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
            <div className="col-xs-5 col-sm-3 col-md-3 col-lg-3 logo">
              <Link to="/">
                Rated.io
              </Link>
            </div>

            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 hidden-xs text-right right-nav">
              {this.props.session.token ? 
                <nav>
                  <span className="right-nav__welcome">
                    Welcome {this.props.session.userData.firstName}
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
