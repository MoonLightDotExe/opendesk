import React, { useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaBell,
  FaExclamationCircle,
  FaUserCircle,
} from 'react-icons/fa'
import { IoInformationCircle } from 'react-icons/io5'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { SlEnvolope } from 'react-icons/sl'
import { SlDocs } from 'react-icons/sl'
import { IoWarningOutline } from 'react-icons/io5'
import { GrDocumentPerformance } from 'react-icons/gr'
import { MdOutlinePendingActions } from 'react-icons/md'

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
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  YAxis,
} from 'recharts'
import './Dashboard.css'

const data = [
  { name: 'SEP', revenue: 80, profit: 45 },
  { name: 'OCT', revenue: 130, profit: 60 },
  { name: 'NOV', revenue: 90, profit: 50 },
  { name: 'DEC', revenue: 66, profit: 46 },
  { name: 'JAN', revenue: 85, profit: 35 },
  { name: 'FEB', revenue: 95, profit: 55 },
]

const pieData = [
  { name: 'Your Files', value: 63, color: '#7f5cff' }, // Purple
  { name: 'System', value: 25, color: '#76e0ff' }, // Light Blue
  { name: 'Other', value: 12, color: '#e8f1ff' }, // Lightest Blue
]

const barData = [
  { time: '00', visitors: 200 },
  { time: '04', visitors: 450 },
  { time: '08', visitors: 600 },
  { time: '12', visitors: 250 },
  { time: '14', visitors: 700 },
  { time: '16', visitors: 850 },
  { time: '18', visitors: 500 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip'>
        <p className='tooltip-label'>{label}</p>
        <p className='tooltip-item-1'>
          <span className='dot revenue-dot'></span> Revenue: {payload[0].value}
        </p>
        <p className='tooltip-item-2'>
          <span className='dot profit-dot'></span> Profit: {payload[1].value}
        </p>
      </div>
    )
  }
  return null
}

const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: payload[0].payload.color,
          color: '#fff',
          padding: '8px 12px',
          borderRadius: '6px',
          fontSize: '14px',
          fontWeight: 'bold',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        }}
      >
        {payload[0].name}: {payload[0].value}%
      </div>
    )
  }
  return null
}

const CustomTooltipBar = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <Box
        bg='white'
        p={3}
        borderRadius='md'
        boxShadow='sm'
        border='1px solid #ccc'
      >
        <Stat>
          <StatLabel
            color='gray.700'
            fontWeight='bold'
          >
            {label}
          </StatLabel>
          <StatNumber color='purple.500'>
            {payload[0].value} Visitors
          </StatNumber>
        </Stat>
      </Box>
    )
  }

  return null
}

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
                <IoInformationCircle size={20} />
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
            <GridItem
              className='dashboard-stat-card'
              bg='white'
              width='22vw'
              borderRadius='12px'
              boxShadow='md'
              p={4}
            >
              <Stat>
                <Box
                  padding='.5rem'
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Box className='dashboard-icon'>
                    <Icon
                      as={AiOutlineDollarCircle}
                      w={6}
                      h={6}
                      color='black'
                    />
                  </Box>
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
                    marginTop='0.4rem'
                    fontSize='1.05rem'
                  >
                    <StatArrow type='increase' /> 2.45%
                  </StatHelpText>
                </Box>
              </Stat>
            </GridItem>

            <GridItem
              className='dashboard-stat-card'
              bg='white'
              width='22vw'
              borderRadius='12px'
              boxShadow='md'
              p={4}
            >
              <Stat>
                <Box
                  padding='.5rem'
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Box className='dashboard-icon'>
                    <Icon
                      as={SlEnvolope}
                      w={6}
                      h={6}
                      color='black'
                    />
                  </Box>
                  <Box
                    className='dashboard-stat-info'
                    textAlign='center'
                  >
                    <StatLabel
                      fontSize='sm'
                      color='gray.500'
                    >
                      Active Tickets
                    </StatLabel>
                    <Box className='dashboard-stat-number'>
                      <StatNumber fontSize='1.5rem'>15</StatNumber>
                    </Box>
                  </Box>
                  <StatHelpText
                    color='green.500'
                    marginTop='0.4rem'
                    fontSize='1.05rem'
                  >
                    <StatArrow type='increase' /> 2.45%
                  </StatHelpText>
                </Box>
              </Stat>
            </GridItem>

            <GridItem
              className='dashboard-stat-card'
              bg='white'
              width='22vw'
              borderRadius='12px'
              boxShadow='md'
              p={4}
            >
              <Stat>
                <Box
                  padding='.5rem'
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Box className='dashboard-icon'>
                    <Icon
                      as={SlDocs}
                      w={6}
                      h={6}
                      color='black'
                    />
                  </Box>
                  <Box
                    className='dashboard-stat-info'
                    textAlign='center'
                  >
                    <StatLabel
                      fontSize='sm'
                      color='gray.500'
                    >
                      Reports
                    </StatLabel>
                    <Box className='dashboard-stat-number'>
                      <StatNumber fontSize='1.5rem'>50</StatNumber>
                    </Box>
                  </Box>
                  <StatHelpText
                    color='green.500'
                    marginTop='0.4rem'
                    fontSize='1.05rem'
                  >
                    <StatArrow type='increase' /> 2.45%
                  </StatHelpText>
                </Box>
              </Stat>
            </GridItem>

            <GridItem
              className='dashboard-stat-card'
              bg='white'
              width='22vw'
              borderRadius='12px'
              boxShadow='md'
              p={4}
            >
              <Stat>
                <Box
                  padding='.5rem'
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Box className='dashboard-icon'>
                    <Icon
                      as={IoWarningOutline}
                      w={6}
                      h={6}
                      color='black'
                    />
                  </Box>
                  <Box
                    className='dashboard-stat-info'
                    textAlign='center'
                  >
                    <StatLabel
                      fontSize='sm'
                      color='gray.500'
                    >
                      Threats
                    </StatLabel>
                    <Box className='dashboard-stat-number'>
                      <StatNumber fontSize='1.5rem'>2</StatNumber>
                    </Box>
                  </Box>
                  <StatHelpText
                    color='green.500'
                    marginTop='0.4rem'
                    fontSize='1.05rem'
                  >
                    <StatArrow type='increase' /> 2.45%
                  </StatHelpText>
                </Box>
              </Stat>
            </GridItem>

            <GridItem
              className='dashboard-stat-card'
              bg='white'
              width='22vw'
              borderRadius='12px'
              boxShadow='md'
              p={4}
            >
              <Stat>
                <Box
                  padding='.5rem'
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Box className='dashboard-icon'>
                    <Icon
                      as={GrDocumentPerformance}
                      w={6}
                      h={6}
                      color='black'
                    />
                  </Box>
                  <Box
                    className='dashboard-stat-info'
                    textAlign='center'
                  >
                    <StatLabel
                      fontSize='sm'
                      color='gray.500'
                    >
                      Performance
                    </StatLabel>
                    <Box className='dashboard-stat-number'>
                      <StatNumber fontSize='1.5rem'>70%</StatNumber>
                    </Box>
                  </Box>
                  <StatHelpText
                    color='green.500'
                    marginTop='0.4rem'
                    fontSize='1.05rem'
                  >
                    <StatArrow type='increase' /> 2.45%
                  </StatHelpText>
                </Box>
              </Stat>
            </GridItem>

            <GridItem
              className='dashboard-stat-card'
              bg='white'
              width='22vw'
              borderRadius='12px'
              boxShadow='md'
              p={4}
            >
              <Stat>
                <Box
                  padding='.5rem'
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Box className='dashboard-icon'>
                    <Icon
                      as={MdOutlinePendingActions}
                      w={6}
                      h={6}
                      color='black'
                    />
                  </Box>
                  <Box
                    className='dashboard-stat-info'
                    textAlign='center'
                  >
                    <StatLabel
                      fontSize='sm'
                      color='gray.500'
                    >
                      Patches Pending
                    </StatLabel>
                    <Box className='dashboard-stat-number'>
                      <StatNumber fontSize='1.5rem'>35</StatNumber>
                    </Box>
                  </Box>
                  <StatHelpText
                    color='green.500'
                    marginTop='0.4rem'
                    fontSize='1.05rem'
                  >
                    <StatArrow type='increase' /> 2.45%
                  </StatHelpText>
                </Box>
              </Stat>
            </GridItem>
          </Grid>
        </div>

        {/* Line Chart Grid Item */}
        <Grid
          templateColumns='repeat(3, 1fr)'
          gap={5}
          p='1rem'
          pt='2rem'
        >
          <GridItem
            width='35vw'
            height='45vh'
            bg='white'
            p={6}
            boxShadow='md'
            borderRadius='12px'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Box
              display='flex'
              justifyContent='space-between'
              width='100%'
              mb={4}
            >
              <Stat>
                <StatNumber fontSize='2xl'>$37.5K</StatNumber>
                <StatLabel color='gray.500'>Total Spent</StatLabel>
                <StatHelpText color='green.500'>
                  <StatArrow type='increase' /> 2.45%
                </StatHelpText>
              </Stat>
            </Box>

            <ResponsiveContainer
              width='100%'
              height='100%'
            >
              <LineChart
                width={500}
                height={300}
                data={data}
              >
                <XAxis dataKey='name' />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='revenue'
                  stroke='#7f5cff'
                  strokeWidth={4}
                  dot={{ r: 6 }}
                  activeDot={{ r: 8 }}
                />
                <Line
                  type='monotone'
                  dataKey='profit'
                  stroke='#76e0ff'
                  strokeWidth={4}
                  dot={{ r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </GridItem>
          <GridItem
            width='20vw'
            height='45vh'
            bg='white'
            p={5}
            boxShadow='md'
            borderRadius='12px'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Box
              display='flex'
              justifyContent='space-between'
              width='100%'
              mb={4}
            >
              <Stat>
                <StatLabel
                  fontSize='lg'
                  fontWeight='bold'
                >
                  Your Pie Chart
                </StatLabel>

                <StatLabel
                  color='gray.500'
                  fontSize='sm'
                  cursor='pointer'
                >
                  Monthly ▼
                </StatLabel>
              </Stat>
            </Box>

            <ResponsiveContainer
              width='90%'
              height='60%'
            >
              <PieChart>
                <Tooltip content={<CustomPieTooltip />} />
                <Pie
                  data={pieData}
                  dataKey='value'
                  nameKey='name'
                  cx='50%'
                  cy='50%'
                  outerRadius='70%'
                  fill='#7f5cff'
                  stroke='white'
                  strokeWidth={2}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            <Box
              display='flex'
              justifyContent='space-around'
              width='100%'
              mt={4}
            >
              <Box textAlign='center'>
                <Box
                  display='flex'
                  alignItems='center'
                >
                  <span
                    className='dot'
                    style={{ backgroundColor: '#7f5cff' }}
                  ></span>
                  <Stat>
                    <StatLabel
                      fontSize='sm'
                      ml={1}
                    >
                      Your Files
                    </StatLabel>
                  </Stat>
                </Box>
                <Stat>
                  <StatNumber fontSize='lg'>63%</StatNumber>
                </Stat>
              </Box>
              <Box textAlign='center'>
                <Box
                  display='flex'
                  alignItems='center'
                >
                  <span
                    className='dot'
                    style={{ backgroundColor: '#76e0ff' }}
                  ></span>
                  <Stat>
                    <StatLabel
                      fontSize='sm'
                      ml={1}
                    >
                      System
                    </StatLabel>
                  </Stat>
                </Box>
                <Stat>
                  <StatNumber fontSize='lg'>25%</StatNumber>
                </Stat>
              </Box>
            </Box>
          </GridItem>
          <GridItem
            width={'19vw'}
            height='100%'
            bg='white'
            p={6}
            marginLeft={-1.5}
            // paddingLeft={}
            boxShadow='md'
            borderRadius='12px'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Box
              display='flex'
              justifyContent='space-between'
              width='100%'
              // mb={4}
            >
              <Stat>
                <StatLabel color='gray.500'>Daily Traffic</StatLabel>
                <StatNumber fontSize='2xl'>2.579 Visitors</StatNumber>
                <StatHelpText color='green.500'>
                  <StatArrow type='increase' /> + 2.45%
                </StatHelpText>
              </Stat>
            </Box>

            <ResponsiveContainer
              width='100%'
              height='100%'
            >
              <BarChart data={barData}>
                <XAxis
                  dataKey='time'
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  hide
                  domain={[0, 'dataMax + 100']}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltipBar />} />
                <Bar
                  dataKey='visitors'
                  fill='#7f5cff'
                  radius={[10, 10, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </GridItem>
        </Grid>
      </div>
    </div>
  )
}

export default Dashboard
