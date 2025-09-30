import Navbar from "../Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import ScrollToTop from "../Components/ScrollToTop";

const RootLayout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
  document.documentElement.classList.toggle("dark", isDarkMode);
}, [isDarkMode]);

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300 bg-alternate">
      <ScrollToTop />
      {/* THIS IS THE MAIN BG! Use min-h-screen to fill the viewport */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(prev => !prev)} />
      {/* Main content area */}
      <main className="flex-1 pt-24">
        <Outlet />
      </main>
      <Footer className="" />
    </div>
  );
};

export default RootLayout;

