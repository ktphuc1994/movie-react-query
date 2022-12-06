import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// import react query
import { useQuery, useQueryClient } from '@tanstack/react-query';

// import local services
import LOCAL_SERV from '../../services/localServ';

// import local components
import NotifyModal from '../Utils/NotifyModal';

// import ANTD Components
import { message } from 'antd';

const UserNav = () => {
  const navigate = useNavigate();
  const [isNotifyModalOpen, setNotifyModalOpen] = useState(false);

  // let dispatch = useDispatch();
  // let user = useSelector((state) => state.userSlice.user);
  const queryClient = useQueryClient();
  const localUser = useQuery(['localUser'], LOCAL_SERV.user.get, {
    staleTime: 3600000,
  });

  let handleLogOut = () => {
    LOCAL_SERV.user.unset();
    queryClient.invalidateQueries(['localUser']);
    setNotifyModalOpen(false);
    message.success('Đăng xuất thành công', 2);
    navigate('/');
  };

  let renderContent = () => {
    if (localUser.data) {
      return (
        <div className="flex flex-col justify-center text-center">
          <span className="text-white text-[16px] md:text-lg">
            Xin chào{' '}
            <NavLink to="/profile" className="group inline-block ml-2">
              <span className="font-bold text-lg md:text-xl text-red-500 group-hover:text-indigo-500 transition-all duration-700">
                {localUser.data.hoTen}
              </span>
            </NavLink>
          </span>
          <button
            type="button"
            className="px-4 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg hover:border-gray-600 focus:ring-4 focus:ring-gray-700 focus:outline-none font-medium text-sm text-white"
            onClick={() => {
              setNotifyModalOpen(true);
            }}
          >
            Đăng xuất
          </button>
        </div>
      );
    }
    return (
      <div>
        <NavLink to="/login">
          <button
            type="button"
            className="px-2 lg:px-5 py-2.5 mr-2 bg-red-600 hover:bg-red-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-red-900 font-medium text-xs lg:text-sm text-white transition duration-300"
          >
            Đăng nhập
          </button>
        </NavLink>
        <NavLink to="/register">
          <button
            type="button"
            className="px-2 lg:px-5 py-2.5 bg-transparent border-2 border-red-600 hover:border-red-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-red-900 font-medium text-xs lg:text-sm text-red-600 hover:text-red-700 transition duration-300"
          >
            Đăng ký
          </button>
        </NavLink>
      </div>
    );
  };
  return (
    <>
      {renderContent()}
      <NotifyModal
        isNotifyModalOpen={isNotifyModalOpen}
        handleCancelClick={() => {
          setNotifyModalOpen(false);
        }}
        handleOKClick={handleLogOut}
      >
        Bạn có muốn đăng xuất?
      </NotifyModal>
    </>
  );
};

export default UserNav;
