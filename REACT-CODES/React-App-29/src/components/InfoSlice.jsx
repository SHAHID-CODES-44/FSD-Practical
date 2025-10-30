// components/infoSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "info",
  initialState: {
    course: "Bachelor of Computer Applications (BCA)",
    duration: "3 Years / 6 Semesters",
    contact: "ramkrishna@gmail.com"
  },
  reducers: {
    updateContact(state, action) {
      state.contact = action.payload;
    }
  }
});

export const { updateContact } = infoSlice.actions;
export default infoSlice.reducer; // default export is reducer (not a component)
