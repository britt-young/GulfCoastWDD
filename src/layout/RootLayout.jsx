import React from 'react';
import Navbar from '../Components/NavBar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="bg-blue-200 min-h-screen mx-auto"> {/* Use min-h-screen to fill the viewport */}
      <Navbar />
      <Outlet />
      <div className="bg-black h-[100px] text-white">FOOTER</div>
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
