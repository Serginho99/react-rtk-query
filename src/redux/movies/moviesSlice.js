import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: { genre: 0 },
  reducers: {
    selectGenre: (state, { payload }) => {
      state.genre = payload;
    },
  },
});
