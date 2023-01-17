import { AXIOS_INSTANCE_GENERATOR } from './configURL';

// import local constants
import localConst from '../constants/localConst';

// import local interfaces
import {
  InterfaceMovie,
  InterfaceGetMoviePagination,
  InterfaceMoviePagination,
} from '../interface/movies/movie.interface';
import { InterfaceHeThongRap } from '../interface/theatres/theatre.interface';
import {
  InterfaceCreateTicket,
  InterfaceShowtimeAndSeat,
  InterfaceScheduleInfo,
} from '../interface/booking/booking.interface';
import defaultConst from '../constants/defaultConst';

const MOVIE_SERV = {
  getTheaterChainList: async (): Promise<InterfaceHeThongRap[]> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_THEATER_URL(),
    ).get('/LayThongTinHeThongRap');
    return data.content;
  },
  getMovieList: async (): Promise<InterfaceMovie[]> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_MOVIE_URL(),
    ).get(`/LayDanhSachPhim`);
    return data.content;
  },
  getMoviesPagination: async ({
    tenPhim,
    currentPage,
    itemsPerPage,
    fromDate,
    toDate,
  }: InterfaceGetMoviePagination): Promise<InterfaceMoviePagination> => {
    const fromDateSub = defaultConst.timeRange[0].format('YYYY-MM-DD');
    const toDateSub = defaultConst.timeRange[1].format('YYYY-MM-DD');
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_MOVIE_URL(),
    ).get(
      `/LayDanhSachPhimPhanTrang?tenPhim=${
        tenPhim ? tenPhim : ''
      }&currentPage=${currentPage ? currentPage : '1'}&itemsPerPage=${
        itemsPerPage ? itemsPerPage : '999'
      }&fromDate=${fromDate ? fromDate : fromDateSub}&toDate=${
        toDate ? toDate : toDateSub
      }`,
    );
    return data.content;
  },
  getMovieDetail: async (maPhim: string): Promise<InterfaceMovie> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_MOVIE_URL(),
    ).get(`/LayThongTinPhim/${maPhim}`);
    return data.content;
  },
  getMovieSchedule: async (maPhim: string): Promise<InterfaceScheduleInfo> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_THEATER_URL(),
    ).get(`/LayThongTinLichChieuPhim/${maPhim}`);
    return data.content;
  },
  getTheatreChainAndSchedule: async (
    maHeThongRap: string | undefined,
  ): Promise<InterfaceHeThongRap[]> => {
    const paramMaHeThong = maHeThongRap ? maHeThongRap : '';
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_THEATER_URL(),
    ).get(`/LayThongTinLichChieuTheoHeThongRap?maHeThongRap=${paramMaHeThong}`);
    return data.content;
  },
  getShowtimeDetail: async (
    maLichChieu: string,
  ): Promise<InterfaceShowtimeAndSeat> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_BOOKING_URL(),
    ).get(`/LayDanhSachGheTheoLichChieu/${maLichChieu}`);
    return data.content;
  },
  postBookTicket: async (ticketsInfo: InterfaceCreateTicket) => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_BOOKING_URL(),
    ).post('/DatVe', ticketsInfo);
    return data.content;
  },
};

export default MOVIE_SERV;
