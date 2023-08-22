import React from 'react'
import { useDispatch } from 'react-redux';
import { RESET, verifyUser } from '../../Redux/Features/Auth/authSlice';
import { useParams } from 'react-router-dom';


const Verify = () => {
  const dispatch = useDispatch();
  const {verificationToken} = useParams()
  console.log(verificationToken);

  
  const verifyAccount = async () => {
    await dispatch(verifyUser(verificationToken))
    await dispatch(RESET())
  }
  return (
    <section>
        <div>
            <h2>Account Verification</h2>
            <p>To verify your account , click the button below</p>
            <button className='btn-primary' onClick={verifyAccount}>
                Verify Account
            </button>
        </div>
    </section>
  )
}

export default Verify