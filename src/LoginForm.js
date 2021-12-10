import React from "react"

import LoginContent from "./LoginContent"

import "./Form.scss"

function LoginForm() {
  return (
    <div className="form-container">
      <div className="form-content-signup">
        <span className="close-btn">×</span>
        <h1 className="heading">Welcome to us</h1>
        <h4 className="sub-heading">Please login to continue</h4>
        <LoginContent />
      </div>
      <div className="form-background">
        <img src="/img/bg-img.svg" className="form-background-image" alt="bg" />
      </div>
    </div>
  )
}

export default LoginForm
