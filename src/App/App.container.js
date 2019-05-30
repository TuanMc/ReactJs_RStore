import { connect } from "react-redux";
import {
  userLoginRequest,
  userLoginSuccess,
  userLoginFail,
  userCheckAuthen,
  userLogoutRequest
} from "../redux/actions/userAuthenticationAction";
import App from "./App.jsx";

const mapStateToProps = state => {
  return {
    user: state.userAuthenticationReducer.result,
    isAuthenticated: state.userAuthenticationReducer.isAuthenticated,
    isVerified: state.userAuthenticationReducer.isVerified,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUserLoginRequest: () => {
      return dispatch(userLoginRequest());
    },
    onUserCheckAuthen: user => {
      return dispatch(userCheckAuthen(user));
    },
    onUserLoginSuccess: user => {
      return dispatch(userLoginSuccess(user));
    },
    onUserLoginFail: error => {
      return dispatch(userLoginFail(error));
    },
    onUserLogOut: () => {
      return dispatch(userLogoutRequest());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
