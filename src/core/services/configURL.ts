import axios from 'axios';

import LOCAL_SERV from './localServ';

const AXIOS_INSTANCE_GENERATOR = (URL: string) => {
  const config = {
    baseURL: URL,
    headers: {
      Authorization: 'Bearer ' + LOCAL_SERV.token.get(),
    },
  };
  return axios.create(config);
};

export { AXIOS_INSTANCE_GENERATOR };
