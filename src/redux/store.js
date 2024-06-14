// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import oiReducer from './oiSlice';

const store = configureStore({
  reducer: {
    oi: oiReducer,
  },
});

export default store;
