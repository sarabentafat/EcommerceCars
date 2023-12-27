import { profileActions } from "../slices/profileSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

// get user profile
export function getUserProfile(id) {
  return async (dispatch) => {
    try {
      const response = await request.get(`/api/users/profile/${id}`);
      const { data } = response;
     
      // Ensure that the profileActions are correctly imported
      dispatch(profileActions.setProfile(data));
      // console.log(  dispatch(profileActions.setProfile(data)).payload)
    } catch (error) {
      // Handle different error scenarios
      if (error.response) {
        // The server responded with an error status
        toast.error(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an error
        toast.error("An unexpected error occurred.");
      }

      // Log the error for further debugging if needed
      console.error("Error in getUserProfile:", error);
    }
  };
}

// upload profile photo
export function uploadProfilePhoto(newPhoto) {
  return async (dispatch,getState) => {
    try {
      console.log('wslt hna')
      const response = await request.post(
        `/api/users/profile/profile-photo-upload`,
        newPhoto,
        {
          headers: {
            Authorization:"Bearer "+getState().auth.user.token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
              console.log(response)
      const { data } = response;
      console.log(data)
      dispatch(profileActions.setProfilePhoto(data.profilePic)); 
      toast.success(data.message)
    } catch (error) {
      // Handle different error scenarios
      if (error.response) {
    
        toast.error(error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an error
        toast.error("An unexpected error occurred.");
      }

      // Log the error for further debugging if needed
      console.error("Error in uploadprofilephoto:", error);
    }
  };
}
