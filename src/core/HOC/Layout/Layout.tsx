import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';

// import local components
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';

export const Layout = () => {
  const location = useLocation();
  if (location.pathname === '/login' || location.pathname === '/register') {
    return <Outlet />;
  }
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
