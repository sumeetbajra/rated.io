import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'

/* global styles for app */
import './styles/app.scss';

/* application components */
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

import * as actionCreators from 'actions/users';

@connect(
  state => state.users,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <section>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        position="top-right"/>
        <Header {...this.props}/>
        {this.props.children}
        <Footer />
      </section>
    );
  }
}
