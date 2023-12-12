import {createSlice} from "@reduxjs/toolkit"
const authSlice=createSlice({
    name:"auth",
    initialState:{
        user:localStorage.getItem("userInfo") ?
        JSON.parse(localStorage.getItem("userInfo")) : null,
    },
    reducers:{
         login(state,action){
            state.user = action.payload; //data from the server=payload= data lijaya fl payload
         },
         logout(state,action){
            state.user=action.payload
         }
    }
})
const authReducer=authSlice.reducer
const authActions=authSlice.actions
export {authReducer,authActions}