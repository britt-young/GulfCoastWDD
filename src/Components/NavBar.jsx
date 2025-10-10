import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FiMoon, FiSun } from "react-icons/fi";
import main from "../assets/logos/Nav-logo-light.svg";

const NavBar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // services dropdown
  const servicesRef = useRef(null);
  const navigate = useNavigate();

  // Close Services dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "FAQs", "Contact"];
  const getPath = (item) => (item === "Home" ? "/" : `/${item}`);

  const linkBaseClasses =
    "relative font-alt text-lg transition-colors duration-200";
  const activeClasses = "font-semibold";
  const inactiveClasses = "font-normal hover:font-semibold";

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out h-fit">
      <nav
        className={`flex items-center justify-between px-0 lg:px-10 py-4 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "shadow-lg bg-white dark:bg-dark dark:text-white"
            : "bg-white/10 dark:bg-dark/20 text-white mt-6 mx-4 lg:mx-10"
        }`}
      >
        {/* Logo */}
        <img src={main} alt="Logo" className="lg:h-10 h-8" />

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex gap-10 items-center">
            {navItems.map((item) =>
              item === "Services" ? (
                <li key={item} className="relative" ref={servicesRef}>
                  {/* Dropdown Trigger */}
                  <div
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    className="cursor-pointer inline-flex items-center gap-1 font-alt text-lg font-normal hover:font-semibold"
                  >
                    Services
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {/* Dropdown Menu */}
                  {isServicesOpen && (
                    <ul className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg divide-y divide-gray-200 z-50">
                      <li>
                        <NavLink
                          to="/services/features"
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          User-Friendly Features
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/optimization"
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Page Speed Optimization
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/responsiveness"
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Responsive Design
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/security"
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Cyber Security
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/seo"
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          On-Page SEO
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services/shopify"
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Shopify Integration
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </li>
              ) : (
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
              )
            )}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => navigate("/Contact")}
            className="hidden lg:inline-block bg-alt text-black hover:bg-white transition"
          >
            Get Started
          </button>

          {/* Dark Mode Toggle (desktop only) */}
          <button
            onClick={toggleDarkMode}
            className="hidden lg:inline-block bg-transparent text-2xl text-gray-400 hover:scale-120 transition duration-200 shadow-none"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* Hamburger / Close Toggle (mobile only) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-8 h-8 flex items-center justify-center bg-alternate"
            aria-label="Toggle Menu"
          >
            {/* Hamburger Icon */}
            <GiHamburgerMenu
              className={`absolute text-2xl text-white transition-all duration-300 transform ${
                isMenuOpen
                  ? "opacity-0 rotate-90 scale-75"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />

            {/* Close Icon */}
            <IoClose
              className={`absolute text-3xl text-white  transition-all duration-300 transform ${
                isMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-75"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with Logo + Close (Close is hidden since it's now morphing into hamburger) */}
        <div className="p-4 mt-6 flex border-b border-gray-200 dark:border-gray-700">
          <img src={main} alt="Logo" className="h-8" />
        </div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col mt-10 px-6 space-y-4 text-lg font-medium">
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

        {/* Mobile CTA */}
        <div className="flex justify-start mt-10 px-6">
          <button
            onClick={() => {
              navigate("/Contact");
              setIsMenuOpen(false);
            }}
            className="px-6 py-2 rounded-lg bg-alternate text-white hover:bg-alt hover:text-black transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
