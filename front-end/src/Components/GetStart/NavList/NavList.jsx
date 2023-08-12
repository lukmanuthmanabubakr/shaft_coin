import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavList.css"

const NavList = () => {
  return (
    <nav className='navList'>
        <ul>
            <li><NavLink to='/get-start/home'>Home</NavLink></li>
            <li><NavLink to='/get-start/wallet'>Wallet</NavLink></li>
            <li><NavLink to='/get-start/profile'>Profile</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavList