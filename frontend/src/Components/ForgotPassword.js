

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import login from "../images/login.png";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/apiCalls/authApiCall";

export const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email);

    dispatch(loginUser({ email, password }));
    alert("user loged in succefully");
  };

  return (
    <div className="w-full h-full items-center flex flex-col justify-center md:w-full md:h-screen bg-zinc-100 md:flex md:flex-row md:px-[80px] md:py-[30px]">
      <div className="flex flex-col w-full h-full p-7 justify-center items-start md:w-3/5 md:h-full md:flex md:flex-col md:p-8 md:space-y-[20px] md:justify-center md:items-start">
        <div className="text-[45px] md:text-[60px] text-start text-yellow-600 ">
          Forgot password{" "}
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
                modify password
              </button>
            </form>
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
