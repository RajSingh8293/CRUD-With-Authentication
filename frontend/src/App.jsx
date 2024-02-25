import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Routers from './components/Routers/Routers'
import Header from './components/Header/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer />
      <Routers />
    </BrowserRouter>
  )
}

export default App
