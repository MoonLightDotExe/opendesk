import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const mainContext = createContext()

export const MainProvider = ({ children }) => {
  const [isActiveSidebar, setIsActiveSidebar] = useState('dashboard')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginUser = async (send_data) => {
    try {
      const data = await axios.post(
        'http://127.0.0.1:5000/loginEmployee',
        send_data
      )
      console.log(data.data)
      console.log(data.data.data.id)
      console.log(data.data.data.token)
      if (data.data.success) {
        localStorage.setItem('user_id', data.data.data.id)
        localStorage.setItem('token', data.data.data.token)
      }
      return data.data
    } catch (err) {
      console.log(err)
    }
  }

  const handleSignOut = async () => {
    try {
      localStorage.removeItem('user_id')
      localStorage.removeItem('token')
    } catch (err) {
      console.log(err)
      return err
    }
  }

  return (
    <mainContext.Provider
      value={{
        isActiveSidebar,
        setIsActiveSidebar,
        loginUser,
        isLoggedIn,
        setIsLoggedIn,
        handleSignOut,
      }}
    >
      {children}
    </mainContext.Provider>
  )
}

export default mainContext
