import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ToastContainer theme='dark'
    />
    <App />
    </BrowserRouter>
   
  </StrictMode>,
)
