import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './features/apiSlice';

const store = configureStore({
  reducer: {
    pokemon: apiReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {pokemon: typeof apiSlice.reducer}
export type AppDispatch = typeof store.dispatch;

export default store;
