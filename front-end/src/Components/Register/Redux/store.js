import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/Features/Auth/authSlice"
import emailReducer from "../Redux/Email/EmailSlice"


const store = configureStore({
    reducer: {
        auth: authReducer,
        email: emailReducer,
    }
})

export default store