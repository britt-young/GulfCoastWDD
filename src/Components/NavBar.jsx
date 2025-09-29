import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FiMoon, FiSun } from "react-icons/fi";
import main from "../assets/logos/Nav-logo-light.svg";

const NavBar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "FAQs", "Contact"];
  const getPath = (item) => (item === "Home" ? "/" : `/${item}`);

  const linkBaseClasses =
    "relative font-alt text-lg transition-colors duration-200 text-black dark:text-white";
  const activeClasses =
    "font-semibold";
  const inactiveClasses =
    "font-normal hover:text-alternate";

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out h-fit ">
      <nav
        className={`bg-white flex items-center justify-between px-6 lg:px-10 py-4 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "shadow-lg"
            : "backdrop-blur-lg mt-6 mx-4 lg:mx-10 rounded-sm bg-white/70"
        }`}
      >
        {/* Logo */}
        <img src={main} alt="Logo" className="lg:h-14" />

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-20">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={getPath(item)}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `${linkBaseClasses} ${
                    isActive ? activeClasses : inactiveClasses
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          {/* CTA */}
          <button
            onClick={() => navigate("/Contact")}
            className="hidden lg:inline-block hover:bg-alternate hover:text-white"
          >
            Get Started
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="bg-transparent shadow-none text-2xl p-0 text-blue-10 hover:text-blue-11 transition-colors duration-200 dark:text-blue-11 dark:hover:text-blue-10"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden text-2xl bg-transparent shadow-none p-0"
            aria-label="Open Menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-95 transition-opacity duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 text-3xl bg-transparent shadow-none p-0"
          aria-label="Close Menu"
        >
          <IoClose />
        </button>

        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={getPath(item)}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `${linkBaseClasses} ${
                    isActive ? activeClasses : inactiveClasses
                  }`
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
            className="mt-4 px-6 py-2 hover:text-white rounded-lg hover:bg-alternate transition"
          >
            Get Started
          </button>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
