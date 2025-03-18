import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Header from './shared/Header/Header'
import MultiVideo from './components/MultiVideo/MultiVideo'
import VideoCapture from './components/VideoCapture/VideoCapture'

import './App.css'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  )
}

export default App
