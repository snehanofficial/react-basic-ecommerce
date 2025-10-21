import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Register from '../pages/auth/Register'
import Login from '../pages/auth/Login'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Orders from '../pages/Orders'
import Logout from '../pages/auth/Logout'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product-details/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/logout' element={<Logout />} />
      </Route>
    </Routes>
  )
}
