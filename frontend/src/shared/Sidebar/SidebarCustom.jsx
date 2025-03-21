import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { FaBars, FaBook, FaCalendarAlt, FaUsers } from 'react-icons/fa'
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
        <Link to='/employee'>
          <MenuItem
            icon={<FaUsers />}
            id='employees'
            active={isActiveSidebar === 'employees'}
            onClick={(e) => handleClick(e)}
          >
            Employees
          </MenuItem>
        </Link>
        <MenuItem icon={<FaCalendarAlt />}>Monitoring</MenuItem>
        <MenuItem icon={<FaCalendarAlt />}>Security Feed</MenuItem>
        <MenuItem
          icon={<FaCalendarAlt />}
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
