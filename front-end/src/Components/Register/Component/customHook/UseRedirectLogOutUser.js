import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../../Redux/Features/Auth/AuthService';
import { toast } from 'react-toastify';


const UseRedirectLogOutUser = (path) => {
    const navigate = useNavigate();

    useEffect(() => {

        let isLoggedIn;
        const redirectLoggedOutUser = async () => {
            try {
                isLoggedIn = await AuthService.getLoginStatus()
            } catch (error) {
                console.log(error.message);
            }

            if(!isLoggedIn) {
                toast.info("Session Expired, please log in to continue")
                navigate(path)
                return;
            }
        };
        redirectLoggedOutUser()

    }, [path, navigate])
  
}

export default UseRedirectLogOutUser