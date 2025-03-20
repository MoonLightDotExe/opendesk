import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box,
  Flex,
  Input,
  Button,
  Icon,
  Avatar,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Progress,
  Text,
} from '@chakra-ui/react'
import {
  FaBell,
  FaExclamationCircle,
  FaUserCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
} from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'

import SidebarCustom from '../../shared/Sidebar/SidebarCustom'
import './Employee.css'

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

function Employee() {
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

        {/* Complex Table */}
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

export default Employee
