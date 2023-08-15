import { createSlice } from "@reduxjs/toolkit";

const initialValue = 0;

export const countSlice = createSlice({
  name: "counter",
  initialState: { value: initialValue },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer;
