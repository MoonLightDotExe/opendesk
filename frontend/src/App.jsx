import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Header from './shared/Header/Header'
import MultiVideo from './components/MultiVideo/MultiVideo'
import VideoCapture from './components/VideoCapture/VideoCapture'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import Dashboard from './components/Dashboard/Dashboard'
import Employee from './components/Employee/Employee.jsx'
import Profile from './components/Profile/Profile.jsx'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/sign-up'
          Component={Register}
        />
        <Route
          path='/login'
          Component={Login}
        />
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
          path='/profile'
          Component={Profile}
        />
      </Routes>
    </Router>
  )
}

export default App
