import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar'
import { FaBars, FaBook, FaCalendarAlt, FaUsers } from 'react-icons/fa'

import mainContext from '../../context/main'

import './SidebarCustom.css'

function SidebarCustom() {
  const { isActiveSidebar, setIsActiveSidebar } = useContext(mainContext)
  const [collapsed, setCollapsed] = useState(false)
  // const [isActive, setActive] = useState('dashboard')

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
      </Menu>
    </Sidebar>
  )
}

export default SidebarCustom
