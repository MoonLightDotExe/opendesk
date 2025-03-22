import React, { useEffect, useContext, useState } from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Input,
  Button,
  Select,
  Grid,
} from '@chakra-ui/react'
import { FaBell, FaUserCircle } from 'react-icons/fa'
import { IoInformationCircle } from 'react-icons/io5'
import { FaCheck } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
import { ToastContainer, toast, Bounce } from 'react-toastify'

import SidebarCustom from '../../shared/Sidebar/SidebarCustom'

import mainContext from '../../context/main'

import './Report.css'

function Report() {
  const { getEmployeeList, listData, generateDayReport, dayReport } =
    useContext(mainContext)

  const [date, setDate] = useState()
  const [name, setName] = useState()

  useEffect(() => {
    getEmployeeList()
  }, [])

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
        <div className='report-container-box'></div>
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
                    <button className='report-btn report-yes'>
                      <FaCheck size={25} />
                    </button>
                    <button className='report-btn report-neutral'>N</button>
                    <button className='report-btn report-no'>
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
