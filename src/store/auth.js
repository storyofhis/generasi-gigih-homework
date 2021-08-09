import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isAuth: false,
  access_token: "",
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.access_token = action.payload;
    },
    storeUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state = initState;
    },
  },
});

export const { login, storeUser, logout } = authSlice.actions;
export default authSlice.reducer;
