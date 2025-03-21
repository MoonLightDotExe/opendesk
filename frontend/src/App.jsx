import { useState, useContext, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

import MultiVideo from './components/MultiVideo/MultiVideo'
import VideoCapture from './components/VideoCapture/VideoCapture'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import Dashboard from './components/Dashboard/Dashboard'
import Employee from './components/Employee/Employee.jsx'
import EmployeeList from './components/EmployeeList/EmployeeList.jsx'

import mainContext from './context/main.jsx'
import Profile from './components/Profile/Profile.jsx'
import Report from './components/Report/Report.jsx'

import './App.css'

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(mainContext)

  const navigate = useNavigate()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      const decodedToken = jwtDecode(token)
      const currentTime = Date.now() / 1000
      if (decodedToken.exp < currentTime) {
        setIsLoggedIn(false)
        console.log('notoken')
      } else {
        setIsLoggedIn(true)
        console.log('decodedToken')
        console.log(decodedToken.exp)
        console.log(currentTime)
        // navigate('/dashboard')
      }
    } else {
      console.log('Error Decoding token')
    }
  }, [])

  return (
    <Routes>
      {!isLoggedIn && (
        <>
          <Route
            path='/sign-up'
            Component={Register}
          />
          <Route
            path='/login'
            Component={Login}
          />
          <Route
            path='/*'
            Component={Register}
          />
        </>
      )}
      {isLoggedIn && (
        <>
          <Route
            path='/multi-video'
            Component={MultiVideo}
          />
          <Route
            path='/video-capture'
            Component={VideoCapture}
          />
          <Route
            path='/dashboard'
            Component={Dashboard}
          />
          <Route
            path='/employee'
            Component={Employee}
          />
          <Route
            path='/employee-list'
            Component={EmployeeList}
          />
          <Route
            path='/profile'
            Component={Profile}
          />
          <Route
            path='/report'
            Component={Report}
          />
        </>
      )}
    </Routes>
  )
}

export default App
