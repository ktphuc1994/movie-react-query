import 'antd/dist/reset.css';
import 'antd/dist/antd.css';
import './App.css';

import { Route, Routes } from 'react-router-dom';

// import local Components
import { Layout } from './core/HOC/Layout/Layout';
import { PrivateRoutes } from './core/routes/PrivateRoutes';
import { LoadingScreen } from './core/Components/LoadingScreen/LoadingScreen';
import { LoginPage } from './Pages/RegisterAndLogin/LoginPage';
import { RegisterPage } from './Pages/RegisterAndLogin/RegisterPage';
import { HomePage } from './Pages/Home/HomePage';

// import local components

function App() {
  return (
    <>
      <LoadingScreen />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          {/* Private routes */}
          <Route element={<PrivateRoutes />}>
            <Route index element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
