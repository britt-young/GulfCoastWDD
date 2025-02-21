import React from 'react';
import Navbar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="bg-green-600 min-h-screen"> {/* Use min-h-screen to fill the viewport */}
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
