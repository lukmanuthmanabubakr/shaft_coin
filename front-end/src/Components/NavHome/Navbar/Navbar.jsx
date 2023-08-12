import React from 'react'
import { useSelector } from "react-redux";
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../../Asset/logo.png'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShowOnLogOut } from '../../Register/Component/Protect/HiddenLink'


const Navbar = () => {
  // const [navbar, setNavbar] = useState(false)
  // const changeBg = () => {
  //   if(window.scrollY >= 80){
  //     setNavbar(true)
  //   }else{
    // // ? 'navbar active' : 'navbar'
  //     setNavbar(false)
  // //  console.log(window.scrollY);
  // }
  // }
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }



  return (
   <>
     <nav className='navbar'>
        <div className='brandName' onClick={goHome}>
        <NavLink to='/' > <img src={Logo} alt='bird' />
        <p>Shaft<span>Coin</span></p></NavLink>
        </div>
        
       

       <ShowOnLogOut>
       <div className='getStarted'>
            <NavLink to='/login' className='get-start'>Login/SignUp</NavLink>
        </div>
       </ShowOnLogOut>

       
    </nav>
   </>
  )
}

export default Navbar
