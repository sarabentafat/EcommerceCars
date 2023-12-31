import { annonceActions } from "../slices/annonceSlice";
import request from "../../utils/request";
import { toast } from "react-toastify";

// get annonces based on page number
export function fetchAnnonces(pageNumber) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/api/annonces?pageNumber=${pageNumber}`
      );
    //   console.log(data)
      dispatch(annonceActions.setAnnonces(data));
          
   console.log(data)
    } catch (error) {
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

      console.error("Error in fetchAnnonces:", error);
    }
  };
}

// get annonces Count
export function getAnnoncesCount(pageNumber) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/api/annonces/count`
      );
    //   console.log(data)
      dispatch(annonceActions.setAnnoncesCount(data));
          
    //   const {payload}=dispatch(annonceActions.setAnnonce(data))
    //       console.log(payload)
    } catch (error) {
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

      console.error("Error in fetchAnnonces:", error);
    }
  };
}
// fetch annonces based on category
export function fetchAnnoncesBasesOnCategory(category) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/api/annonces?category=${category}`
      );
    //   console.log(data)
      dispatch(annonceActions.setAnnoncesCate(data));
          
    //   const {payload}=dispatch(annonceActions.setAnnonce(data))
    //       console.log(payload)
    } catch (error) {
  toast.error(error.response.data.message)    }
  };
}
export function fetchAnnoncesCate(category) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/api/categories`);
      //   console.log(data)
      dispatch(annonceActions.setCategories(data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}
// Create annonce
export function createAnnonce(newAnnonce) {
  return async (dispatch, getState) => {
   
    try {
       dispatch(annonceActions.setLoading());
      await request.post(`/api/annonces`, newAnnonce, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(newAnnonce)

      dispatch(annonceActions.setIsAnnonceCreated());
      setTimeout(() => dispatch(annonceActions.clearIsAnnonceCreated()), 2000);
    } catch (error) {
      toast.error(error.response.data.message);
      dispatch(annonceActions.clearLoading());
    }
  };
}
// Toggle like annonce
export function fetchAnnonce(annonceId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/api/annonces/${annonceId}`
      );
      dispatch(annonceActions.setAnnonce(data));

    } catch (error) {
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

      console.error("Error in fetchAnnonces:", error);
    }
  };
}
// fetch single annonce
export function toggleLikeAnnonce(annonceId) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.put(
        `/api/annonces/like/${annonceId}`,{},{
headers:{
  Authorization:"Bearer "+getState().auth.user.token

}
        }
      );
      dispatch(annonceActions.setLike(data));

    } catch (error) {
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

      console.error("Error in fetchAnnonces:", error);
    }
  };
}
// update annonce image
export function updateAnnonceImage(newImage,annonceId) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.put(
        `/api/annonces/update-image/${annonceId}`,
        newImage,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
            "Content-Type":"multipart/form-data"
          },
        }
      );
      toast.success("new annonce image uploaded succefully")
      dispatch(annonceActions.setUpdateImage(data));
      console.log("delted hhh")

    } catch (error) {
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

      console.error("Error in fetchAnnonces:", error);
    }
  };
}
// update annonce
export function updateAnnonce(newAnnonce,annonceId) {
  return async (dispatch,getState) => {

    console.log(annonceId)
    console.log(newAnnonce)
    console.log("Token:", getState().auth.user.token);
    try {
      const { data } = await request.put(
        `/api/annonces/${annonceId}`,
        newAnnonce,
        {
          headers: {
            Authorization: "Bearer " + getState().auth.user.token,
          },
        }
      );
      toast.success("annonce updated succefully")
      dispatch(annonceActions.setAnnonce(data));

    } catch (error) {
   toast.error(error.response.data.message);
    }
  };
}
// DELETE annonce
export function deleteAnnonce(annonceId) {
  return async (dispatch,getState) => {
    try {
      const { data } = await request.delete(`/api/annonces/${annonceId}`, {
        headers: {
          Authorization: "Bearer " + getState().auth.user.token
        },
      });
    
      dispatch(annonceActions.deleteAnnonce(data._id));
        toast.success(data.message);

    } catch (error) {
   toast.error(error.response.data.message);
    }
  };
}