import React, { useState } from "react";
import { Link } from "react-router-dom";

import useForm from "./useForm";
import validateInfo from "./validateInfo";

function LoginContent({ submitForm }) {
  const {
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    checkWarning,
    errors,
    activeSigninBtn,
  } = useForm(submitForm, validateInfo);

  const handleRemoveDefault = (e) => {
    if (!activeSigninBtn) {
      e.preventDefault();
    }
  };

  const [seePassword, setSeePassword] = useState(false);

  const handlePasswordType = () => {
    setSeePassword(!seePassword);
  };

  return (
    <div className="form-content-inner">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && (
            <p className={checkWarning.email ? "" : "hide"}>{errors.email}</p>
          )}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <div>
            <input
              className="form-input"
              type={seePassword ? "text" : "password"}
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span onClick={handlePasswordType}>
              {seePassword ? (
                <i className="far fa-eye" />
              ) : (
                <i className="far fa-eye-slash"></i>
              )}
            </span>
          </div>
        </div>
        <button
          onClick={handleRemoveDefault}
          className={`${activeSigninBtn ? "submit-btn active" : "submit-btn"}`}
          type="submit"
        >
          Sign in
        </button>
        <Link to="/" className="google-signin-btn">
          <img src="/img/google.png" alt="google" />
          Sign in with Google
        </Link>
        <span className="form-login-link">
          Do not have an account? Register <Link to="/">here</Link>
        </span>
      </form>
    </div>
  );
}

export default LoginContent;
