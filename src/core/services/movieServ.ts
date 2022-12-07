import { AXIOS_INSTANCE_GENERATOR } from './configURL';

// import local constants
import localConst from '../constants/localConst';
import {
  InterfaceMovie,
  InterfaceTheaterChain,
} from '../interface/movies/movie.interface';

const MOVIE_SERV = {
  getTheaterChainList: async (): Promise<Array<InterfaceTheaterChain>> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_THEATER_URL()
    ).get('/LayThongTinHeThongRap');
    return data.content;
  },
  getMovieList: async (): Promise<Array<InterfaceMovie>> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_MOVIE_URL()
    ).get(`/LayDanhSachPhim?maNhom=${localConst.maNhom}`);
    return data.content;
  },
};

export default MOVIE_SERV;
