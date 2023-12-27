import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import login from "../images/login.png";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/apiCalls/authApiCall";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(loginUser({ email, password }));
      const { data } = response;

      if (data.success) {
        swal({
          title: "User logged in successfully",
          icon: "success",
        }).then(() => {
          navigate("/"); // Redirect to the desired page after successful login
        });
      } else {
        swal({
          title: "Login Failed",
          text: data.message,
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="w-full h-full items-center flex flex-col justify-center md:w-full md:h-screen bg-zinc-100 md:flex md:flex-row md:px-[80px] md:py-[30px]">
      <div className="flex flex-col w-full h-full p-7 justify-center items-start md:w-3/5 md:h-full md:flex md:flex-col md:p-8 md:space-y-[20px] md:justify-center md:items-start">
        <div className="text-[45px] md:text-[60px] text-start text-yellow-600 ">
          Log in{" "}
        </div>
        <div>
          <p className="text-neutral-900 opacity-90 text-[30px] md:block hidden">
            Your dream car is just a click away!
          </p>
          <img
            className="w-auto h-auto md:block hidden"
            src={login}
            alt="Login"
          />
        </div>
      </div>

      <div className="flex w-full h-full items-center justify-center mb-8 md:w-2/5 md:flex md:items-center md:justify-start">
        <div className="w-[300px] h-[410px] flex flex-col items-center justify-center space-y-8 border-[2px] border-neutral-900 md:w-[380px] md:h-[470px] md:space-y-[50px] ">
          <div>
            {/* Use onSubmit on the form element, not a div */}
            <form
              onSubmit={formSubmitHandler}
              className="flex flex-col space-y-[30px] items-center justify-center"
            >
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[260px] md:w-[300px] text-neutral-900 placeholder-neutral-900 md:py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none"
              />

              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                name="password"
                value={password}
                className="w-[260px] md:w-[300px] text-neutral-900 placeholder-neutral-900 md:py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none"
              />

              <button
                type="submit"
                className="bg-neutral-800 text-zinc-100 w-[260px] h-[40px] md:w-[300px]  md:h-[50px]"
              >
                Log In
              </button>
            </form>
            <p className="text-yellow-600 text-[12px] md:text-[14px] text-end mt-[5px]">
              Forget Password ?
            </p>
          </div>
          <div>
            <p className="text-neutral-900 text-end text-[12px] md:text-[14px] mt-2">
              You don't have an account?{" "}
              <span className="text-yellow-600">
                <Link to="/signup"> Sign Up</Link>
              </span>
            </p>
            <p className="text-neutral-900 text-end text-[12px] md:text-[14px] mt-2">
              Did you forget your password?{" "}
              <span className="text-yellow-600">
                <Link to="/forgot-password">Forgot password</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
