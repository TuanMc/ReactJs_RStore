import React from "react";
import { Redirect } from "react-router-dom";
import firebaseApp from "../firebase.config";
// Redux
import { connect } from "react-redux";
import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userLogoutRequest,
  userRegisterSuccess
} from "../redux/actions/userAuthenticationAction";

function withFirebase(Component) {
  class WithFirebase extends React.Component {
    signIn = async (email, password) => {
      try {
        this.props.onShowLoading();
        const result = await firebaseApp
          .auth()
          .signInWithEmailAndPassword(email, password);
        this.props.onUserLoginSuccess(result);
      } catch (err) {
        console.log(err, "err");
      }
    };

    register = async (email, password) => {
      try {
        await firebaseApp
          .auth()
          .createUserWithEmailAndPassword(email, password);
      } catch (err) {
        console.log(err, "err");
      }
    };

    signOut = async e => {
      e.preventDefault();
      try {
        await firebaseApp.auth().signOut();
        this.props.onUserLogOut();
      } catch (err) {
        console.log(err);
      }
    };

    onSubmit = e => {
      e.preventDefault();
      const { email, password, re_password } = e.target.elements;

      if (re_password) {
        // register new account
        this.setState(() => {
          this.register(email.value, password.value);
        });
      } else if (email && password) {
        // log in
        this.setState(() => {
          this.signIn(email.value, password.value);
        });
      }
    };

    render() {
      return (
        <>
          {this.props.load && <h1>Loading...</h1>}
          {!this.props.load && !this.props.user && (
            <Component onSubmit={this.onSubmit} signOut={this.onsignOut} />
          )}
          {this.props.isAuthenticated && this.props.isVerified && <Redirect to="/" />}
          {this.props.isAuthenticated && !this.props.isVerified && <Redirect to="/email-verify" />}
          {this.props.fail && <h1>{this.props.fail.message}</h1>}
        </>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      load: state.userAuthenticationReducer.load,
      fail: state.userAuthenticationReducer.fail,
      user: state.userAuthenticationReducer.result,
      isAuthenticated: state.userAuthenticationReducer.isAuthenticated,
      isVerified: state.userAuthenticationReducer.isVerified
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      onShowLoading: () => {
        return dispatch(userLoginRequest());
      },
      onUserLoginSuccess: user => {
        console.log("login:", user);
        return dispatch(userLoginSuccess(user));
      },
      onUserLoginFail: error => {
        return dispatch(userLoginFail(error));
      },
      onUserLogOut: () => {
        return dispatch(userLogoutRequest());
      },
      onRegisterSuccess: () => {
        return dispatch(userRegisterSuccess());
      }
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithFirebase);
}

export default withFirebase;
