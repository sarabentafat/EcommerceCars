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