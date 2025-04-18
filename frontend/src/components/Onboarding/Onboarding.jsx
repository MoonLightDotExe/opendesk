import React, { useState } from 'react'
import SidebarCustom from '../../shared/Sidebar/SidebarCustom'
import axios from 'axios'
import { ToastContainer, toast, Bounce } from 'react-toastify'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  FormControl,
  FormLabel,
  Input,
  Grid,
  Select,
  Button,
} from '@chakra-ui/react'
import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaBell,
  FaExclamationCircle,
  FaUserCircle,
  FaUsers,
} from 'react-icons/fa'
import { IoInformationCircle, IoWarningOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import './Onboarding.css'

function Onboarding() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirm_password] = useState('')
  const [clearance, setClearance] = useState()
  const [manager, setManager] = useState('66c7a5696bc14623881a2fad')

  const navigate = useNavigate()

  const handleChange_1 = (e) => {
    setName(e.target.value)
    console.log(e.target.value)
  }

  const handleChange_2 = (e) => {
    setEmail(e.target.value)
    console.log(e.target.value)
  }

  const handleChange_3 = (e) => {
    setPassword(e.target.value)
    console.log(e.target.value)
  }

  const handleChange_4 = (e) => {
    setConfirm_password(e.target.value)
    console.log(e.target.value)
  }

  const handleChange_5 = (e) => {
    setClearance(e.target.value)
    console.log(e.target.value)
  }

  const handleChange_6 = (e) => {
    setManager(e.target.value)
    console.log(e.target.value)
  }

  const send_data = {
    email: email,
    password: password,
    name: name,
    clearance: clearance,
    manager: '66c7a5696bc14623881a2fad',
    dailyReports: [],
  }

  const handleClick = async () => {
    try {
      console.log(send_data)
      const data = await axios.post(
        'http://127.0.0.1:5000/addEmployee',
        send_data
      )
      console.log(data)
      toast.success('Added employee in successfully!', {
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
      navigate('/video-capture')
    } catch (error) {
      console.log(error.response.data.err.message)
      toast.error(error.response.data.err.message, {
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
    <div className='dashboard-container'>
      <SidebarCustom />
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
      <div className='dashboard-content'>
        <div className='dashboard-nav'>
          <div className='dashboard-nav-breadcrumb'>
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <div className='dashboard-nav-title'>Dashboard</div>
          </div>

          <div className='dashboard-profile-bar'>
            <input
              type='text'
              className='search-bar'
              placeholder='Search...'
            />
            <div className='icon-container'>
              <button className='icon-button'>
                <FaBell />
              </button>
              <button className='icon-button'>
                <IoInformationCircle size={20} />
              </button>
              <button className='profile-icon'>
                <FaUserCircle size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className='onboarding-container-outer-box'>
          <p className='onboarding-container-heading'>Onboarding Form</p>
          <Grid
            templateColumns='repeat(2,1fr)'
            height='20rem'
            gap='2rem'
          >
            <FormControl isRequired>
              <FormLabel
                fontSize={20}
                marginLeft='1rem'
              >
                Name
              </FormLabel>
              <Input
                placeholder='Name'
                type='Name'
                width='18rem'
                marginLeft='2.5rem'
                value={name}
                onChange={(e) => handleChange_1(e)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                fontSize={20}
                marginLeft='1rem'
              >
                Clearance
              </FormLabel>
              <Select
                placeholder='Clearance'
                marginLeft='2.5rem'
                width='18rem'
                onChange={handleChange_5}
              >
                <option
                  value='option1'
                  name='option1'
                >
                  Option 1
                </option>
                <option
                  value='option2'
                  name='option2'
                >
                  Option 2
                </option>
                <option
                  value='option3'
                  name='optione3
                '
                >
                  Option 3
                </option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                fontSize={20}
                marginLeft='1rem'
              >
                Email ID
              </FormLabel>
              <Input
                placeholder='Email'
                type='Email'
                width='18rem'
                marginLeft='2.5rem'
                value={email}
                onChange={(e) => handleChange_2(e)}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                fontSize={20}
                marginLeft='1rem'
              >
                Manager
              </FormLabel>
              <Select
                placeholder='Manager'
                marginLeft='2.5rem'
                width='18rem'
              >
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                fontSize={20}
                marginLeft='1rem'
              >
                Password
              </FormLabel>
              <Input
                placeholder='Password'
                type='Password'
                width='18rem'
                marginLeft='2.5rem'
                value={password}
                onChange={(e) => handleChange_3(e)}
              />
            </FormControl>

            <FormControl></FormControl>

            <FormControl isRequired>
              <FormLabel
                fontSize={20}
                marginLeft='1rem'
              >
                Confirm Password
              </FormLabel>
              <Input
                placeholder='Confirm Password'
                type='Password'
                width='18rem'
                marginLeft='2.5rem'
                value={confirm_password}
                onChange={(e) => handleChange_4(e)}
              />
            </FormControl>
          </Grid>
          <div className='onboarding-container-button'>
            <Button
              width='10rem'
              type='Submit'
              colorScheme='green'
              padding='1.5rem'
              onClick={handleClick}
            >
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
