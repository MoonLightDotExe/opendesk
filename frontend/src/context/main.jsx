import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

const mainContext = createContext()

export const MainProvider = ({ children }) => {
  const [isActiveSidebar, setIsActiveSidebar] = useState('dashboard')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [listData, setListData] = useState([])

  const loginUser = async (send_data) => {
    try {
      const data = await axios.post(
        'http://127.0.0.1:5000/loginManager',
        send_data
      )
      console.log(data.data)
      console.log(data.data.data.id)
      console.log(data.data.data.token)
      if (data.data.success) {
        localStorage.setItem('user_id', data.data.data.id)
        localStorage.setItem('token', data.data.data.token)
        localStorage.setItem('username', data.data.data.name)
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
      localStorage.removeItem('username')
    } catch (err) {
      console.log(err)
      return err
    }
  }

  const getEmployeeList = async () => {
    try {
      const manager_id = localStorage.getItem('user_id')

      const response = await axios.post(
        'http://127.0.0.1:5000/getManagerEmployees',
        { manager_id: manager_id }
      )
      let listDataArray = []

      response.data.data.map((e) => {
        let employee = {
          id: e.employee_id,
          employee_name: e.name,
          projects: e.projects.length,
          manager_name: localStorage.getItem('username'),
        }
        listDataArray.push(employee)
      })

      setListData(listDataArray)
    } catch (err) {
      console.log(err)
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
        getEmployeeList,
        listData,
      }}
    >
      {children}
    </mainContext.Provider>
  )
}

export default mainContext
