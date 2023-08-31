import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./DropDown.css"
import { useDispatch } from 'react-redux'
import { RESET, logOut } from '../Components/Register/Redux/Features/Auth/authSlice'

const DropDownMenu = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logoutUser = async () => {
    dispatch(RESET())
    await dispatch(logOut())
    navigate("/login")
  }

  return (
    <div className='drop_down'>
        <ul className='drop_down_list'>
            <li> <NavLink to="/get-start/profile">Profile</NavLink></li>
            <li onClick={logoutUser}> <NavLink>Logout</NavLink></li>
        </ul>
    </div>
  )
}

export default DropDownMenu