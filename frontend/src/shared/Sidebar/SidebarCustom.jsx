import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import axios from 'axios'
import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaUsers,
  FaAddressBook,
  FaVideo,
  FaClipboardCheck,
  FaSignOutAlt,
} from 'react-icons/fa'
import { HiClipboardDocumentCheck } from 'react-icons/hi2'
import { TbReportSearch } from 'react-icons/tb'
import { MdModelTraining } from 'react-icons/md'

import { ToastContainer, toast, Bounce } from 'react-toastify'

import mainContext from '../../context/main'

import './SidebarCustom.css'

function SidebarCustom() {
  const { isActiveSidebar, setIsActiveSidebar, handleSignOut } =
    useContext(mainContext)
  const [collapsed, setCollapsed] = useState(false)

  const navigate = useNavigate()

  const signOutHandler = async () => {
    try {
      const response = await handleSignOut()
      toast.success('Logging out....', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
      setTimeout(() => {
        navigate('/login')
        window.location.reload()
      }, 3000)
    } catch (err) {
      return err
    }
  }

  const handleClick = (e) => {
    setIsActiveSidebar(e.currentTarget.id)
  }

  const handleRecalibrate = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5001/retrain-model')
      toast.success(
        'Model Retrained Successfully! Applying to all cameras in a few seconds',
        {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        }
      )
    } catch (err) {
      console.log(err)
    }
  }

  return (
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
        <Link to='/dashboard'>
          <MenuItem
            icon={<FaBook />}
            id='dashboard'
            onClick={(e) => handleClick(e)}
            active={isActiveSidebar === 'dashboard'}
          >
            Dashboard
          </MenuItem>
        </Link>
        <Link to='/report'>
          <MenuItem
            icon={<HiClipboardDocumentCheck />}
            id='report'
            onClick={(e) => handleClick(e)}
            active={isActiveSidebar === 'report'}
          >
            Report
          </MenuItem>
        </Link>
        <Link to='/employee-list'>
          <MenuItem
            icon={<FaAddressBook />}
            id='employee-list'
            onClick={(e) => handleClick(e)}
            active={isActiveSidebar === 'employee-list'}
          >
            Employee-list
          </MenuItem>
        </Link>
        <Link to='/employees'>
          <MenuItem
            icon={<FaUsers />}
            id='employees'
            active={isActiveSidebar === 'employees'}
            onClick={(e) => handleClick(e)}
          >
            Employees
          </MenuItem>
        </Link>
        <MenuItem
          icon={<FaClipboardCheck />}
          id='onboarding'
          active={isActiveSidebar === 'onboarding'}
          onClick={(e) => handleClick(e)}
        >
          Onboarding
        </MenuItem>
        <MenuItem icon={<FaVideo />}>Video Capture</MenuItem>
        <MenuItem
          icon={<MdModelTraining />}
          onClick={handleRecalibrate}
        >
          Recalibrate
        </MenuItem>
        <MenuItem
          icon={<FaSignOutAlt />}
          onClick={signOutHandler}
        >
          Sign Out
        </MenuItem>
      </Menu>
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
    </Sidebar>
  )
}

export default SidebarCustom
