import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Oval} from "react-loader-spinner"
import swal from "sweetalert"
import { FaDeleteLeft } from "react-icons/fa6"
import { logoutUser} from "../redux/apiCalls/authApiCall"
import { FaEdit } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { IoCloseCircle } from "react-icons/io5";
import {
  deleteProfile,
  getUserProfile,
  uploadProfilePhoto,
} from "../redux/apiCalls/profileApiCall";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import UpdateProfileModal from "./UpdateProfileModal";

const Profile = () => {
const [picUploaded,setPicUploaded]=useState(false)
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [updateProfile,setUpdatProfile]=useState(false)
  const dispatch = useDispatch();
const navigate=useNavigate("/")
  const { profile,loading,isProfileDeleted } = useSelector((state) => state.profile);
    const { user} = useSelector((state) => state.auth);
// change profile photo 
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
      setPicUploaded(true)
    } catch (error) {
      console.error("Error uploading profile photo:", error);
      toast.error("Failed to upload profile photo. Please try again.");
    }
  };
const toggleImage=()=>{

}
  
  //DELETE ACOUNT HANDLER 
  const deleteAccountHandler=()=>{
    swal({
      title: "Are you sure?",
      text: "Once deleted, account and all related data will be permanently deleted!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          dispatch(deleteProfile(user?._id))
          dispatch(logoutUser())
      }
    })
  }
    useEffect(() => {
      dispatch(getUserProfile(id));
    }, [dispatch, id, picUploaded]);
  
  useEffect(()=>{
    if(isProfileDeleted){
      navigate("/")
    }
  },[navigate,isProfileDeleted])
  if (loading){
    return (
      <>
        <Oval
          visible={true}
          height="120"
          width="120"
          color="#000"
          ariaLabel="oval-loading"
          secondaryColor="grey"
          strokeWidth={3}
          strokeWidthSecondary={3}
          wrapperStyle={{}}
          wrapperClass=""
        />
      </>
    );
  }

  return (
    <div className="mx-4">
      <div>
        <div className="justify-center flex items-center">
          <img
            className="rounded-full w-40 h-40 mt-10 "
            src={profile?.profilePic.url}
            alt="profile"
          />
        </div>
        {profile?._id === user?._id && (
          <>
            <form onSubmit={formSubmitHandler}>
              <label className="flex justify-center item-center" htmlFor="file">
                <CiEdit size={27} onClick={toggleImage}/>
              </label>
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
            <button
              className="text-green-500 text-white"
              onClick={() => setUpdatProfile(true)}
            >
              {" "}
              <FaEdit size={36} />
            </button>
            {updateProfile && (
              <UpdateProfileModal
                profile={profile}
                setUpdatProfile={setUpdatProfile}
              />
            )}
          </>
        )}
        <h1 className="text-xl font-bold my-1 ">Profile Informations : </h1>
        <div className="flex">
          <h2 className="font-bold ">username : </h2>
          <h2> {profile?.username}</h2>
        </div>
        <div className="flex">
          <h2 className="font-bold ">gmail : </h2>
          <p>{profile?.email}</p>
        </div>
        <p>{profile?.bio}</p>
        <p>phone number :{profile?.phonenumber}</p>
      </div>
      <div>
        <button
          onClick={() => {
            deleteAccountHandler();
          }}
          className="text-red-500 flex items-center gap-1"
        >
          <FaDeleteLeft /> Delete profile
        </button>
        <h1 className="text-2xl font-bold mt-4">Profile annonces :</h1>
        {profile?.annonces &&
          profile.annonces.map((annonce) => (
            <div key={annonce._id} className="bg-gray-100 p-5 mt-5">
              <h2 className="text-lg font-semibold">{annonce?.title}</h2>
              <p>{annonce?.description}</p>
              <img
                className="w-"
                src={annonce?.image.url}
                alt={`Image for ${annonce.title}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
