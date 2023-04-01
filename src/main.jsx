import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/Authentication'
import { OrdersProvider } from './context/Orders'
import { ThemeProvider } from '@material-tailwind/react'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <OrdersProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </OrdersProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
