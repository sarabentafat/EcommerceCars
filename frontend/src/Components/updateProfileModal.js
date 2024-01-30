import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../redux/apiCalls/profileApiCall";
import { IoClose } from "react-icons/io5";
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
    dispatch(updateProfile(profile?._id, updatedUser));
    setUpdatProfile(false);
  };

  return (
    <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 bg-white p-8 rounded-md shadow-lg">
      <form onSubmit={formSubmitHandler}>
        <div className="flex justify-end">
          <abbr
            onClick={(e) => {
              e.preventDefault();
              setUpdatProfile();
            }}
            className="cursor-pointer text-gray-500 hover:text-gray-700"
          >
            <IoClose size={30} />
          </abbr>
        </div>
        <h1 className="text-2xl font-semibold mb-4">Update Profile</h1>
        <div className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>
          <div>
            <textarea
              value={bio}
              placeholder="Bio"
              onChange={(e) => setBio(e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded-md w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-700 w-full"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileModal;
