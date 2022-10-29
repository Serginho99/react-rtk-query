import { useEffect } from 'react';
import { useLazyGetMoviesQuery } from 'redux/movies/createApi';
import { selectorMoviesByGenre } from 'redux/movies/moviesSelectors';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

export default function GalleryComponent() {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

  const [fetchMovies, { data, isFetching: isLoading, isError }] =
    useLazyGetMoviesQuery();

  // const { data, isFetching: isLoading, isError } = useGetMoviesQuery();

  const movies = useSelector(state =>
    selectorMoviesByGenre(data?.results, state)
  );

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '15px',
        width: '100vw',
        listStyle: 'none',
        padding: '20px',
      }}
    >
      {movies?.map(
        ({ backdrop_path, id, original_title, overview, release_date }) => (
          <li key={id} style={{ flexGrow: '1' }}>
            <Card style={{ width: '18rem', flexGrow: '1', height: '30rem' }}>
              <Card.Img variant="top" src={`${IMG_URL}${backdrop_path}`} />
              <Card.Body>
                <Card.Title>
                  {original_title} ({release_date.slice(0, 4)})
                </Card.Title>
                <Card.Text style={{ height: '10rem', overflowY: 'scroll' }}>
                  {overview}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </li>
        )
      )}
      {isLoading && <p>...load</p>}
      {isError && <p>...ERROR</p>}
    </ul>
  );
}
