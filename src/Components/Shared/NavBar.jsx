import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

    const listItem = <>
        <li><Link to="/"><a>Home</a></Link></li>
        <li><a>Contact Us</a></li>
        <li><a>Dashboard</a></li>
        <li><Link to="/ourmenu"><a>Our Menu</a></Link></li>
        <li><Link to="/ourshop"><a>Our Shop</a></Link></li>
    </>
    return (
        <div>
            <div className="navbar fixed z-10 opacity-30 bg-black py-4 max-w-screen-xl  text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {listItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">
                        <p>Bistro Boss <br />Restaurant</p>
                    </a>
                </div>
                {/* <div className="navbar-center hidden lg:flex">
    
  </div> */}
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        {listItem}
                    </ul>
                    <Link to="/login"><a className="btn btn-ghost">Log In</a></Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar