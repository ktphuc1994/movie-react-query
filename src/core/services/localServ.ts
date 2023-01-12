// import local constants
import localConst from '../constants/localConst';

const LOCAL_SERV = {
  token: {
    get: (): string | null => {
      const token: string | null = localStorage.getItem(
        localConst.AUTH_LOCAL_STORE_KEY,
      );
      return token ? JSON.parse(token) : null;
    },
    set: (authorization: string): void => {
      localStorage.setItem(
        localConst.AUTH_LOCAL_STORE_KEY,
        JSON.stringify(authorization),
      );
    },
    unset: (): void => {
      localStorage.removeItem(localConst.AUTH_LOCAL_STORE_KEY);
    },
  },
  // user: {
  //   get: (): string | null => {
  //     const userInfo: string | null = localStorage.getItem(
  //       localConst.USER_LOCAL_STORE_KEY,
  //     );
  //     return userInfo ? JSON.parse(userInfo) : null;
  //   },
  //   set: (userInfo: InterfaceUser): void => {
  //     localStorage.setItem(
  //       localConst.USER_LOCAL_STORE_KEY,
  //       JSON.stringify(userInfo),
  //     );
  //   },
  //   unset: (): void => {
  //     localStorage.removeItem(localConst.USER_LOCAL_STORE_KEY);
  //   },
  // },
};

export default LOCAL_SERV;
