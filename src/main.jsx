import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import {ChakraProvider, extendTheme} from '@chakra-ui/react'

const theme = extendTheme({

});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
             <App />
            </ChakraProvider>
        </BrowserRouter>
  </React.StrictMode>
)
