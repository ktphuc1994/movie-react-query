import { AXIOS_INSTANCE_GENERATOR } from './configURL';

// import local constants
import localConst from '../constants/localConst';

// import local interfaces
import { InterfaceMovie } from '../interface/movies/movie.interface';
import { InterfaceHeThongRap } from '../interface/theatres/theatre.interface';
import {
  InterfaceCreateTicket,
  InterfaceShowtimeAndSeat,
  InterfaceScheduleInfo,
} from '../interface/booking/booking.interface';

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
