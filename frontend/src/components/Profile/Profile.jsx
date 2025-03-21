import React from 'react'
import SidebarCustom from '../../shared/Sidebar/SidebarCustom'
import './Profile.css'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Input,
  Flex,
  Button,
  Icon,
  Avatar,
} from '@chakra-ui/react'
import { FaBell, FaUserCircle, FaExclamationCircle } from 'react-icons/fa'
import { IoInformationCircle } from 'react-icons/io5'

function Profile() {
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
                <BreadcrumbLink href='#'>Employees</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <div className='dashboard-nav-title'>Employees</div>
          </div>

          <div className='dashboard-profile-bar'>
            <Input
              type='text'
              className='search-bar'
              placeholder='Search...'
            />
            <Flex alignItems='center'>
              <Button
                className='icon-button'
                mr={2}
              >
                <Icon as={FaBell} />
              </Button>
              <Button
                className='icon-button'
                mr={2}
              >
                <Icon as={FaExclamationCircle} />
              </Button>
              <Button className='profile-icon'>
                <Avatar
                  as={FaUserCircle}
                  size='sm'
                />
              </Button>
            </Flex>
          </div>
        </div>
        <div className='profile-container'>
          <div className='profile-container-img'>
            <img
              className='profile-container-img'
              src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDIzfHxwcm9maWxlfGVufDB8fHx8MTc0MjQ3MTMyM3ww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'
            />
          </div>
          <div className='profile-container-heading'>
            <div className='profile-container-header'>
              <p>Reshma</p>
            </div>
            <div className='profile-container-subheader'>
              <h1>Project Manager</h1>
            </div>
          </div>
          <div className='profile-container-stats'>
            <div className='profile-container-ID'>
              <div className='profile-container-idNum'>
                <p>52468</p>
              </div>
              <div className='profile-container-idName'>
                <p>ID</p>
              </div>
            </div>
            <div className='profile-container-projects'>
              <div className='profile-container-projectNum'>
                <p>15</p>
              </div>
              <div className='profile-container-projectName'>
                <p>Projects</p>
              </div>
            </div>
            <div className='profile-container-manager'>
              <div className='profile-container-managerNum'>
                <p>Ramesh</p>
              </div>
              <div className='profile-container-managerName'>
                <p>Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
