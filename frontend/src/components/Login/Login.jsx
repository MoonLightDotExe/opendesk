import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '@chakra-ui/react'
import axios from 'axios'

import bg from '../../assets/background.jpg'
import './Login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
    setUsername(e.target.value)
  }

  const handleChange_2 = (e) => {
    console.log(e.target.value)
    setPassword(e.target.value)
  }

  const send_data = {
    email: username,
    password: password,
  }

  const handleClick = async () => {
    try {
      const data = await axios.post(
        'http://127.0.0.1:5000/loginEmployee',
        send_data
      )
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

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
            value={username}
            onChange={(e) => handleChange(e)}
          />
          <Input
            className='input-field3'
            placeholder='Password'
            type='password'
            width='20rem'
            border='2px solid black'
            value={password}
            onChange={(e) => handleChange_2(e)}
          />
          <div className='ForgotPass'>Forgot Password?</div>
        </div>
        <div className='LoginContainer3'>
          <button
            className='LoginButton'
            onClick={handleClick}
          >
            LOGIN
          </button>
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
