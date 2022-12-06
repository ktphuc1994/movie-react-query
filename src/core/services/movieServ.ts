import { AXIOS_INSTANCE_GENERATOR } from './configURL';

// import local constants
import localConst from '../constants/localConst';

const MOVIE_SERV = {
  getMovieList: async () => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_MOVIE_URL()
    ).get(`/LayDanhSachPhim?maNhom=${localConst.maNhom}`);
    return data.content;
  },
};

export default MOVIE_SERV;
