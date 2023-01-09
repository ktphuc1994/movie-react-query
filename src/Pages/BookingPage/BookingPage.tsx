import { NavLink, useNavigate, useParams } from 'react-router-dom';

// import react query
import { useQuery } from '@tanstack/react-query';

// import ANTD component
import { Tabs, Tag } from 'antd';

// import local components
import InnerSpinner from '../../core/Components/Spinners/InnerSpinner';

// import movie services
import MOVIE_SERV from '../../core/services/movieServ';

// import local interface
import { InterfaceCumRap } from '../../core/interface/theatres/theatre.interface';
import { InterfaceLichChieuPhim } from '../../core/interface/booking/booking.interface';

// import moment
import moment from 'moment';

export default function BookingPage() {
  const { maPhim } = useParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(setIsLoading(true));
  //   MOVIE_SERV.getMovieShowtimes(params.maPhim)
  //     .then((res) => {
  //       // console.log(res);
  //       setBookingInfo(res.data.content);
  //       dispatch(setIsLoading(false));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       dispatch(setIsLoading(false));
  //     });
  // }, []);

  const {
    isLoading,
    isFetching,
    isError,
    data: bookingInfo,
  } = useQuery(
    ['bookingInfo', maPhim],
    () => MOVIE_SERV.getShowtimeInfo(maPhim!),
    {
      staleTime: 3600000,
      cacheTime: 3600000,
    },
  );

  const onChange = (key: any) => {
    console.log(key);
  };
  let handleChonPhimKhac = () => {
    navigate('/');
  };

  const renderTheatreChains = () => {
    if (bookingInfo?.heThongRap.length === 0) {
      return (
        <div>
          <p className="mb-1 text-xl">Phim hiện tại đã hết xuất chiếu.</p>
          <button
            type="button"
            className="px-4 py-1.5 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 rounded-md focus:ring-red-900 font-medium text-white text-lg transition duration-300"
            onClick={handleChonPhimKhac}
          >
            Chọn phim khác
          </button>
        </div>
      );
    }
    return (
      <Tabs
        className="showtimeChains"
        defaultActiveKey="1"
        onChange={onChange}
        items={bookingInfo?.heThongRap.map((heThongRap, index) => {
          return {
            label: (
              <img
                className="w-16 h-16 mb-2"
                src={heThongRap.logo}
                alt={heThongRap.maHeThongRap}
              />
            ),
            key: heThongRap.maHeThongRap.toString() + index,
            children: renderTheatreList(heThongRap.cumRap!),
          };
        })}
      />
    );
  };

  const renderTheatreList = (cumRap: InterfaceCumRap[]) => (
    <Tabs
      className="showtimeTheatres"
      defaultActiveKey="1"
      onChange={onChange}
      items={cumRap.map((rapChieu, index) => {
        return {
          label: <span className="text-white">{rapChieu.tenCumRap}</span>,
          key: rapChieu.maCumRap.toString() + index,
          children: renderDatesList(rapChieu.lichChieuPhim!),
        };
      })}
    />
  );

  const getDatesList = (showtimeList: InterfaceLichChieuPhim[]) => {
    // if (!showtimeList) return;
    return showtimeList.reduce<Array<string>>((datesList, showtime) => {
      const currDate: string = moment(showtime.ngayGioChieu).format(
        'YYYY-MM-DD',
      );
      const isDateInList = datesList.includes(currDate);
      if (!isDateInList) {
        return [...datesList, currDate];
      }
      return datesList;
    }, []);
  };

  const renderDatesList = (showtimeList: InterfaceLichChieuPhim[]) => {
    // console.log(showtimeList);
    const datesList = getDatesList(showtimeList);
    return (
      <Tabs
        className="showtimeDates"
        defaultActiveKey="1"
        onChange={onChange}
        items={datesList.map((date, index) => {
          const showtimeByDate = showtimeList.filter((showtime) => {
            return moment(showtime.ngayGioChieu).format('YYYY-MM-DD') === date;
          });
          const showDay = moment(date).format('DD');
          const showMonth = moment(date).format('MM');
          const showYear = moment(date).format('YYYY');
          return {
            label: (
              <div className="showdate p-2 mb-3 flex text-white">
                <p className="mr-2 mb-0 text-4xl">{showDay}</p>
                <div>
                  <p className="mb-0 text-right">{showMonth}</p>
                  <p className="mb-0 text-right">{showYear}</p>
                </div>
              </div>
            ),
            key: date.toString() + index,
            children: renderHoursList(showtimeByDate),
          };
        })}
      />
    );
  };

  const renderHoursList = (showHoursList: InterfaceLichChieuPhim[]) => (
    <div>
      {showHoursList.map((showHour, index) => (
        <NavLink
          to={`/select-seat/${showHour.maLichChieu}`}
          key={showHour.maLichChieu.toString() + index}
        >
          <button className="px-5 py-2.5 m-2 border rounded-lg border-white/50 hover:border-white font-medium text-[16px] sm:text-lg text-center text-white/50 hover:text-white">
            {moment(showHour.ngayGioChieu).format('hh:mm A')}
          </button>
        </NavLink>
      ))}
    </div>
  );

  return (
    <div className="container xl:max-w-screen-xl mx-auto pb-10 px-2 sm:px-0">
      <h2 className="pb-3 mb-6 border-b-2 text-3xl text-white">Đặt vé</h2>
      {!bookingInfo ? (
        <InnerSpinner />
      ) : (
        <div className="movieDetails flex mb-5">
          <div className="movieDetails__cover w-64 h-80 mr-6 flex-shrink-0">
            <img
              src={bookingInfo.hinhAnh}
              alt={bookingInfo.tenPhim}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="movieDetails__detail">
            <div className="flex items-center">
              <p className="mb-0 mr-2 font-bold text-2xl uppercase">
                {bookingInfo.tenPhim}
              </p>
              {bookingInfo.hot ? (
                <Tag color="#f50" className="font-bold">
                  HOT
                </Tag>
              ) : (
                <></>
              )}
            </div>
            <p className="pb-7 border-b border-b-white/70">
              Rating:{' '}
              <span className="font-semibold text-lg text-red-500">
                {bookingInfo.danhGia}
              </span>
              /10
            </p>
            <p className="mb-2 text-lg leading-loose text-justify">
              {bookingInfo.moTa}
            </p>
          </div>
        </div>
      )}
      <div className="showtime">{renderTheatreChains()}</div>
    </div>
  );
}
