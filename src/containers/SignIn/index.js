import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FacebookLogin } from 'react-facebook-login-component';

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

    login = (e) => {
        e.preventDefault();
        var payload = {
            username: document.getElementsByName('username')[0].value,
            password: document.getElementsByName('password')[0].value
        }
        this.props.login(payload);
    }

    componentWillUnmount = () => {
        this.props.resetError();
    }

    responseFacebook = (response) => {
        this.props.addUser({
            firstName: response.first_name,
            lastName: response.last_name,
            gender: response.gender,
            email: response.email,
            profilePic: response.picture.data.url,
            fbId: response.id
        })
        console.log(response);
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
                                    <SignInForm {...this.props} />
                                    <FacebookLogin socialId="1619673508300494"
                                       language="en_US"
                                       scope="public_profile,email"
                                       fields="first_name,gender,last_name,email,picture.width(150).height(150)"
                                       responseHandler={this.responseFacebook}
                                       xfbml={true}
                                       version="v2.5"
                                       class="facebook-login"
                                       buttonText="Login With Facebook"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
