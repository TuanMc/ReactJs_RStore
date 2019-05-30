import firebaseApp from "../../../src/firebase.config";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_CHECK_AUTHEN = "USER_CHECK_AUTHEN";
export const USER_LOGOUT_REQUEST = "USER_LOGOUT_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";

// #region Login actions
export function userLoginRequest() {
  return {
    type: USER_LOGIN_REQUEST
  };
}

export function userLoginSuccess(message) {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: message
  };
}

export function userCheckAuthen(message) {
  return {
    type: USER_CHECK_AUTHEN,
    payload: message
  };
}

export function userLoginFail(error) {
  return {
    type: USER_LOGIN_FAIL,
    payload: error
  };
}
// endregion

// #region Logout actions
export async function userLogoutRequest() {
  try {
    await firebaseApp.auth().signOut();
    return {
      type: USER_LOGOUT_REQUEST
    };
  } catch (err) {
    console.log(err);
  }
}
// endregion

// #region Register actions
export function userRegisterSuccess() {
  return {
    type: USER_REGISTER_SUCCESS
  };
}
// endregion
