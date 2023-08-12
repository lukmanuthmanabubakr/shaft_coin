import React from 'react'
import { useDispatch } from 'react-redux';
import { RESET, sendVerificationEmail } from '../../Redux/Features/Auth/authSlice';
import "./Notification.css"

const Notification = () => {
    const dispatch = useDispatch();
    const sendVerEmail = async () => {
        await dispatch(sendVerificationEmail())
        await dispatch(RESET())
    }



  return (
    <div style={{color: "white"}} className='notification_pop'>
        <p>
            <b>Message:</b> &nbsp;
        </p>
        <p className='very'>
            To verify your account , check your email for verification link.
            &nbsp;
        </p>
        <p style={{cursor: "pointer"}} onClick={sendVerEmail}>
            <b className='link'>
                Resend Link
            </b>
        </p>
    </div>
  )
}

export default Notification