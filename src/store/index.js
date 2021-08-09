// to store the auth and playlists in the database
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import playlistsReducer from "./playlist";

export default configureStore({
  reducer: {
    auth: authReducer,
    playlists: playlistsReducer,
  },
});
