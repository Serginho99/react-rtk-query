import { createSlice } from '@reduxjs/toolkit';
import { getMovies } from './moviesOperations';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: { loading: false, items: [], error: '', genre: 0 },
  extraReducers: builder =>
    builder
      .addCase(getMovies.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(getMovies.pending, state => {
        state.loading = true;
      })
      .addCase(getMovies.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      }),

  reducers: {
    selectGenre: (state, { payload }) => {
      state.genre = payload;
    },
  },
});
