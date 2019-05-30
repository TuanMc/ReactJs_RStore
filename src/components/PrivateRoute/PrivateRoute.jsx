import React from "react";
import { Route, Redirect } from "react-router-dom";

/**
 * - Only authenticated user can access protected pages.
 * - Unauthenticated users will be navigated to `Login` page
 */
function PrivateRoute({ component: Component, isLogin, isVerified, ...rest }) {
  console.log("login: ", isLogin);
  console.log("verify: ", isVerified);
  return (
    <Route
      {...rest}
      render={props =>
        isLogin && isVerified ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}

export default PrivateRoute;
