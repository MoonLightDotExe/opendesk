import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '@chakra-ui/react'
import axios from 'axios'
import { ToastContainer, toast, Bounce } from 'react-toastify'

import mainContext from '../../context/main'

import bg from '../../assets/background.jpg'
import './Login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const { loginUser } = useContext(mainContext)

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const handleChange_2 = (e) => {
    setPassword(e.target.value)
  }

  const send_data = {
    email: username,
    password: password,
  }

  const handleClick = async () => {
    try {
      const data = await loginUser(send_data)
      console.log(data.success)
      if (data.success) {
        toast.success('Logged in successfully!', {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })
        setTimeout(() => {
          navigate('/dashboard')
          window.location.reload()
        }, 3000)
      } else {
        toast.error('Invalid Credentials!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        })
      }
    } catch (error) {
      toast.error('Invalid Credentials!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
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
          <ToastContainer
            position='bottom-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
            transition={Bounce}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
