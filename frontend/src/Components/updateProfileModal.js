import React, { useState } from "react";
// import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateProfile } from "../redux/apiCalls/profileApiCall";

// const user = {
//   username: "sara",
//   bio: "hhh",
// };

const UpdateProfileModal = ({ setUpdatProfile, profile }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(profile.username);
  const [bio, setBio] = useState(profile.bio);
  const [password, setPassword] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const updatedUser = {
      username,
      bio,
    };
    if (password.trim() !== "") {
      updatedUser.password = password;
    }
    console.log(updatedUser)
    console.log(profile?._id)
    console.log(profile)
    dispatch(updateProfile(profile?._id, updatedUser));
    setUpdatProfile(false);
  };

  return (
    <div className="bg-red-200 z-40 absolute top-[30%] w-[70%] left-[50%]">
      updateProfileModal
      <form onSubmit={formSubmitHandler}>
        <abbr>
          <i
            onClick={(e) => {
              e.preventDefault();
              setUpdatProfile();
            }}
            className="cursor-pointer"
          >
            close
          </i>
        </abbr>
        <h1>update profile</h1>
        <div className="flex flex-col gap-2">
          <div>
            {" "}
            <input
              type="text"
              className=""
              value={username}
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              className=""
              value={bio}
              placeholder="bio"
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              className=""
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="bg-green-500 p-2 text-white rounded">
          update profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileModal;
