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
            <li><NavLink to='/get-start/home'> <span><AiFillHome size={25}/></span> Home</NavLink></li>
            <li><NavLink to='/get-start/wallet'> <span><FaWallet size={25}/></span> Wallet</NavLink></li>
            <li><NavLink to='/get-start/profile'> <span><BsPersonCircle size={25}/></span> Profile</NavLink></li>
        </ul>

        <p className='contact'><NavLink to="/contact-us"><span><BiSolidMessage/></span> Get Help</NavLink></p>
    </nav>
  )
}

export default NavList