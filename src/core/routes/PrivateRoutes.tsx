// import local interface
import { Navigate, Outlet } from 'react-router-dom';

// import local services
import LOCAL_SERV from '../services/localServ';

export const PrivateRoutes = () => {
  // const userInfo = LOCAL_SERV.user.get();
  // return userInfo ? <Outlet /> : <Navigate to={'login'} />;
  return <Outlet />;
};
