import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FiMoon, FiSun } from "react-icons/fi";
import main from "../assets/logos/main.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <header className=" h-34 fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out">
      <nav
        className={`flex items-center justify-between px-6 lg:px-20 py-4 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white shadow-lg dark:bg-gray-900"
            : "bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-xl mt-6 mx-4 lg:mx-20"
        }`}
      >
        {/* Logo */}
        <img src={main} alt="Logo" className="h-10" />

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center gap-20 text-lg">
          {["Home", "About", "FAQs", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item}`}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `relative font-semibold text-lg transition-colors duration-200 ${
                    isActive
                      ? "text-black dark:text-white border-b-2 border-secondary dark:border-white"
                      : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* CTA Button */}
          <button
            onClick={() => navigate("/Contact")}
            className="hidden lg:inline-block px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition"
          >
            Get Started
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-2xl text-gray-800 dark:text-gray-200"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-2xl"
            aria-label="Open Menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white dark:bg-gray-900 bg-opacity-95 transition-opacity duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-3xl text-gray-800 dark:text-white"
          aria-label="Close Menu"
        >
          <IoClose />
        </button>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-medium">
          {["Home", "About", "FAQs", "Contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={item === "Home" ? "/" : `/${item}`}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `relative font-semibold text-lg transition-colors duration-200 ${
                    isActive ? "text-black dark:text-white border-b-2 border-secondary dark:border-white" : "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm"
                  } transition`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
          {/* Mobile CTA */}
          <button
            onClick={() => {
              navigate("/Contact");
              setIsMenuOpen(false);
            }}
            className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Get Started
          </button>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
