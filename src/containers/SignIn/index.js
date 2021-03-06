import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SignInForm } from 'components/SignInForm';

import * as actionCreators from 'actions/users';

@connect(
  state => state.users,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class SignIn extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillUnmount = () => {
        this.props.resetError();
    }

    render() {
        return (
            <section style={{marginTop: '120px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                            <div className="panel panel-default">
                                <div className="panel-heading">Login</div>
                                <div className="panel-body">
                                    <div className="alert alert-danger">{this.props.errorMessage}</div>
                                    <SignInForm login={this.props.login} addUser={this.props.addUser} redirect={true}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
