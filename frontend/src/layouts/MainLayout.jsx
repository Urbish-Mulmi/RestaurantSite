import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
 
const MainLayout = () => {
  return (
    <div>
      <Navbar />
      {/* offsets content below the fixed navbar */}
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
 
export default MainLayout
 