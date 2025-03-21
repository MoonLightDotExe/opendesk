import React from 'react'
import SidebarCustom from '../../shared/Sidebar/SidebarCustom'
import './Report.css'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Input,
  Flex,
  Button,
  Icon,
  Avatar,
  Container,
  Select,
} from '@chakra-ui/react'
import { FaBell, FaUserCircle, FaExclamationCircle } from 'react-icons/fa'
import { IoInformationCircle } from 'react-icons/io5'
import { FaCheck } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'

function Report() {
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
                <BreadcrumbLink href='#'>Employee Report</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <div className='dashboard-nav-title'> Employee Report</div>
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
        <div className='report-container'>
          <Select
            className='report-container-select'
            placeholder='Employee'
            width='20rem'
          >
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Input
            className='report-container-input'
            placeholder='Date'
            type='Date'
            width='25rem'
          />
          <Button
            className='report-container-btn'
            width='15rem'
            backgroundColor='#61b9f7'
            borderRadius='10px'
            border='1px solid black'
            _hover={{ border: '2px solid black ', fontWeight: 'bold' }}
          >
            View Report
          </Button>
        </div>
        <div className='report-container-box'></div>
        <div className='report-container-bottom'>Unknown Services</div>
        <div className='report-container-cards'>
          <div className='report-container-card1'>Service Name</div>
          <div className='report-container-cardButtons'>
            <button className='report-btn report-yes'>
              <FaCheck size={25} />
            </button>
            <button className='report-btn report-neutral'>N</button>
            <button className='report-btn report-no'>
              <IoClose size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
