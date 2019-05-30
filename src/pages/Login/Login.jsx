import React from "react";
import withFireBase from "../../hocs/withFireBase.jsx";
import "./styles.css";

function Login(props) {
  return (
    <>
      <div className="login-form">
        <form onSubmit={props.onSubmit}>
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="email@example.com"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="password"
              required="required"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Log in
            </button>
          </div>
          <div className="clearfix">
            <label className="pull-left checkbox-inline">
              <input type="checkbox" /> Remember me
            </label>
            <a className="pull-right">Forgot Password?</a>
          </div>
        </form>
        <p className="text-center">
          <a href="/register">Create an Account</a>
        </p>
      </div>
    </>
  );
}

export default withFireBase(Login);
