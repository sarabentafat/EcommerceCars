import { createSlice } from "@reduxjs/toolkit";

const annonceSlice = createSlice({
  name: "annonce",
  initialState: {
    annonce:[],
    annonceCount: null,
    annonceCate: [],
  },
  reducers: {
    setAnnonce(state, action) {
      state.annonce = action.payload;
    },
    setAnnonceCount(state, action) {
      state.annonceCount = action.payload;
    },
    setAnnonceCate(state, action) {
      state.annonceCate=action.payload
    },
  },
});

const annonceReducer = annonceSlice.reducer;
const annonceActions = annonceSlice.actions;

// Use immer for immutability
export { annonceReducer, annonceActions };
