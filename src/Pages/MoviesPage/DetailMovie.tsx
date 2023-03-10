import moment from 'moment';
import { NavLink, useParams } from 'react-router-dom';

// import react query
import { useQuery } from '@tanstack/react-query';

// import local components
import InnerSpinner from '../../core/Components/Spinners/InnerSpinner';
import NotFound from '../../core/Components/Error/NotFound';

// import ANTD Components
import { Tag } from 'antd';

// import local services
import MOVIE_SERV from '../../core/services/movieServ';

// import local utils
import { getStringPosition } from '../../core/utils/utils';

export default function DetailMovie() {
  const { maPhim } = useParams();

  const { isError, data: movieDetail } = useQuery(['movieDetail', maPhim], () =>
    MOVIE_SERV.getMovieDetail(maPhim!),
  );
  if (isError) return <NotFound />;
  if (!movieDetail) return <InnerSpinner />;

  const getYouTubeLink = (shortenLink: string) => {
    const embedIndex = shortenLink.indexOf('youtube.com/embed');
    if (embedIndex !== -1) {
      return shortenLink;
    }

    const youTubeIndex: number = getStringPosition(
      ['youtu.be/', 'youtube.com/watch?v='],
      shortenLink,
    );
    return `https://www.youtube.com/embed/${shortenLink.slice(youTubeIndex)}`;
  };

  return (
    <>
      <div className="h-[350px] md:h-[500px]">
        <iframe
          width="100%"
          height="100%"
          src={getYouTubeLink(movieDetail.trailer)}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="container xl:max-w-screen-xl mx-auto my-8 px-3 md:flex">
        <div className="movieShortDetails mb-4 md:w-1/4 flex-shrink-0">
          <div>
            <p className="mb-0 mr-2 font-bold text-2xl">
              <span className="mr-2">{movieDetail.tenPhim}</span>
              {movieDetail.hot ? (
                <Tag color="#f50" className="font-bold align-top">
                  HOT
                </Tag>
              ) : (
                <></>
              )}
            </p>
          </div>
          <p>
            Rating:{' '}
            <span className="font-semibold text-lg text-red-500">
              {movieDetail.danhGia}
            </span>
            /10
          </p>
          <NavLink to={`/booking/${movieDetail.maPhim}`}>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              ?????T V?? NGAY
            </button>
          </NavLink>
          <div className="flex md:block">
            <p className="mr-3 md:mr-0 mb-2 text-lg">Kh???i chi???u:</p>
            <p className="mb-2 font-bold text-xl">
              {moment(movieDetail.ngayKhoiChieu).format('MMM DD, YYYY')}
            </p>
          </div>
        </div>
        <div>
          <p className="mb-2 text-lg md:text-xl leading-normal md:leading-loose text-justify">
            {movieDetail.moTa}
          </p>
        </div>
      </div>
    </>
  );
}
