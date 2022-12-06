import { AXIOS_INSTANCE_GENERATOR } from './configURL';

// import local constants
import localConst from '../constants/localConst';
import { InterfaceUser } from '../interface/user/user.interface';

const userServ = {
  postLogin: async (loginInfo: {
    taiKhoan: string;
    matKhau: string;
  }): Promise<InterfaceUser> => {
    const { data } = await AXIOS_INSTANCE_GENERATOR(
      localConst.BASE_USER_URL()
    ).post('/DangNhap', loginInfo);
    return data.content;
  },
};

export default userServ;
