import React, { useEffect, useContext, useState } from 'react'

import { FaBell, FaUserCircle } from 'react-icons/fa'
import { IoInformationCircle } from 'react-icons/io5'
import { FaCheck } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import axios from 'axios'
import {
  XAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  YAxis,
} from 'recharts'
import {
  Select,
  Input,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Grid,
  GridItem,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  HStack,
  VStack,
  Circle,
} from '@chakra-ui/react'

import SidebarCustom from '../../shared/Sidebar/SidebarCustom'

import mainContext from '../../context/main'

import './Report.css'

const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: payload[0].payload.color,
          color: '#000',
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
            {payload[0].value} Occurences
          </StatNumber>
        </Stat>
      </Box>
    )
  }

  return null
}

function Report() {
  const {
    getEmployeeList,
    listData,
    generateDayReport,
    dayReport,
    physicalReport,
  } = useContext(mainContext)

  const [date, setDate] = useState()
  const [name, setName] = useState()
  const [pieData, setPieData] = useState([
    {
      name: 'Productive',
      value: 0,
      color: '#7f5cff',
    },
    {
      name: 'Unproductive',
      value: 0,
      color: '#76e0ff',
    },
    {
      name: 'Unknown',
      value: 0,
      color: '#e8f1ff',
    },
  ])

  const [barData, setBarData] = useState([
    { field: '', occurences: 0 },
    { field: '', occurences: 0 },
    { field: '', occurences: 0 },
    { field: '', occurences: 0 },
    { field: '', occurences: 0 },
  ])

  useEffect(() => {
    getEmployeeList()
  }, [])

  useEffect(() => {
    if (dayReport && dayReport.stats) {
      const updatedPieData = [
        {
          name: 'Productive',
          value: dayReport.stats.performance,
          color: '#7f5cff',
        },
        {
          name: 'Unproductive',
          value: dayReport.stats.unproductivity,
          color: '#76e0ff',
        },
        {
          name: 'Unknown',
          value: dayReport.stats.unknown,
          color: '#e8f1ff',
        },
      ]
      const updatedBarData = dayReport.stats.topFive
      setPieData(updatedPieData)
      setBarData(updatedBarData)
    }
  }, [dayReport])

  const handleDateChange = (e) => {
    setDate(e.currentTarget.value)
  }

  const handleName = (e) => {
    const selectedName = e.target.options[e.target.selectedIndex].text

    setName(selectedName)
  }

  const handleClick = async () => {
    try {
      const inputDate = date
      const [year, month, day] = inputDate.split('-')
      const formattedDate = `${day}-${month}-${year}`
      const send_data = {
        personName: name,
        name,
        date: formattedDate,
      }
      console.log(send_data)
      const data = await generateDayReport(send_data)
      toast.success("User's Day report generated successfully!", {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      console.log(' DATA: ' + data)
    } catch (err) {
      toast.error("User's Working Day not found", {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      console.log(err)
    }
  }

  const handleUnknown = async (service, type) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/addService', {
        name: service,
        type,
      })
      console.log(response)
    } catch (err) {
      console.log(err)
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
            onChange={handleName}
          >
            {listData &&
              listData.map((e, index) => {
                return (
                  <option
                    key={index}
                    value={e.id}
                    name={e.employee_name}
                  >
                    {e.employee_name}
                  </option>
                )
              })}
          </Select>
          <Input
            className='report-container-input'
            placeholder='Date'
            type='Date'
            width='25rem'
            value={date}
            onChange={(e) => handleDateChange(e)}
          />
          <Button
            className='report-container-btn'
            width='15rem'
            backgroundColor='#61b9f7'
            borderRadius='10px'
            border='1px solid black'
            _hover={{ border: '2px solid black ', fontWeight: 'bold' }}
            onClick={handleClick}
          >
            View Report
          </Button>
        </div>
        {dayReport && (
          <div className='report-container-box'>
            <div className='report-container-box-heading'>{name}</div>
            <div className='report-cards'>
              <div className='report-container-card'>
                <div className='report-container-card-heading'>PRODUCTIVE</div>
                <div className='report-container-card-number'>
                  {dayReport.finalReportOccurences.totalPositive}
                </div>
              </div>
              <div className='report-container-card'>
                <div className='report-container-card-heading'>
                  UNPRODUCTIVE
                </div>
                <div className='report-container-card-number'>
                  {dayReport.finalReportOccurences.totalNegative}
                </div>
              </div>
              <div className='report-container-card'>
                <div className='report-container-card-heading'>UNKNOWN</div>
                <div className='report-container-card-number'>
                  {dayReport.finalReportOccurences.totalUnknown}
                </div>
              </div>
              <div className='report-container-card'>
                <div className='report-container-card-heading'>THREATS</div>
                <div className='report-container-card-number'>
                  {dayReport.finalReportOccurences.threatDetected}
                </div>
              </div>
              <div className='report-container-card'>
                <div className='report-container-card-heading'>TOTAL</div>
                <div className='report-container-card-number'>
                  {dayReport.finalReportOccurences.totalDayOccurences}
                </div>
              </div>
            </div>
            <Grid templateColumns='repeat(2, 1fr)'>
              <GridItem
                width='40vw'
                height='55vh'
                bg='white'
                p={5}
                boxShadow='md'
                borderRadius='12px'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                m={'2.5rem'}
              >
                <Box
                  display='flex'
                  justifyContent='space-between'
                  width='100%'
                  mb={4}
                >
                  <Stat>
                    <StatLabel
                      fontSize='1.6rem'
                      // fontWeight='bold'
                    >
                      Productivity Pie Chart
                    </StatLabel>

                    <StatLabel
                      color='gray.500'
                      fontSize='1rem'
                      cursor='pointer'
                      marginTop={1}
                    >
                      Monthly ▼
                    </StatLabel>
                  </Stat>
                </Box>

                <ResponsiveContainer
                  width='100%'
                  height='100%'
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
                  <Box
                    textAlign='center'
                    mb={4}
                  >
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
                          fontSize='1.3rem'
                          ml={1}
                          color='gray.700'
                        >
                          PRODUCTIVE
                        </StatLabel>
                      </Stat>
                    </Box>
                    <Stat>
                      <StatNumber fontSize='1.6rem'>
                        {pieData[0].value}%
                      </StatNumber>
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
                          fontSize='1.3rem'
                          ml={1}
                          color='gray.700'
                        >
                          UNPRODUCTIVE
                        </StatLabel>
                      </Stat>
                    </Box>
                    <Stat>
                      <StatNumber fontSize='1.6rem'>
                        {pieData[1].value}%
                      </StatNumber>
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
                          fontSize='1.3rem'
                          ml={1}
                          color='gray.700'
                        >
                          UNKNOWN
                        </StatLabel>
                      </Stat>
                    </Box>
                    <Stat>
                      <StatNumber fontSize='1.6rem'>
                        {pieData[2].value}%
                      </StatNumber>
                    </Stat>
                  </Box>
                </Box>
              </GridItem>
              <GridItem
                width={'30vw'}
                height='55vh'
                m={'2.5rem'}
                bg='white'
                p={7}
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
                    <StatLabel color='gray.500'>
                      Top 5 Services by Occurences
                    </StatLabel>
                    <StatNumber fontSize='2xl'>Services</StatNumber>
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
                      dataKey='field'
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
                      dataKey='occurences'
                      fill='#7f5cff'
                      radius={[10, 10, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </GridItem>
            </Grid>
            <div className='report-physical'>
              <Box
                p={4}
                bg='white'
                borderRadius='lg'
                boxShadow='md'
                overflowX='auto'
                m={'2.2rem'}
              >
                <Text
                  fontSize='xl'
                  fontWeight='bold'
                  mb={4}
                >
                  Movement Path
                </Text>
                <HStack
                  spacing={6}
                  align='center'
                >
                  {physicalReport &&
                    physicalReport.map((m, index) => (
                      <HStack
                        key={index}
                        spacing={8}
                        position='relative'
                      >
                        {/* Circle Indicator */}
                        <VStack
                          spacing={1}
                          align='center'
                        >
                          <Circle
                            size='12px'
                            bg='blue.500'
                          />
                          <Text
                            fontSize='xs'
                            color='gray.500'
                            whiteSpace='nowrap'
                          >
                            {m.timestamp}
                          </Text>
                        </VStack>

                        {/* Camera Box */}
                        <Box
                          px={4}
                          py={2}
                          borderRadius='md'
                          bg='gray.100'
                          boxShadow='sm'
                          whiteSpace='nowrap'
                        >
                          <Text fontWeight='medium'>{m.cameraSet}</Text>
                        </Box>

                        {/* Arrow, except after the last item */}
                        {index !== physicalReport.length - 1 && (
                          <Text
                            fontSize='xl'
                            color='gray.400'
                          >
                            →
                          </Text>
                        )}
                      </HStack>
                    ))}
                </HStack>
              </Box>
            </div>
          </div>
        )}
        <div className='report-container-bottom'>Unknown Services</div>
        <Grid
          width={'70vw'}
          templateColumns='repeat(3,1fr)'
        >
          {dayReport &&
            dayReport.finalReportServices.unknownServices.map((s) => {
              return (
                <div className='report-container-cards'>
                  <div className='report-container-card1'>{s}</div>
                  <div className='report-container-cardButtons'>
                    <button
                      className='report-btn report-yes'
                      onClick={() => handleUnknown(s, 0)}
                    >
                      <FaCheck size={25} />
                    </button>
                    <button
                      className='report-btn report-neutral'
                      onClick={() => handleUnknown(s, 3)}
                    >
                      N
                    </button>
                    <button
                      className='report-btn report-no'
                      onClick={() => handleUnknown(s, 1)}
                    >
                      <IoClose size={25} />
                    </button>
                  </div>
                </div>
              )
            })}
        </Grid>
      </div>
    </div>
  )
}

export default Report
