import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

// import axios
import { AxiosError } from 'axios';

// import react query
import { useQuery, useQueryClient } from '@tanstack/react-query';

// import local services
import LOCAL_SERV from '../../core/services/localServ';
import USER_SERV from '../../core/services/userServ';

// import local Components
import NotifyModal from '../../core/Components/Utils/NotifyModal';

// import ANTD Components
import { Button, Form, Input, notification } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

// import local interfaces
import { InterfaceUserLogin } from '../../core/interface/user/user.interface';

// import lottie
import Lottie from 'lottie-react';
import lottie_flyingRocket from '../../core/assets/lottie/lottie_flyingRocket.json';

// import local constants
import { webColor } from '../../core/constants/colorConst';

const LoginPage = () => {
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>('');
  let navigate = useNavigate();

  const queryClient = useQueryClient();

  // Notification
  type NotificationType = 'success' | 'info' | 'warning' | 'error';
  const openNotification = (type: NotificationType) => {
    notification[type]({
      message: (
        <span className="font-semibold text-lg">Đăng nhập thành công</span>
      ),
      description: 'Chuyển hướng về trang chủ',
      placement: 'top',
      duration: 3,
    });
  };

  const { data: user } = useQuery(['user'], USER_SERV.getUserInfo, {
    staleTime: 3600000,
    cacheTime: 3600000,
    retry: (failureCount, err) => {
      if (err instanceof AxiosError) {
        return false;
      }
      if (failureCount === 3) {
        return false;
      }
      return true;
    },
  });

  const onFinish = (values: InterfaceUserLogin) => {
    USER_SERV.postLogin(values)
      .then((res) => {
        LOCAL_SERV.token.set(res);
        openNotification('success');
        setTimeout(() => {
          queryClient.invalidateQueries(['user']);
          navigate('/');
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
        setIsNotifyModalOpen(true);
        if (err.response.data.content) {
          setErrMessage(err.response.data.content);
        } else {
          setErrMessage('Unexpected Error. Please try again later');
        }
      });
  };

  // HANDLE Notify Modal
  let handleOKClick = () => {
    setIsNotifyModalOpen(false);
  };
  let handleCancelClick = () => {
    setIsNotifyModalOpen(false);
  };

  // RENDER trang Login Page khi đã đăng nhập rồi
  const renderAlreadyLoginPage = () => (
    <div className="text-center">
      <p className="mb-5 text-3xl">
        Xin chào <span className="font-bold text-red-500">{user?.hoTen}</span>
      </p>
      <p className="text-2xl">Bạn đã đăng nhập thành công</p>
      <button
        type="button"
        className="px-5 py-2.5 bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 rounded-lg focus:ring-red-900 font-medium text-white text-xl transition duration-300"
        onClick={() => {
          navigate('/');
        }}
      >
        Trở về Trang chủ
      </button>
    </div>
  );

  return (
    <>
      <div className="text-white" style={{ background: webColor.bgPrimary }}>
        <div className="container mx-auto w-screen h-screen flex justify-center items-center">
          {user ? (
            renderAlreadyLoginPage()
          ) : (
            <>
              <div className="relative w-full md:w-1/2 h-full px-10 flex justify-center items-center">
                <p
                  className="absolute top-10 left-0 right-0 text-center text-white text-xl sm:text-2xl md:text-3xl"
                  style={{ color: webColor.bgPrimary }}
                >
                  Don't be afraid of the Dark
                </p>
                <div className="w-full">
                  <h1 className="mb-6 text-3xl text-white">Đăng nhập</h1>
                  <Form
                    name="normal_login"
                    className="login-form w-full"
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập email!',
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Email"
                        size="large"
                      />
                    </Form.Item>
                    <Form.Item
                      name="matKhau"
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập Mật khẩu',
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Mật khẩu"
                        size="large"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        danger={true}
                        htmlType="submit"
                        className="login-form-button mt-3"
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          height: 'initial',
                          marginRight: '20px',
                        }}
                      >
                        Đăng nhập
                      </Button>
                      <NavLink
                        className="text-[16px] text-red-500 hover:text-red-400"
                        to="/register"
                      >
                        Đăng ký
                      </NavLink>
                    </Form.Item>
                  </Form>
                </div>
              </div>
              <div className="w-1/2 h-full hidden md:flex justify-center items-center overflow-hidden">
                <Lottie animationData={lottie_flyingRocket} loop={true} />
              </div>
            </>
          )}
        </div>
      </div>
      <NotifyModal
        isNotifyModalOpen={isNotifyModalOpen}
        handleOKClick={handleOKClick}
        handleCancelClick={handleCancelClick}
      >
        {errMessage}
      </NotifyModal>
    </>
  );
};

export default LoginPage;
