import React from 'react'
import ReactDOM from 'react-dom'
import PurpleCoffee from './App'
import {ChakraProvider} from '@chakra-ui/react'
import {theme} from './styles/theme'


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>

      <ChakraProvider  theme={theme}>
      <PurpleCoffee />
      </ChakraProvider>
    </ChakraProvider>

    
  </React.StrictMode>,
  document.getElementById('root')
)
