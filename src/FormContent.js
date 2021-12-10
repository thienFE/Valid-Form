import React from "react"
import { Link } from "react-router-dom"

import useForm from "./useForm"
import validateInfo from "./validateInfo"

function FormContent({ submitForm }) {
  const {
    values,
    handleSubmit,
    handleBlur,
    handleChange,
    checkWarning,
    errors,
    activeSignupBtn,
  } = useForm(submitForm, validateInfo)

  const handleRemoveDefault = (e) => {
    if (!activeSignupBtn) {
      e.preventDefault()
    }
  }

  return (
    <div className="form-content-inner">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <div className="form-inputs">
          <label className="form-label">User name</label>
          <input
            className="form-input"
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && <p className={checkWarning.username ? "" : "hide"}>{errors.username}</p>}
        </div>
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
          {errors.email && <p className={checkWarning.email ? "" : "hide"}>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
          <input
            className="form-input"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && <p className={checkWarning.password ? "" : "hide"}>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Confirm your password</label>
          <input
            className="form-input"
            type="password"
            name="password2"
            value={values.password2}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password2 && <p className={checkWarning.password2 ? "" : "hide"}>{errors.password2}</p>}
        </div>
        <button
          onClick={handleRemoveDefault}
          className={`${activeSignupBtn ? "submit-btn active" : "submit-btn"}`}
          type="submit"
        >
          Sign up
        </button>
        <Link to="/" className="google-signin-btn"><img src="/img/google.png" alt="google"/>Sign in with Google</Link>
        <span className="form-login-link">
          Already have an account? Login <Link to="/LoginForm">here</Link>
        </span>
      </form>
    </div>
  )
}

export default FormContent
