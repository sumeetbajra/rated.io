import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Form from 'components/Register/Form';

import * as actionCreators from 'actions/users';

@connect(
  state => state.users,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Register extends Component {

     constructor(props) {
        super(props)
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <Form addUser={this.props.addUser} redirect={true} />
                    </div>
                </div>
            </section>
        );
    }
} 
