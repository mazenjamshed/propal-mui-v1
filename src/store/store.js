import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/modal';
// import toggleSlice from './slices/toggleSlice';

const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
  },
});

export default store;
