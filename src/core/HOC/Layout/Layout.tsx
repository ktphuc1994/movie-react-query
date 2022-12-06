import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';

// import local constants
import { webColor } from '../../constants/colorConst';

// import local components
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

export const Layout = () => {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/register') {
    return <Outlet />;
  }
  return (
    <div className="text-white" style={{ background: webColor.bgPrimary }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
