import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import bg from '../../assets/background.jpg'
import './Register.css'

function Register() {
  const [email, setEmail] = useState('')
  const [create_password, setCreate_password] = useState('')
  const [confirm_password, setConfirm_password] = useState('')

  const handleChange_1 = (e) => {
    setEmail(e.target.value)
  }

  const handleChange_2 = (e) => {
    setCreate_password(e.target.value)
  }

  const handleChange_3 = (e) => {
    setConfirm_password(e.target.value)
  }

  const send_data = {
    email: email,
    password: create_password,
    name: 'sammy',
    clearance: '1',
    manager: '66c7a5696bc14623881a2fad',
  }

  const handleClick = async () => {
    try {
      console.log(send_data)
      const data = await axios.post(
        'http://127.0.0.1:5000/addEmployee',
        send_data
      )
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='Register-container'>
      <div className='Register-bg-container'>
        <img
          className='Register-bg'
          src={bg}
        ></img>
      </div>
      <div className='RegContainer1'>
        <div className='RegisterHeader'>
          <h1>OPENDESK</h1>
          <div className='RegisterSubheader'>
            <p>Connecting employees together!</p>
          </div>
        </div>
        <div className='RegContainer2'>
          <h1>SIGN UP</h1>
          <Input
            className='input-field'
            placeholder='Email'
            type='Email'
            width='20rem'
            border='2px solid black'
            value={email}
            onChange={(e) => handleChange_1(e)}
          />
          <Input
            className='input-field2'
            placeholder='Create Password'
            type='Password'
            width='20rem'
            border='2px solid black'
            value={create_password}
            onChange={(e) => handleChange_2(e)}
          />
          <Input
            className='input-field3'
            placeholder='Confirm Password'
            type='Password'
            width='20rem'
            border='2px solid black'
            value={confirm_password}
            onChange={(e) => handleChange_3(e)}
          />
        </div>
        <div className='RegContainer3'>
          <button
            className='RegButton'
            onClick={handleClick}
          >
            PROCEED
          </button>
        </div>
        <div className='Bottom-Text'>
          Already have an account?
          <Link
            className='bottom-link'
            to='/login'
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
