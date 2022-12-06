import { AXIOS_INSTANCE_GENERATOR } from './configURL';

// import local constants
import localConst from '../constants/localConst';

const userServ = {
  postLogin: async (loginInfo: { taiKhoan: string; matKhau: string }) => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_USER_URL()
    ).post('/DangNhap', loginInfo);
    return data;
  },
};

export default userServ;
