import { createSlice } from "@reduxjs/toolkit";

const annonceSlice = createSlice({
  name: "annonce",
  initialState: {
    annonces:[],
    annoncesCount: null,
    annoncesCate: [],
  },
  reducers: {
    setAnnonces(state, action) {
      state.annonces = action.payload;
    },
    setAnnoncesCount(state, action) {
      state.annoncesCount = action.payload;
    },
    setAnnonceCate(state, action) {
      state.annoncesCate=action.payload
    },
  },
});

const annonceReducer = annonceSlice.reducer;
const annonceActions = annonceSlice.actions;

// Use immer for immutability
export { annonceReducer, annonceActions}