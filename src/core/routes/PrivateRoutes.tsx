// import local interface
import { Navigate, Outlet } from 'react-router-dom';

// import local services
import LOCAL_SERV from '../services/localServ';

export const PrivateRoutes = () => {
  const token = LOCAL_SERV.token.get();
  return token ? <Outlet /> : <Navigate to={'login'} />;
};
