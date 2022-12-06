import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

// import local services
import MOVIE_SERV from '../../core/services/movieServ';

import MoviesList from './MoviesList';

const HomePage = () => {
  let [movies, setMovies] = useState([]);

  const queryClient = useQueryClient();

  return (
    <>
      <div className="container xl:max-w-screen-xl mx-auto">
        <MoviesList moviesList={movies} />
      </div>
    </>
  );
};

export default HomePage;
