import react, { createContext, useState, useEffect } from 'react'

const mainContext = createContext()

export const MainProvider = ({ children }) => {
  return <mainContext.Provider>{children}</mainContext.Provider>
}

export default mainContext
