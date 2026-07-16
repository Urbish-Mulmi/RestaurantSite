import React from 'react'
import {Route, Routes} from 'react-router';

import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Notfound from './pages/public/Notfound';
import Home from './pages/public/Home';

import MenuDetails from './pages/public/MenuDetails';
import Menu from './pages/public/Menu';
import Cart from './pages/cart/Cart';
import Payment from './pages/cart/payment/Payment';
import Success from './pages/cart/payment/Success';
import Dashboard from './admin/Dashboard';
import UserManagement from './admin/UserManagement';
import OrderManagement from './admin/OrderManagement';
import FoodManagement from './admin/FoodManagement';
import AddFood from './admin/AddFood';
import EditFood from './admin/EditFood';
import { useSelector } from 'react-redux';

import Service from './pages/public/Service';
import About from './pages/public/About';

import ScrollToTop from './components/ScrollToTop';
// layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

const AppRoutes = () => {
  const { user, isAuthenticated } = useSelector(state => state.auth);

  return (
  <>
  <ScrollToTop />  
    
    <Routes>
      {/* Main site: Navbar + Footer */}
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/:id' element={<MenuDetails />} />
        <Route path='/Service' element={<Service/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/success' element={<Success />} />
        <Route path='*' element={<Notfound />} />
      </Route>

      {/* Auth pages: no Navbar/Footer */}
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>

      {/* Admin: token-validated, own internal layout */}
      {user?.role === "admin" && isAuthenticated && (
        <Route path='/admin' element={<Dashboard />}>
          <Route path='user-management' element={<UserManagement />} />
          <Route path='order-management' element={<OrderManagement />} />
          <Route path='food-management' element={<FoodManagement />} />
          <Route path='add-food' element={<AddFood />} />
          <Route path='edit-food' element={<EditFood />} />
        </Route>
      )}
    </Routes>
  </>  
  )
}

export default AppRoutes