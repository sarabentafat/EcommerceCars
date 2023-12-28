import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getUserProfile,
  uploadProfilePhoto,
} from "../redux/apiCalls/profileApiCall";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UpdateProfileModal from "./UpdateProfileModal";

const Profile = () => {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [updateProfile,setUpdatProfile]=useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile(id));
  }, [dispatch, id]);

  const { profile } = useSelector((state) => state.profile);

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!file) {
      return toast.warning("Please select a file.");
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
       dispatch(uploadProfilePhoto(formData));
      toast.success("Profile photo uploaded successfully.");
    } catch (error) {
      console.error("Error uploading profile photo:", error);
      toast.error("Failed to upload profile photo. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
    
      <div>
        <h1 className="text-4xl font-bold mb-4">Profile</h1>
        <h2 className="font-bold uppercase">{profile?.username}</h2>
        <p>{profile?.email}</p>
        <p>{profile?.bio}</p>
        <img
          className="rounded-full w-48 h-48"
          src={profile?.profilePic.url}
          alt="profile"
        />
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="file">Choose a profile picture:</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button className="bg-red-500 p-2" type="submit">
            Upload
          </button>

        </form>
        <button onClick={()=>setUpdatProfile(true)}> update profil</button>
                  {updateProfile && (
            <UpdateProfileModal profile={profile} setUpdatProfile={setUpdatProfile}/>
          )}
      </div>
    </div>
  );
};

export default Profile;
