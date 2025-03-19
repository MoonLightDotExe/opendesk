import React from 'react'
import './Register.css'
import bg from '../../assets/background.jpg'
import { Input } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Register() {
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
            placeholder='Email or Phone'
            width='20rem'
            border='2px solid black'
          />
          <Input
            className='input-field2'
            placeholder='Create Password'
            width='20rem'
            border='2px solid black'
          />
          <Input
            className='input-field3'
            placeholder='Confirm Password'
            width='20rem'
            border='2px solid black'
          />
        </div>
        <div className='RegContainer3'>
          <button className='RegButton'>PROCEED</button>
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
