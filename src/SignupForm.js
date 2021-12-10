import React, { useState } from "react"

import FormContent from "./FormContent"
import FormSuccess from "./FormSuccess"

import "./Form.scss"

function SignupForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitForm = () => {
    setIsSubmitted(true)
  }

  return (
    <div className="form-container">
      {!isSubmitted ? (
        <div className="form-content-signup">
        <span className="close-btn">×</span>
        <h1 className="heading">Welcome back</h1>
        <h4 className="sub-heading">Welcome back! Please enter your details</h4>
        <FormContent submitForm={submitForm} />
      </div>
      ) : <FormSuccess />}
      <div className="form-background">
        <img src="/img/bg-img.svg" className="form-background-image" alt="bg" />
      </div>
    </div>
  )
}

export default SignupForm
