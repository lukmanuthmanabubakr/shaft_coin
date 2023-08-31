import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../../Asset/logo.png'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShowOnLogOut } from '../../Register/Component/Protect/HiddenLink'


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)


  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }


    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

 
  const isMobileView = () => window.innerWidth <= (320);

 
  return (
   <>
     <nav id='navbar' className={scrolled ? 'scrolled': ""}>
        <div className='brandName' onClick={goHome}>
        <NavLink to='/' > <img src={Logo} alt='bird' />
        <p>Shaft<span>Coin</span></p></NavLink>
        </div>
        
       

       <ShowOnLogOut>
       {/* <div className='getStarted'>
            <NavLink to='/login' className='get-start'>Login/SignUp</NavLink>
        </div> */}

       <div className='getStarted'>
       {isMobileView() ? (
              <NavLink to='/login' className='get-start'>
                Login
              </NavLink>
            ) : (
              <NavLink to='/login' className='get-start'>
              Login/SignUp
              </NavLink>
            )}
       </div>
       </ShowOnLogOut>

       
    </nav>
   </>
  )
}

export default Navbar
