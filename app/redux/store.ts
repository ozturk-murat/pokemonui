import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './features/apiSlice';

const store = configureStore({
  reducer: {
    pokemon: apiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
