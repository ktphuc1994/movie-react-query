// import local constants
import localConst from '../constants/localConst';

const LOCAL_SERV = {
  token: {
    get: (): string | null => {
      const token: string | null = localStorage.getItem(
        localConst.AUTH_LOCAL_STORE_KEY
      );
      return token ? JSON.parse(token) : null;
    },
    set: (authorization: string): void => {
      localStorage.setItem(
        localConst.AUTH_LOCAL_STORE_KEY,
        JSON.stringify(authorization)
      );
    },
    unset: (): void => {
      localStorage.removeItem(localConst.AUTH_LOCAL_STORE_KEY);
    },
  },
};

export default LOCAL_SERV;
