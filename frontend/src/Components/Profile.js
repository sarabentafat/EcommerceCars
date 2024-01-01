import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Oval} from "react-loader-spinner"
import swal from "sweetalert"
import { FaDeleteLeft } from "react-icons/fa6"
import { logoutUser} from "../redux/apiCalls/authApiCall"
import {
  deleteProfile,
  getUserProfile,
  uploadProfilePhoto,
} from "../redux/apiCalls/profileApiCall";
import { useNavigate, useParams } from "react-router-dom";
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
const navigate=useNavigate("/")
  const { profile,loading,isProfileDeleted } = useSelector((state) => state.profile);
    const { user} = useSelector((state) => state.auth);

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
console.log(user?._id)
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
    <div className="">
      <div>
        <h1 className="text-4xl font-bold mb-4">Profile</h1>
        <h2 className="font-bold uppercase">{profile?.username}</h2>
        <p>{profile?.email}</p>
        <p>{profile?.bio}</p>
        <p>{profile?.phonenumber}</p>
        <img
          className="rounded-full w-48 h-48"
          src={profile?.profilePic.url}
          alt="profile"
        />
        {profile?._id === user?._id && (
          <>
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
            <button onClick={() => setUpdatProfile(true)}>
              {" "}
              update profil
            </button>
            {updateProfile && (
              <UpdateProfileModal
                profile={profile}
                setUpdatProfile={setUpdatProfile}
              />
            )}
          </>
        )}
      </div>
      <div>
        <button
          onClick={()=>{deleteAccountHandler()}}
          className="text-red-500 flex items-center gap-1"
        >
          <FaDeleteLeft /> Delete profile
        </button>
        <h1 className="text-4xl">Profile annonces</h1>
        {profile?.annonces.map((annonce) => (
          <div key={annonce._id} className="annonce-card">
            <h2>{annonce?.title}</h2>
            <p>{annonce?.description}</p>

            <img
              className="w-40 "
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
