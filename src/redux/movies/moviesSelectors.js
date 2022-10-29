export const selectorMovies = state => state.movies.items;

export const selectorLoading = state => state.movies.loading;

export const selectorError = state => state.movies.error;

export const selectorGenre = state => state.movies.genre;

export const selectorMoviesByGenre = state => {
  const genre = selectorGenre(state);
  const movies = selectorMovies(state);
  return genre === 0
    ? movies
    : movies.filter(item => item?.genre_ids.includes(genre));
};
