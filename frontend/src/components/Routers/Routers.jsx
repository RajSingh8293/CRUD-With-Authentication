import React from 'react'
import Home from '../pages/Home'
import { Route, Routes } from 'react-router-dom'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Update from '../pages/Update'
import UserDetails from '../pages/UserDetails'
import Profile from '../pages/Profile'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/userdetails/:id" element={<UserDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default Routers
