import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavList.css"
import {AiFillHome} from "react-icons/ai"
import {FaWallet} from "react-icons/fa"
import {BsPersonCircle} from "react-icons/bs"
import {BiSolidMessage} from "react-icons/bi"

const NavList = () => {
  return (
    <nav className='navList'>
        <ul>
            <li><NavLink to='/get-start/home' activeClassName='active'> <span className='icon'><AiFillHome size={25}/></span> <span className='home'>Home</span></NavLink></li>
            <li><NavLink to='/get-start/home/add-money' activeClassName='active'> <span className='icon'><FaWallet size={25}/></span> <span className='home'>Add Money</span></NavLink></li>
            <li><NavLink to='/get-start/profile' activeClassName='active'> <span className='icon'><BsPersonCircle size={25}/></span> <span className='home'>Profile</span></NavLink></li>
        </ul>

        <p className='contact'><NavLink to="/contact-us" activeClassName='active'><span className='icon'><BiSolidMessage/></span><span className='get'> Get Help</span></NavLink></p>
    </nav>
  )
}

export default NavList