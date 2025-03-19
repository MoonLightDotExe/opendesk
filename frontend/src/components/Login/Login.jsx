import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@chakra-ui/react'

import bg from '../../assets/background.jpg'
import './Login.css'

function Login() {
  return (
    <div className='Login-container'>
      <div className='Login-bg-container'>
        <img
          className='Login-bg'
          src={bg}
        ></img>
      </div>
      <div className='LoginContainer1'>
        <div className='LoginHeader'>
          <h1>OPENDESK</h1>
          <div className='LoginSubheader'>
            <p>Connecting employees together!</p>
          </div>
        </div>
        <div className='LoginContainer2'>
          <h1>LOGIN</h1>
          <Input
            className='input-field2'
            placeholder='Username'
            width='20rem'
            border='2px solid black'
          />
          <Input
            className='input-field3'
            placeholder='Password'
            width='20rem'
            border='2px solid black'
          />
          <div className='ForgotPass'>Forgot Password?</div>
        </div>
        <div className='LoginContainer3'>
          <button className='LoginButton'>LOGIN</button>
        </div>
        <div className='BottomText'>
          Don't have an account?
          <Link
            className='login-link'
            to='/sign-up'
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
