import { createAsyncThunk } from '@reduxjs/toolkit';
import { getTrendingMovies } from 'services/moviesApi';

export const getMovies = createAsyncThunk(
  'movies/getMovies',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getTrendingMovies();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
