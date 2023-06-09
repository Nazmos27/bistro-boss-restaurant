import React from 'react'
import NavBar from '../Shared/NavBar'
import Footer from '../Shared/Footer'
import { Outlet, useLocation } from 'react-router-dom'

const Main = () => {
  const location = useLocation()
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
  return (
    <div>

        {noHeaderFooter || <NavBar></NavBar>}
        <Outlet></Outlet>
        {noHeaderFooter || <Footer></Footer>}
    </div>
  )
}

export default Main