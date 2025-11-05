import Navbar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import ScrollToTop from "../Components/ScrollToTop";
import Silk from "../Components/Silk"; // Import Silk background

const RootLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="relative flex flex-col min-h-screen transition-colors duration-300 ease-in-out overflow-hidden">
      {/* 🌈 Full-page Silk Background */}
      <div className="absolute inset-0 -z-10">
        <Silk/>
      </div>

      <ScrollToTop />

      {/* Navbar on top of the background */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(prev => !prev)}
      />

      {/* Main content area */}
      <main className="flex-1 pt-24 relative z-10">
        <Outlet />
      </main>

      <Footer className="relative z-10" />
    </div>
  );
};

export default RootLayout;

