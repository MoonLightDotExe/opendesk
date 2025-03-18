import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import {
  FaChartPie,
  FaCalendarAlt,
  FaBook,
  FaBars,
  FaBell,
  FaExclamationCircle,
  FaUserCircle,
} from 'react-icons/fa'
import { FaChartSimple } from 'react-icons/fa6'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Grid,
  GridItem,
  Box,
  Icon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

import './Dashboard.css'

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false)
  const [isActive, setActive] = useState('dashboard')

  const handleClick = (e) => {
    setActive(e.currentTarget.id)
  }

  return (
    <div className='dashboard-container'>
      <Sidebar
        collapsed={collapsed}
        className='sidebar'
      >
        <div className='dashboard-sidebar-header'>
          {!collapsed ? 'OPENDESK' : 'O'}
        </div>
        <Menu iconShape='square'>
          <MenuItem
            icon={<FaBars />}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? '☰' : 'Collapse'}
          </MenuItem>
          <MenuItem
            icon={<FaBook />}
            id='dashboard'
            onClick={(e) => handleClick(e)}
            active={isActive === 'dashboard'}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            icon={<FaCalendarAlt />}
            id='employees'
            active={isActive === 'employees'}
            onClick={(e) => handleClick(e)}
          >
            Employees
          </MenuItem>
          <MenuItem icon={<FaCalendarAlt />}>Monitoring</MenuItem>
          <MenuItem icon={<FaCalendarAlt />}>Security Feed</MenuItem>
        </Menu>
      </Sidebar>
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
                <FaExclamationCircle />
              </button>
              <button className='profile-icon'>
                <FaUserCircle size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className='dashboard-cards'>
          <Grid
            templateColumns='repeat(3, 1fr)'
            gap={10}
          >
            {[...Array(6)].map((_, index) => (
              <GridItem
                key={index}
                className='dashboard-stat-card'
                bg='white'
                width='22vw'
                borderRadius='12px'
                boxShadow='md'
                p={4}
              >
                <Stat>
                  <Box
                    padding={'.5rem'}
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                  >
                    {/* Left: Icon */}
                    <Box className='dashboard-icon'>
                      <Icon
                        as={FaChartSimple}
                        w={6}
                        h={6}
                        color='black'
                      />
                    </Box>

                    {/* Middle: Title & Percentage Change */}
                    <Box
                      className='dashboard-stat-info'
                      textAlign='center'
                    >
                      <StatLabel
                        fontSize='sm'
                        color='gray.500'
                      >
                        Earnings
                      </StatLabel>

                      <Box className='dashboard-stat-number'>
                        <StatNumber fontSize='1.5rem'>$340.5</StatNumber>
                      </Box>
                    </Box>
                    <StatHelpText
                      color='green.500'
                      marginTop={'0.4rem'}
                      fontSize={'1.05rem'}
                    >
                      <StatArrow type='increase' /> 2.45%
                    </StatHelpText>
                    {/* Right: Number */}
                  </Box>
                </Stat>
              </GridItem>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
