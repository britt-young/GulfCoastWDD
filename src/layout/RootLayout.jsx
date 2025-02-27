import React from "react";
import Navbar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="bg-blue-900 min-h-screen">{/* THIS IS THE MAIN BG! Use min-h-screen to fill the viewport */}
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <div className="bg-black h-[100px] text-white">FOOTER</div>
      {/* <Footer /> */}
    </div>
  );
};

export default RootLayout;
