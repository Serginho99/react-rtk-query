import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3',
  }),
  endpoints: builder => ({
    getMovies: builder.query({
      query: () =>
        '/trending/movie/week?api_key=4d4e27deea421fc269c2758df5384469&page=1',
    }),
  }),
});

export const { useGetMoviesQuery, useLazyGetMoviesQuery } = moviesApi;
