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
  VStack,
  Box,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
  Progress,
} from '@chakra-ui/react'
import {
  FaBell,
  FaUserCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaExclamationCircle,
} from 'react-icons/fa'
import { IoInformationCircle } from 'react-icons/io5'
import { FiMoreHorizontal } from 'react-icons/fi'

const tableData = [
  {
    name: 'Marketplace',
    status: 'Approved',
    date: '24.Jan.2021',
    progress: 80,
  },
  { name: 'Marketplace', status: 'Disable', date: '30.Dec.2021', progress: 30 },
  { name: 'Marketplace', status: 'Error', date: '20.May.2021', progress: 50 },
  {
    name: 'Marketplace',
    status: 'Approved',
    date: '12.Jul.2021',
    progress: 100,
  },
  {
    name: 'Marketplace',
    status: 'Approved',
    date: '12.Jul.2021',
    progress: 100,
  },
  {
    name: 'Marketplace',
    status: 'Approved',
    date: '12.Jul.2021',
    progress: 100,
  },
  {
    name: 'Marketplace',
    status: 'Approved',
    date: '12.Jul.2021',
    progress: 100,
  },
  {
    name: 'Marketplace',
    status: 'Approved',
    date: '12.Jul.2021',
    progress: 100,
  },
]

const getStatusIcon = (status) => {
  switch (status) {
    case 'Approved':
      return (
        <Icon
          as={FaCheckCircle}
          color='green.500'
        />
      )
    case 'Disable':
      return (
        <Icon
          as={FaTimesCircle}
          color='red.500'
        />
      )
    case 'Error':
      return (
        <Icon
          as={FaExclamationTriangle}
          color='orange.500'
        />
      )
    default:
      return null
  }
}

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
        <div className='profile-container-personal-container'>
          <div className='profile-container-projectContainer'>
            <div className='profile-container-projectheader'>
              <p>Projects</p>
            </div>
            <div className='profile-conatiner-projectsubheader'>
              <h1>
                Here you can find more details about your projects. Keep you
                user engaged by providing meaningful information.
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

                  <Text py='2'>
                    Created interactive dashboard using PowerBI
                  </Text>
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
          <div className='profile-container-generalinfo'>
            <div className='profile-container-generalinfo-header'>
              General Information
            </div>
            <VStack
              spacing={4}
              margin={3}
            >
              <div className='profile-conatiner-generalinfo-card'>
                <div className='profile-conatiner-generalinfo-cardhead'>
                  <p>Birthdate</p>
                </div>
                <div className='profile-conatiner-generalinfo-cardname'>
                  <h1>13-07-1995</h1>
                </div>
              </div>
              <div className='profile-conatiner-generalinfo-card'>
                <div className='profile-conatiner-generalinfo-cardhead'>
                  <p>Education</p>
                </div>
                <div className='profile-conatiner-generalinfo-cardname'>
                  <h1>Stanford University</h1>
                </div>
              </div>
              <div className='profile-conatiner-generalinfo-card'>
                <div className='profile-conatiner-generalinfo-cardhead'>
                  <p>Languages</p>
                </div>
                <div className='profile-conatiner-generalinfo-cardname'>
                  <h1>Hindi, Marathi, English</h1>
                </div>
              </div>
              <div className='profile-conatiner-generalinfo-card'>
                <div className='profile-conatiner-generalinfo-cardhead'>
                  <p>Graduation Year</p>
                </div>
                <div className='profile-conatiner-generalinfo-cardname'>
                  <h1>2016</h1>
                </div>
              </div>
              <div className='profile-conatiner-generalinfo-card'>
                <div className='profile-conatiner-generalinfo-cardhead'>
                  <p>Organization</p>
                </div>
                <div className='profile-conatiner-generalinfo-cardname'>
                  <h1>Simmple Web Ltd</h1>
                </div>
              </div>
              <div className='profile-conatiner-generalinfo-card'>
                <div className='profile-conatiner-generalinfo-cardhead'>
                  <p>Department</p>
                </div>
                <div className='profile-conatiner-generalinfo-cardname'>
                  <h1>Product Design</h1>
                </div>
              </div>
              <div className='profile-conatiner-generalinfo-card'>
                <div className='profile-conatiner-generalinfo-cardhead'>
                  <p>Experience</p>
                </div>
                <div className='profile-conatiner-generalinfo-cardname'>
                  <h1>3+ years</h1>
                </div>
              </div>
            </VStack>
          </div>
        </div>
        <Box
          mt={8}
          bg='white'
          borderRadius='md'
          boxShadow='sm'
          p={6}
        >
          <Flex
            justify='space-between'
            alignItems='center'
            mb={4}
          >
            <Text
              fontSize='xl'
              fontWeight='semibold'
            >
              Complex Table
            </Text>
            <Button
              leftIcon={<Icon as={FiMoreHorizontal} />}
              size='sm'
            >
              More
            </Button>
          </Flex>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>NAME</Th>
                <Th>STATUS</Th>
                <Th>DATE</Th>
                <Th>PROGRESS</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((row, index) => (
                <Tr key={index}>
                  <Td>{row.name}</Td>
                  <Td>
                    <Flex alignItems='center'>
                      {getStatusIcon(row.status)}
                      <Text ml={2}>{row.status}</Text>
                    </Flex>
                  </Td>
                  <Td>{row.date}</Td>
                  <Td>
                    <Progress
                      value={row.progress}
                      size='sm'
                      colorScheme='blue'
                      borderRadius='md'
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </div>
    </div>
  )
}

export default Profile
