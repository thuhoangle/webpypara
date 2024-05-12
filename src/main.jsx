import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

// const blackColor = defineStyle({
//     background: '#0C1713',
//     color: 'white',
//     fontWeight: 'normal',
// })
//
// const buttonTheme = defineStyleConfig({
//     colorScheme: { blackColor }
// })

// const colors = {
//     blackColor: {
//         400:'#0C1713',
//     },
// }

const theme = extendTheme({
    colors: {
        dark: {
            500:'#0C1713',
        },
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
             <App />
            </ChakraProvider>
        </BrowserRouter>
  </React.StrictMode>
)
