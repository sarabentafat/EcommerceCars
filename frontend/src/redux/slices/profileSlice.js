import { createSlice } from "@reduxjs/toolkit";
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
  },
  reducers: {
    setProfile(state, action) {
      // console.log(state)
      state.profile = action.payload;
    },
  },
});
const profileReducer = profileSlice.reducer;
const profileActions = profileSlice.actions;
export { profileReducer, profileActions };
