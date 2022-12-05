// import local constants
import localConst from '../constants/localConst';
import { InterfaceUser } from '../interface/user/user.interface';

const LOCAL_SERV = {
  user: {
    get: (): InterfaceUser | null => {
      const userInfo: string | null = localStorage.getItem(
        localConst.USER_LOCAL_STORE_KEY
      );
      return userInfo ? JSON.parse(userInfo) : null;
    },
    unset: (): void => {
      localStorage.removeItem(localConst.USER_LOCAL_STORE_KEY);
    },
  },
};

export default LOCAL_SERV;