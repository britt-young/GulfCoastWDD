import { React, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5"; // Close icon
import { FiMoon, FiSun } from "react-icons/fi"; // Moon and Sun icons for dark/light mode

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Add or remove dark mode class to the body based on the state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="">
      <nav
        className={`flex justify-between items-center px-4 transition-all duration-200 ease-in-out ${
          isScrolled
            ? "fixed top-0 left-0 w-full bg-white text-black shadow-lg shadow-white/50 z-50 rounded-none m-0 scroll-smooth "
            : "lg:rounded-3xl rounded-xl bg-white text-black shadow-2xl shadow-white/50 z-50 my-8 lg:mx-40 mx-8"
        }`}
      >
        {/* Logo or brand (far left) */}
        <img src="/logo.png" alt="logo" className="h-24" />

        {/* Desktop menu (centered) */}
        <ul className="hidden lg:flex space-x-10 uppercase mx-auto">
          <li className="hover:font-bold ">
            <NavLink to="/"  className={({ isActive }) => (isActive ? "font-bold" : "hover:font-bold")} onClick={handleLinkClick}>
              Home
            </NavLink>
          </li>
          <li className="hover:font-bold ">
            <NavLink to="/About"  className={({ isActive }) => (isActive ? "font-bold" : "hover:font-bold")} onClick={handleLinkClick}>
              About
            </NavLink>
          </li>
          <li className="hover:font-bold ">
            <NavLink to="/FAQs" onClick={handleLinkClick}>
              FAQs
            </NavLink>
          </li>
          <li className="hover:font-bold ">
            <NavLink to="/Contact"  className={({ isActive }) => (isActive ? "font-bold" : "hover:font-bold")} onClick={handleLinkClick}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Right side (Sign Up button and Dark Mode toggle) */}
        {/* Sign Up Button (Desktop) */}
        <button
          className="hidden lg:flex items-center m-0"
          onClick={() => navigate("/Contact")}
        >
          Sign Up
        </button>

        {/* Dark Mode Toggle */}
        <div onClick={toggleDarkMode} className="text-2xl mx-2 cursor-pointer">
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden mx-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <GiHamburgerMenu />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#79ABAC] bg-opacity-90 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Close button (X) */}
        <button
          className="absolute top-4 right-4 text-3xl text-gray-700"
          onClick={() => setIsMenuOpen(false)}
        >
          <IoClose />
        </button>

        <ul className="flex flex-col space-y-6 items-center justify-center h-full uppercase text-xl">
          <li className="hover:font-bold ">
            <NavLink to="/"  className={({ isActive }) => (isActive ? "font-bold" : "hover:font-bold")} onClick={handleLinkClick}>
              Home
            </NavLink>
          </li>
          <li className="hover:font-bold ">
            <NavLink to="/About"  className={({ isActive }) => (isActive ? "font-bold" : "hover:font-bold")} onClick={handleLinkClick}>
              About
            </NavLink>
          </li>
          <li className="hover:font-bold ">
            <NavLink to="/FAQs"  className={({ isActive }) => (isActive ? "font-bold" : "hover:font-bold")} onClick={handleLinkClick}>
              FAQs
            </NavLink>
          </li>
          <li className="hover:font-bold ">
            <NavLink to="/Contact"  className={({ isActive }) => (isActive ? "font-bold" : "hover:font-bold")} onClick={handleLinkClick}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Sign Up Button (Mobile) */}
        <div className="flex justify-center mt-5">
          <button
            className="p-2 w-full max-w-xs cursor-pointer"
            onClick={() => {
              navigate("/Contact");
              setIsMenuOpen(false); // Close the menu after clicking
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
