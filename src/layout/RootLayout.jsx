import React from "react";
import Navbar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen dark:bg-linear-90 from-[#1f3b47] to-[#3d8069]">{/* THIS IS THE MAIN BG! Use min-h-screen to fill the viewport */}
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer className=""/>
    </div>
  );
};

export default RootLayout;
