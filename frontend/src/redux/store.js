import {configureStore} from "@reduxjs/toolkit"
import { authReducer } from "./slices/authSlice"
import { profileReducer } from "./slices/profileSlice"
import { annonceReducer } from "./slices/annonceSlice"

const store =configureStore({
    reducer:{
        auth:authReducer,
        profile:profileReducer,
        annonce:annonceReducer
    }
})
export default store 