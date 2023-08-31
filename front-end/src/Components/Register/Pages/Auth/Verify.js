import React from 'react'
import { useDispatch } from 'react-redux';
import { RESET, verifyUser } from '../../Redux/Features/Auth/authSlice';
import { useParams } from 'react-router-dom';
import "./Verify.css"


const Verify = () => {
  const dispatch = useDispatch();
  const {verificationToken} = useParams()
  console.log(verificationToken);

  
  const verifyAccount = async () => {
    await dispatch(verifyUser(verificationToken))
    await dispatch(RESET())
  }
  return (
    <section className='verify_us'>
        <div className='users'  >
            <p className='acct'>Account Verification</p>
            <p className='acct_bellow'>To verify your account , click the button below</p>
            <button className='btn-primary type1' onClick={verifyAccount}>
                
            </button>
        </div>
    </section>
  )
}

export default Verify