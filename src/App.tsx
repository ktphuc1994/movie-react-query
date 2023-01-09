import 'antd/dist/reset.css';
import './App.css';

import { Route, Routes } from 'react-router-dom';

// import local Components
import { Layout } from './core/HOC/Layout/Layout';
import { PrivateRoutes } from './core/routes/PrivateRoutes';
import { LoadingScreen } from './core/Components/LoadingScreen/LoadingScreen';
import LoginPage from './Pages/RegisterAndLogin/LoginPage';
import { RegisterPage } from './Pages/RegisterAndLogin/RegisterPage';
import HomePage from './Pages/Home/HomePage';
import UnderDevelopedPage from './Pages/UnderDevelopedPage/UnderDevelopedPage';
import BookingPage from './Pages/BookingPage/BookingPage';
import SelectSeat from './Pages/BookingPage/SelectSeat/SelectSeat';
import BookingConfirmation from './Pages/BookingPage/BookingConfirmation';

// import local components

function App() {
  return (
    <>
      <LoadingScreen />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="under-development" element={<UnderDevelopedPage />} />
          <Route path="booking/:maPhim" element={<BookingPage />} />

          {/* Private routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="select-seat/:maLichChieu" element={<SelectSeat />} />
            <Route
              path="booking-confirm/:maLichChieu"
              element={<BookingConfirmation />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
