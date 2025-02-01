import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router';

function Layout() {
  return (
    <div className='h-screen w-full'>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
