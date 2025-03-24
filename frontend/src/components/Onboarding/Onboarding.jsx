import React from 'react'
import SidebarCustom from '../../shared/Sidebar/SidebarCustom'

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

import './Onboarding.css'

function Onboarding() {
  return (
    <div className='dashboard-container'>
      <SidebarCustom />
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
            height='35rem'
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
                Email ID
              </FormLabel>
              <Input
                placeholder='Email'
                type='Email'
                width='18rem'
                marginLeft='2.5rem'
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
              />
            </FormControl>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
