import React, { useRef } from 'react'
import { FaBell, FaUserCircle } from 'react-icons/fa'
import { IoInformationCircle } from 'react-icons/io5'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  Box,
  IconButton,
  Avatar,
  VStack,
  HStack,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  Button,
} from '@chakra-ui/react'

import SidebarCustom from '../../shared/Sidebar/SidebarCustom'

import './EmployeeList.css'

const array_map = [1, 2, 3, 4, 5, 6, 7, 8]

function EmployeeList() {
  const initialFocusRef = useRef()

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
                <BreadcrumbLink href='#'>Employees List</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <div className='dashboard-nav-title'>Employees List</div>
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

        <Grid
          templateColumns='repeat(3,1fr)'
          gap={6}
        >
          {array_map.map((e, index) => {
            return (
              <Box
                key={index}
                className='employee-card'
                // w='xs'
                height={'20rem'}
                bg='white'
                boxShadow='md'
                borderRadius='xl'
                p={4}
                mt={6}
                ml={2}
                position='relative'
              >
                <Popover
                  placement='bottom-end'
                  initialFocusRef={initialFocusRef}
                >
                  <PopoverTrigger>
                    <IconButton
                      size='sm'
                      className='mahesh'
                      bg='#f5f8fe'
                      aria-label='More options'
                      position='absolute'
                      top={2}
                      right={2}
                      _hover={{ bg: 'gray.100' }}
                    >
                      <Text
                        fontWeight='bold'
                        color={'#000'}
                        marginBottom={2}
                      >
                        ...
                      </Text>
                    </IconButton>
                  </PopoverTrigger>
                  <PopoverContent
                    w='10rem'
                    _focus={{ boxShadow: 'md' }}
                  >
                    <PopoverArrow />
                    <PopoverCloseButton marginBottom={5} />
                    <PopoverBody
                      display='flex'
                      flexDirection='column'
                      gap={2}
                      p={3}
                      marginTop={4}
                    >
                      <Button
                        variant='ghost'
                        size='sm'
                      >
                        View Profile
                      </Button>
                      <Button
                        variant='ghost'
                        size='sm'
                      >
                        View Report
                      </Button>
                      <Button
                        variant='ghost'
                        size='sm'
                      >
                        Transfer Employee
                      </Button>
                      <Button
                        variant='ghost'
                        size='sm'
                        colorScheme='red'
                      >
                        Remove Employee
                      </Button>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>

                {/* Employee Info */}
                <VStack spacing={8}>
                  <Avatar
                    name='Reshma'
                    src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3MjAxN3wwfDF8c2VhcmNofDIzfHxwcm9maWxlfGVufDB8fHx8MTc0MjQ3MTMyM3ww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450'
                    size='xl'
                    mt={4}
                  />
                  <Box textAlign='center'>
                    <Text
                      fontWeight='bold'
                      fontSize='lg'
                    >
                      Reshma
                    </Text>
                    <Text
                      fontSize='sm'
                      color='gray.500'
                    >
                      Project Manager
                    </Text>
                  </Box>
                  <HStack
                    spacing={'5.5rem'}
                    mt={2}
                  >
                    <VStack spacing={1}>
                      <Text fontWeight='bold'>52648</Text>
                      <Text
                        fontSize='xs'
                        color='gray.500'
                      >
                        ID
                      </Text>
                    </VStack>
                    <VStack spacing={0}>
                      <Text fontWeight='bold'>10</Text>
                      <Text
                        fontSize='xs'
                        color='gray.500'
                      >
                        Projects
                      </Text>
                    </VStack>
                    <VStack spacing={0}>
                      <Text fontWeight='bold'>Ramesh</Text>
                      <Text
                        fontSize='xs'
                        color='gray.500'
                      >
                        Manager
                      </Text>
                    </VStack>
                  </HStack>
                </VStack>
              </Box>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default EmployeeList
