import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import { MainProvider } from './context/main'

import './index.css'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <MainProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </MainProvider>
    </Router>
  </React.StrictMode>
)
