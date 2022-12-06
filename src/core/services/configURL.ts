import axios from 'axios';

import localConst from '../constants/localConst';
import LOCAL_SERV from './localServ';

const AXIOS_INSTANCE_GENERATOR = (URL: string) => {
  const config = {
    baseURL: URL,
    headers: {
      TokenCybersoft: localConst.CYBERSOFT_TOKEN,
      Authorization: 'Bearer ' + LOCAL_SERV.user.get()?.accessToken,
    },
  };
  return axios.create(config);
};

export { AXIOS_INSTANCE_GENERATOR };
