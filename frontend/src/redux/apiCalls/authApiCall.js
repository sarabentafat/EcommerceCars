import { authActions } from "../slices/authSlice";
import request from "../../utils/request"
import {toast} from "react-toastify"
// login user
export function loginUser(user) {
  return async (dispatch) => {
    try {
    const {data} = await request.post("/api/auth/login",user);
      dispatch(authActions.login(data));
      localStorage.setItem("userInfo",JSON.stringify(data))
    } catch (error) {
        toast.error(error.response.data.message)
        console.log(error);
    }
  };
}
export function logoutUser() {
  return async (dispatch) => {
    try {

      dispatch(authActions.logout());
      localStorage.removeItem("userInfo");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
}

// register user
export function registerUser(user) {
  return async (dispatch) => {
    try {
    const {data} = await request.post("/api/auth/register",user);
      dispatch(authActions.register(data.message));
    } catch (error) {
        toast.error(error.response.data.message)
        console.log(error);
    }
  };
}