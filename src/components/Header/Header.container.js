import { connect } from "react-redux";
import { compose } from "recompose";
import { userLogoutRequest } from "../../redux/actions/userAuthenticationAction";
import Header from "./Header.jsx";

const mapStateToProps = state => {
  return {
    value: [...state.itemSelectReducer.itemsInCart].reduce(
      (accum, curValue) => accum + curValue.quantity,
      0
    ),
    isAuthenticated: state.userAuthenticationReducer.isAuthenticated
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSignOut: () => {
      userLogoutRequest().then(data => dispatch(data));
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Header);
