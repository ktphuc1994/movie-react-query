import { AXIOS_INSTANCE_GENERATOR } from './configURL';

// import local constants
import localConst from '../constants/localConst';

// import local interfaces
import { InterfaceMovie } from '../interface/movies/movie.interface';
import { InterfaceHeThongRap } from '../interface/theatres/theatre.interface';
import {
  InterfaceSchedule,
  InterfaceShowtimeInfo,
} from '../interface/booking/booking.interface';

const MOVIE_SERV = {
  getTheaterChainList: async (): Promise<Array<InterfaceHeThongRap>> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_THEATER_URL(),
    ).get('/LayThongTinHeThongRap');
    return data.content;
  },
  getMovieList: async (): Promise<Array<InterfaceMovie>> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_MOVIE_URL(),
    ).get(`/LayDanhSachPhim`);
    return data.content;
  },
  getShowtimeInfo: async (maPhim: string): Promise<InterfaceShowtimeInfo> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_THEATER_URL(),
    ).get(`/LayThongTinLichChieuPhim/${maPhim}`);
    return data.content;
  },
  getScheduleDetail: async (
    maLichChieu: string,
  ): Promise<InterfaceSchedule> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_BOOKING_URL(),
    ).get(`/LayDanhSachGheTheoLichChieu/${maLichChieu}`);
    return data.content;
  },
};

export default MOVIE_SERV;
