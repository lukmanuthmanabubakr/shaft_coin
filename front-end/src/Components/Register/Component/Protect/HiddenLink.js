import React from "react"
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../Redux/Features/Auth/authSlice"



//show on logged in
export const ShowOnLogIn = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    if(isLoggedIn){
        return <>{children}</>
    }
    return null
}

//show-ON-logged-out
export const ShowOnLogOut = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    if(!isLoggedIn){
        return <>{children}</>
    }
    return null
}
//show-ON-logged-out
export const AdminAutoLink = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const userRole = useSelector(selectUser)

    if(isLoggedIn && (userRole === "admin" || userRole === "author")){
        return <>{children}</>
    }
    return null
}


