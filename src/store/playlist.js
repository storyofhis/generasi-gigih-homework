import { createSlice } from "@reduxjs/toolkit";

interface Track {
  tracks: Array<string>;
  selectedTracks: Array<string>;
  form: {
    title: string,
    description: string,
  };
}

const initState: Track = {
  tracks: [],
  selectedTracks: [],
  form: {
    title: "",
    description: "",
  },
};

const playlistSlice = createSlice({
  name: "playlist",
  initState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    setSelectedTracks: (state, action) => {
      state.selectedTracks.push(action.payload);
    },
    substract: (state, action) => {
      const Index = state.selectedTracks.indexOf(action.payload);
      state.selectedTracks.splice(Index, 1);
    },
    setForm: (state, action) => {
      // using key and value to mapping the object entries
      const [key, value] = Object.entries(action.payload)[0];
      state.form[key] = value;
    },
    clearForm: (state) => {
      state.form = initState.form;
    },
    clearSelectedForm: (state) => {
      state.selectedTracks = [];
    },
    clearState: (state) => {
      state = initState;
    },
  },
});

export const { setTracks, setSelectedTracks, substract, setForm, clearForm, clearSelectedForm, clearState } = playlistSlice.actions;
export default playlistSlice.reducer;
