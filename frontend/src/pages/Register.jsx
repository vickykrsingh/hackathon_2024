import React from 'react'
import RegisterComponent from '../Components/Register'
import { Toaster } from 'react-hot-toast'
function Register() {
  return (
    <>
        <RegisterComponent/>
        <Toaster/>
    </>
  )
}

export default Register