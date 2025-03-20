import react, { createContext, useState, useEffect } from 'react'

const mainContext = createContext()

export const MainProvider = ({ children }) => {
  const [isActiveSidebar, setIsActiveSidebar] = useState('dashboard')

  return (
    <mainContext.Provider
      value={{
        isActiveSidebar,
        setIsActiveSidebar,
      }}
    >
      {children}
    </mainContext.Provider>
  )
}

export default mainContext
