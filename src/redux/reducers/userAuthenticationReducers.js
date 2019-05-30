import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_CHECK_AUTHEN,
  USER_LOGOUT_REQUEST,
  USER_REGISTER_SUCCESS
} from "../actions/userAuthenticationAction";

const initialState = {
  isAuthenticated: false,
  isVerified: true,
  load: false,
  result: null,
  fail: null
};

export function userAuthenticationReducer(state = initialState, action) {
  switch (action && action.type) {
    case USER_LOGIN_REQUEST:
      return Object.assign({}, state, { load: true });

    case USER_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        load: false,
        result: action.payload,
        isAuthenticated: true,
        isVerified: action.payload.user.emailVerified
      });

    case USER_LOGIN_FAIL:
      return Object.assign({}, state, {
        load: false,
        result: null,
        fail: action.error,
        isAuthenticated: false,
        isVerified: false
      });

    case USER_CHECK_AUTHEN:
      return Object.assign({}, state, {
        load: false,
        result: action.payload,
        isAuthenticated: true,
        isVerified: action.payload.emailVerified
      });

    case USER_LOGOUT_REQUEST:
      return Object.assign({}, state, {
        load: false,
        result: null,
        fail: null,
        isAuthenticated: false,
        isVerified: false
      });

    case USER_REGISTER_SUCCESS:
      return Object.assign({}, state, {
        load: false,
        result: null,
        fail: null,
        isAuthenticated: false,
        isVerified: false
      });

    default:
      return state;
  }
}
