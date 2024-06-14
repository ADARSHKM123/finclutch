// src/redux/oiSlice.js
import { createSlice } from '@reduxjs/toolkit';

const oiSlice = createSlice({
  name: 'oi',
  initialState: [],
  reducers: {
    setOiData: (state, action) => action.payload,
  },
});

export const { setOiData } = oiSlice.actions;
export default oiSlice.reducer;
