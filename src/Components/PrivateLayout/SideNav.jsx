import React from 'react'
import { FaCalendarAlt, FaCalendarCheck, FaHome, FaShoppingCart, FaStar, FaWallet } from 'react-icons/fa'
import { Link, Outlet } from 'react-router-dom'

const SideNav = () => {
  return (
    <div>
        <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      
      <li><Link> <FaHome></FaHome> User Home</Link></li>
      <li><Link> <FaCalendarAlt></FaCalendarAlt> Reservation</Link></li>
      <li><Link> <FaWallet></FaWallet> Payment History </Link></li>
      <li><Link to="/dashboard/mycart"> <FaShoppingCart></FaShoppingCart> My Cart</Link></li>
      <li><Link to="/dashboard"> <FaStar></FaStar> Add review</Link></li>
      <li><Link to="/dashboard"> <FaCalendarCheck></FaCalendarCheck> My Booking</Link></li>
    </ul>
    
  
  </div>
</div>
    </div>
  )
}

export default SideNav