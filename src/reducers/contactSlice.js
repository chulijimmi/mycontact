import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  selectedId: ""
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setContactSelectedId(state, action) {
      state.selectedId = action.payload;
    },
    setContactData(state, action) {
      state.data = action.payload;
    }
  }
});

export const { setContactSelectedId, setContactData } = contactSlice.actions;

export default contactSlice.reducer;