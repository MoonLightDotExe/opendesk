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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Image,
  Text,
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
        <div className='profile-container-projectContainer'>
          <div className='profile-container-projectheader'>
            <p>PROJECTS</p>
          </div>
          <div className='profile-conatiner-projectsubheader'>
            <h1>
              Here you can find more details about your projects. Keep you user
              engaged by providing meaningful information.
            </h1>
          </div>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            marginTop={4}
            width='40rem'
            height='10rem'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '90%', sm: '150px' }}
              src='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Caffe Latte'
            />

            <Stack>
              <CardBody>
                <Heading size='md'>Blog Application</Heading>

                <Text py='2'>React application</Text>
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            marginTop={4}
            width='40rem'
            height='10rem'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '90%', sm: '150px' }}
              src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Caffe Latte'
            />

            <Stack>
              <CardBody>
                <Heading size='md'>PowerBI Dashboard</Heading>

                <Text py='2'>Created interactive dashboard using PowerBI</Text>
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            marginTop={4}
            width='40rem'
            height='10rem'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '90%', sm: '150px' }}
              src='https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Caffe Latte'
            />

            <Stack>
              <CardBody>
                <Heading size='md'>Maze Solving Bot</Heading>

                <Text py='2'>developed ML model</Text>
              </CardBody>
            </Stack>
          </Card>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            marginTop={4}
            width='40rem'
            height='10rem'
          >
            <Image
              objectFit='cover'
              maxW={{ base: '90%', sm: '150px' }}
              src='https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Caffe Latte'
            />

            <Stack>
              <CardBody>
                <Heading size='md'>Expense Tracker</Heading>

                <Text py='2'>Created API</Text>
              </CardBody>
            </Stack>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Profile
