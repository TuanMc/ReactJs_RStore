import React from "react";
import withFireBase from "../../hocs/withFireBase.jsx";
import "./styles.css";

function Register(props) {
  return (
    <div className="login-form">
      <form onSubmit={props.onSubmit}>
        <h2 className="text-center">Create new account</h2>
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
          <input
            type="password"
            className="form-control"
            name="re_password"
            placeholder="re-enter password"
            required="required"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>
        </div>
      </form>
      <p className="text-center">
        <a href="/login">Back to login</a>
      </p>
    </div>
  );
}

export default withFireBase(Register);
