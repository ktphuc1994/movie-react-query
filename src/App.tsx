import 'antd/dist/reset.css';
import './App.css';

import { Route, Routes } from 'react-router-dom';

// import local Components
import { Layout } from './core/HOC/Layout/Layout';
import { PrivateRoutes } from './core/routes/PrivateRoutes';
import { LoadingScreen } from './core/Components/LoadingScreen/LoadingScreen';
import LoginPage from './Pages/RegisterAndLogin/LoginPage';
import RegisterPage from './Pages/RegisterAndLogin/RegisterPage';
import HomePage from './Pages/Home/HomePage';
import UnderDevelopedPage from './Pages/UnderDevelopedPage/UnderDevelopedPage';
import BookingPage from './Pages/BookingPage/BookingPage';
import SelectSeat from './Pages/BookingPage/SelectSeat/SelectSeat';
import DetailMovie from './Pages/MoviesPage/DetailMovie';
import TheatresListPage from './Pages/TheatrePage/TheatresListPage';

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
          <Route path="detail/:maPhim" element={<DetailMovie />} />
          <Route path="booking/:maPhim" element={<BookingPage />} />
          <Route path="theatres" element={<TheatresListPage />} />

          {/* Private routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="select-seat/:maLichChieu" element={<SelectSeat />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
