import signup from "../images/signup.png";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    phonenumber: "",
    email: "",
    address: "",
    password: "",
  });
   const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async () => {
    if (formData.password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        formData
      );

      console.log("SignUp successful:", response.data);
       alert("user created succefully <3");
     
     
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("SignUp failed with response data:", error.response.data);

        // Display error message to the user (replace 'errorMessageKey' with the actual key in your error response)
        // You may need to customize this based on your server response structure
        const errorMessage =
          error.response.data.errorMessageKey || "SignUp failed";
        alert(errorMessage);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
      }
    }
  };

  return (
    <div className="w-full h-full h-screen bg-zinc-100 items-center justify-center flex flex-col p-[20px] md:flex-row md:items-center md:justify-center md:p-[70px]">
      <div className="w-full h-full flex flex-col justify-center items-center md:h-full md:w-2/5 md:flex p-2 space-y-6">
        <div className="text-[45px] md:text-[65px] text-yellow-600 md:hidden ">
          Sign Up
        </div>
        <div className="w-[290px] h-[500px] flex flex-col items-center justify-center space-y-[40px] md:items-center md:justify-center md:space-y-[30px] md:w-[330px] md:h-[510px] border-[2px] border-neutral-900">
        
            <form
              onSubmit={handleSignUp}
              className="flex flex-col space-y-[15px] items-center justify-center"
            >
              <input
                type="text"
                placeholder="Full Name"
                name="username"
                required
                value={formData.username}
                onChange={handleInputChange}
                className="w-[240px] text-neutral-900  placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none"
              />
              <input
                type="text"
                required
                placeholder="Phonenumber"
                name="phonenumber"
                value={formData.phonenumber}
                onChange={handleInputChange}
                className="w-[240px] text-neutral-900 placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-[240px] text-neutral-900 placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none"
              />
              <input
                type="text"
                required
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-[240px] text-neutral-900  placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none"
              />
              <input
                type="password"
                required
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-[240px] text-neutral-900  placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none"
              />
              <input
                type="password"
                required
                placeholder="Confirm Password"
                name="confirmpassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-[240px] text-neutral-900  placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none"
              />
              <div>
                <button className="bg-neutral-800 text-zinc-100 w-[240px] h-[40px]">
                  Sign Up
                </button>
                <p className="text-neutral-900 text-end  text-[12px] mt-2">
                  You already have an account?{" "}
                  <span className="text-yellow-600">
                    <Link to="/login">Log in</Link>
                  </span>
                </p>
              </div>
            </form>
       
        </div>
      </div>

      <div className="w-full h-full md:w-3/5 md:h-full flex flex-col space-y-[20px] md:px-7 items-center justify-center md:space-y-8 md:justify-start md:items-start">
        <div className="text-[65px] text-yellow-600 max-md:hidden">Sign Up</div>
        <p className="text-left text-neutral-900 opacity-90 text-[25px] md:block hidden">
          Ready to embark on your car buying journey?
        </p>
        <div>
          <img
            className="w-full h-full md:block hidden"
            src={signup}
            alt="Signup"
          />
        </div>
      </div>
    </div>
  );
}
