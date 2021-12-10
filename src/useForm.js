import { useEffect, useState } from "react"

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  })

  const [errors, setErrors] = useState({})

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [activeSignupBtn, setActiveSignupBtn] = useState(false)

  const [activeSigninBtn, setActiveSigninBtn] = useState(false)

  const [checkWarning, setCheckWarning] = useState({
    username: false,
    email: false,
    password: false,
    password2: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })

    if (value) {
      setCheckWarning({
        ...checkWarning,
        [name]: false,
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setErrors(validate(values))
    
    setIsSubmitting(true)
  }

  const handleBlur = (e) => {
    const { name } = e.target

    setErrors(validate(values))
    
    setCheckWarning({
      ...checkWarning,
      [name]: true,
    })
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors, isSubmitting, callback])

  useEffect(() => {
    if (
      values.username.trim() &&
      values.email &&
      values.password &&
      values.password2
    ) {
      setActiveSignupBtn(true)
    } else setActiveSignupBtn(false)
  }, [values])

  useEffect(() => {
    if (
      values.email &&
      values.password
    ) {
      setActiveSigninBtn(true)
    } else setActiveSigninBtn(false)
  }, [values])

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    checkWarning,
    values,
    errors,
    activeSignupBtn,
    activeSigninBtn
  }
}

export default useForm
