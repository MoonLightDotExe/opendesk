import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Sidebar from './components/Sidebar/Sidebar'

import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import WebcamCapture from './pages/WebcamCapture/WebcamCapture'
import Dashboard from './pages/Dashboard'
import AddEmployee from './pages/AddEmployee'
import VideoPage from './pages/VideoPage'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'

function App() {
  return (
    <ChakraProvider>
      <div className='app-cover'>
        <div className='side-bar'>
          <Sidebar />
        </div>
        <div className='App'>
          <Router>
            <Routes>
              <Route
                path='/register'
                Component={Register}
              />
              <Route
                path='/login'
                Component={Login}
              />
              <Route
                path='/webcam'
                Component={WebcamCapture}
              />
              <Route
                path='/dashboard'
                Component={Dashboard}
              />
              <Route
                path='/add_employee'
                Component={AddEmployee}
              />
              <Route
                path='/videoPage'
                Component={VideoPage}
              />
              <Route
                path='/admin-dashboard'
                Component={AdminDashboard}
              />
            </Routes>
          </Router>
        </div>
      </div>
    </ChakraProvider>
  )
}

export default App
