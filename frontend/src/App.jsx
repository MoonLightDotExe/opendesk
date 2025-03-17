import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Header from './shared/Header/Header'
import MultiVideo from './components/MultiVideo/MultiVideo'

import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/multi-video'
          Component={MultiVideo}
        />
      </Routes>
    </Router>
  )
}

export default App
