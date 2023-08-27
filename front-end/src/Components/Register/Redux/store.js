import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/Features/Auth/authSlice"
import emailReducer from "../Redux/Email/EmailSlice"
import filterReducer from "./Features/FilterSlice";


const store = configureStore({
    reducer: {
        auth: authReducer,
        email: emailReducer,
        filter: filterReducer,
    }
})

export default store