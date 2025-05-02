import React from "react";
import Navbar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      {/* THIS IS THE MAIN BG! Use min-h-screen to fill the viewport */}
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer className="" />
    </div>
  );
};

export default RootLayout;

// bg-gradient-to-tr from-[#1f3b47] from-55% via-[#406779] via-70% to-[#3d8069] to-85%
