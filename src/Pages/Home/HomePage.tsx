import { useQuery } from '@tanstack/react-query';

// import local services
import MOVIE_SERV from '../../core/services/movieServ';

// import local components
import MoviesList from './MoviesList';
import InnerSpinner from '../../core/Components/Spinners/InnerSpinner';

const HomePage = () => {
  const {
    isLoading,
    isFetching,
    isError,
    data: moviesList,
  } = useQuery(['moviesList'], MOVIE_SERV.getMovieList, {
    staleTime: 3600000,
    cacheTime: 3600000,
  });

  return (
    <>
      <div className="container xl:max-w-screen-xl mx-auto">
        <h3 className="mt-10 font-semibold text-2xl">DANH SÁCH PHIM</h3>
        {isLoading ? <InnerSpinner /> : <MoviesList moviesList={moviesList} />}
      </div>
    </>
  );
};

export default HomePage;
