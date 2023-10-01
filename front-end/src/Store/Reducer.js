// import React from 'react'
// import { initialState } from '../Components/GetStart/CustomerUser/CustomerUser'

// const Reducer = (state = initialState, action) => {
//     if (action.type === "CREATE_ACCOUNT") {
//         return {...state, user: action.payload}
//     }else if(action.type === "SET_EMAIL") {
//         return {...state, user:{...state.user, email: action.payload}}
//     }else if(action.type === "SET_FIRST_NAME") {
//         return {...state, user:{...state.user, first_name: action.payload}}
//     }else if(action.type === "SET_LAST_NAME") {
//         return {...state, user:{...state.user, last_name: action.payload}}
//     }else if(action.type === "COUNTRY") {
//         return {...state, user:{...state.user, country: action.payload}}
//     }else if(action.type === "SET_ID") {
//         return {...state, user:{...state.user, id: action.payload}}
//     }else if(action.type === "SET_CREATEDAT") {
//         return {...state, user:{...state.user, created_at: action.payload}}
//     }
//      else {
//         return state
//     }
// }

// export default Reducer