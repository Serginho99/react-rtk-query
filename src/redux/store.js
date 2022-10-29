import { configureStore } from '@reduxjs/toolkit';
import { moviesSlice } from './movies/moviesSlice';
import { moviesApi } from './movies/createApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
export const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);
