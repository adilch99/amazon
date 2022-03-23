import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addItem, removeItem } = basketSlice.actions;

export default basketSlice.reducer;
