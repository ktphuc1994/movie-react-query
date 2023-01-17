import { Outlet, useNavigate } from 'react-router-dom';

// import local interface
import NotifyModal from '../Components/Utils/NotifyModal';

// import local services
import LOCAL_SERV from '../services/localServ';

export const PrivateRoutes = () => {
  const navigate = useNavigate();
  const handleOKClick = () => {
    navigate('/login');
  };
  const token = LOCAL_SERV.token.get();
  return token ? (
    <Outlet />
  ) : (
    <NotifyModal
      isCancelHidden={true}
      isNotifyModalOpen={true}
      okText="Đăng nhập"
      handleOKClick={handleOKClick}
    >
      Bạn cần đăng nhập để thực hiện tính năng ngày
    </NotifyModal>
  );
};
