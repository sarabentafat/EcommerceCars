import { createSlice } from "@reduxjs/toolkit";

const annonceSlice = createSlice({
  name: "annonce",
  initialState: {
    annonces: [],
    annoncesCount: null,
    annoncesCate: [],
    categories: [],
    loading: false,
    isAnnonceCreated: false,
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
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setIsAnnonceCreated(state) {
      state.isAnnonceCreated = true;
      state.loading = false;
    },
    clearIsAnnonceCreated(state) {
      state.isAnnonceCreated = false;
    },
  },
});

const annonceReducer = annonceSlice.reducer;
const annonceActions = annonceSlice.actions;

// Use immer for immutability
export { annonceReducer, annonceActions}