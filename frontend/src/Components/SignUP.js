import signup from "../images/signup.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/apiCalls/authApiCall";
import swal from "sweetalert";

export default function SignUp() {
  const dispatch = useDispatch();
  const { registerMessage } = useSelector((state) => state.auth);

  // Separate state variables for each form field
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Use the corresponding setter function based on the input field's name
    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "phonenumber":
        setPhonenumber(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    console.log({ username });
    if (username.trim() === "") return toast.error("Username is required");

    // Pass individual state variables to the action
    dispatch(registerUser({ username, phonenumber, email, address, password }));
  };

  if (registerMessage) {
    swal({
      title: registerMessage,
      icon: "success",
    }).then((isOk) => {
      if (isOk) {
        navigate("/login");
      }
    });
  }

  return (
    <div className="w-full h-screen bg-zinc-100 items-center justify-center flex flex-col p-[20px] md:flex-row md:items-center md:justify-center md:p-[70px]">
      <div className="w-full h-full flex flex-col justify-center items-center md:h-full md:w-2/5 md:flex p-2 space-y-6">
        <div className="text-[45px] md:text-[65px] text-yellow-600 md:hidden">
          Sign Up
        </div>
        <div className="w-[290px] h-[500px] flex flex-col items-center justify-center space-y-[40px] md:items-center md:justify-center md:space-y-[30px] md:w-[330px] md:h-[510px] border-[2px] border-neutral-900">
          <form
            onSubmit={formSubmitHandler}
            className="flex flex-col space-y-[15px] items-center justify-center"
          >
            <input
              type="text"
              placeholder="Full Name"
              name="username"
              required
              value={username}
              onChange={handleInputChange}
              className="w-[240px] text-neutral-900  placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none"
            />
            <input
              type="text"
              required
              placeholder="Phonenumber"
              name="phonenumber"
              value={phonenumber}
              onChange={handleInputChange}
              className="w-[240px] text-neutral-900 placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none"
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="w-[240px] text-neutral-900 placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none"
            />
            <input
              type="text"
              required
              placeholder="Address"
              name="address"
              value={address}
              onChange={handleInputChange}
              className="w-[240px] text-neutral-900  placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none"
            />
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
              value={password}
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
