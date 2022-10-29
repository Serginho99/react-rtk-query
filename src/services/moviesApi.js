import axios from 'axios';

// const API_KEY = process.env.REACT_APP_MOVIES_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const instanceMoviesAxios = axios.create({
  baseURL: BASE_URL,
});

function buildUrl(params) {
  return `${params}?api_key=4d4e27deea421fc269c2758df5384469&page=1`;
}

export async function getTrendingMovies() {
  const res = await instanceMoviesAxios.get(buildUrl(`/trending/movie/week`));
  return res.data.results;
}
