import React from "react"
import { Route, Routes } from "react-router-dom"

import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"

import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignupForm />}></Route>
        <Route path="/LoginForm" element={<LoginForm />}></Route>
      </Routes>
    </>
  )
}

export default App
