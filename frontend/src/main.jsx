import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

import App from './App'
import { MainProvider } from './context/main'

import './index.css'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <MainProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </MainProvider>
  </React.StrictMode>
)
