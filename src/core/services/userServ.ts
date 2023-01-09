import { AXIOS_INSTANCE_GENERATOR } from './configURL';

// import local service
import LOCAL_SERV from './localServ';

// import local interfaces
import { InterfaceUser } from '../interface/user/user.interface';

// import local constants
import localConst from '../constants/localConst';

const userServ = {
  postLogin: async (loginInfo: {
    email: string;
    matKhau: string;
  }): Promise<string> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(localConst.BASE_URL).post(
      '/api/login',
      loginInfo,
    );
    return data.content.Authorization;
  },

  postRegister: async () => {},

  getUserInfo: async (): Promise<InterfaceUser | null> => {
    const token = LOCAL_SERV.token.get();
    if (token) {
      const { data } = await AXIOS_INSTANCE_GENERATOR(
        localConst.BASE_USER_URL(),
      ).get('/ThongTinTaiKhoan');
      return data.content;
    }
    return null;
  },
};

export default userServ;
