import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';

// import local services
import MOVIE_SERV from '../../core/services/movieServ';

// import local components
import MovieFilterBar from './MovieFilterBar';
import MoviesList from './MoviesList';
import InnerSpinner from '../../core/Components/Spinners/InnerSpinner';

// import types and interfaces
import type { InputRef } from 'antd';
import type { Dayjs } from 'dayjs';

// import local constants
import defaultConst from '../../core/constants/defaultConst';

const HomePage = () => {
  const tenPhimRef = useRef<InputRef>(null);
  const ngayKhoiChieuPickerRef = useRef<(Dayjs | null)[]>(
    defaultConst.movieFilterTimeRange,
  );

  const {
    isLoading,
    isFetching,
    data: moviePaginationInfo,
  } = useQuery(
    ['moviesList'],
    () => {
      const fromDate = ngayKhoiChieuPickerRef.current[0]?.format('YYYY-MM-DD');
      const toDate = ngayKhoiChieuPickerRef.current[1]?.format('YYYY-MM-DD');
      const tenPhim = tenPhimRef.current?.input?.value;
      return MOVIE_SERV.getMoviesPagination({ tenPhim, fromDate, toDate });
    },
    {
      staleTime: 3600000,
      cacheTime: 3600000,
    },
  );

  return (
    <>
      <div className="container xl:max-w-screen-xl mx-auto p-5 sm:p-0">
        <h3 className="mt-10 font-semibold text-2xl">DANH SÁCH PHIM</h3>
        <MovieFilterBar
          tenPhimRef={tenPhimRef}
          ngayKhoiChieuPickerRef={ngayKhoiChieuPickerRef}
        />
        {isLoading || isFetching ? (
          <InnerSpinner />
        ) : (
          <MoviesList moviesList={moviePaginationInfo?.items} />
        )}
      </div>
    </>
  );
};

export default HomePage;
