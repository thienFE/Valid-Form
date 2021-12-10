import React from "react"
import { Link } from "react-router-dom"

function FormSuccess() {
  return (
    <div className="form-success">
      <div className="form-success-inner">
        <div className="checked-icon">
          <i className="fas fa-check" />
        </div>
        <h1>Success</h1>
        <p>Sign up success! Please login to continue</p>
        <Link to="/LoginForm" className="signin-btn">Sign in</Link>
      </div>
    </div>
  )
}

export default FormSuccess
