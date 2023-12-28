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
