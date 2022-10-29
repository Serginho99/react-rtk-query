export const selectorGenre = state => state.movies.genre;

export const selectorMoviesByGenre = (movies, state) => {
  const genre = selectorGenre(state);
  return genre === 0
    ? movies
    : movies?.filter(item => item?.genre_ids.includes(genre));
};
