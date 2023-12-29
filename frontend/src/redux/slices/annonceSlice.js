import { createSlice } from "@reduxjs/toolkit";

const annonceSlice = createSlice({
  name: "annonce",
  initialState: {
    annonces: [],
    annoncesCount: null,
    annoncesCate: [],
    categories:[]
  },
  reducers: {
    setAnnonces(state, action) {
      state.annonces = action.payload;
    },
    setAnnoncesCount(state, action) {
      state.annoncesCount = action.payload;
    },
    setAnnoncesCate(state, action) {
      state.annoncesCate = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
});

const annonceReducer = annonceSlice.reducer;
const annonceActions = annonceSlice.actions;

// Use immer for immutability
export { annonceReducer, annonceActions}