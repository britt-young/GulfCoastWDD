import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import favicon from "../assets/icons/favicon-dark.ico"
import logoDark from "../assets/logos/nav-logo-dark.svg"

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const servicesRef = useRef(null);
  const navigate = useNavigate();

  // --- Sync theme with <html> class and localStorage ---
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const initialTheme =
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // --- Close Services dropdown on outside click ---
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- On scroll ---
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Services", "FAQs", "Contact"];
  const getPath = (item) => (item === "Home" ? "/" : `/${item}`);

  const linkBaseClasses =
    "text-white relative font-alt text-lg transition-all duration-200 after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300";
  const activeClasses = "after:w-full";
  const inactiveClasses = "hover:text-alt hover:after:w-full";

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out h-auto">
      <nav
        className={`flex items-center justify-between px-0 lg:px-10 py-4 transition-all duration-300 ease-in-out font-normal ${
          isScrolled
            ? "shadow-lg bg-alternate dark:bg-dark "
            : "bg-white/10 text-white mt-6 mx-4 lg:mx-10 rounded-2xl"
        }`}
      >
        {/* Logo */}
        <div className="mx-4 lg:mx-0">

          {/* Dark Mode Logo */}
          <img
            src={logoDark}
            alt="logo"
            className="w-full object-cover block"
          />
        </div>

        {/* --- Right Section --- */}
        <div className="flex items-center space-x-8">
          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex gap-10 items-center">
            {navItems.map((item) => {
              const isServices = item === "Services";
              return (
                <li
                  key={item}
                  className="relative"
                  ref={isServices ? servicesRef : null}
                >
                  {isServices ? (
                    <>
                      {/* Services Dropdown Trigger */}
                      <div
                        onClick={() => setIsServicesOpen((prev) => !prev)}
                        className={`${linkBaseClasses} cursor-pointer inline-flex items-center gap-1 ${
                          isScrolled
                            ? "text-black dark:text-white"
                            : "text-white"
                        } ${isServicesOpen ? activeClasses : inactiveClasses}`}
                      >
                        Services
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
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
                        <ul className="absolute left-0 mt-2 w-48 rounded-2xl bg-white dark:bg-slate-800 shadow-lg divide-y divide-gray-200 dark:divide-gray-700 z-50">
                          {[
                            {
                              name: "User-Friendly Features",
                              path: "/services/features",
                            },
                            {
                              name: "Page Speed Optimization",
                              path: "/services/optimization",
                            },
                            {
                              name: "Responsive Design",
                              path: "/services/responsiveness",
                            },
                            {
                              name: "Cyber Security",
                              path: "/services/security",
                            },
                            { name: "On-Page SEO", path: "/services/seo" },
                            {
                              name: "Shopify Integration",
                              path: "/services/shopify",
                            },
                          ].map((srv) => (
                            <li key={srv.name}>
                              <NavLink
                                to={srv.path}
                                onClick={() => setIsServicesOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700"
                              >
                                {srv.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={getPath(item)}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `${linkBaseClasses} ${
                          isScrolled
                            ? "text-black dark:text-white"
                            : "text-white"
                        } ${isActive ? activeClasses : inactiveClasses}`
                      }
                    >
                      {item}
                    </NavLink>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => navigate("/contact")}
            className="hidden lg:inline-block bg-alt text-black dark:bg-alt dark:text-black transition hover:bg-alternate hover:text-white dark:hover:bg-white"
          >
            Get A Quote
          </button>

          {/* Dark Mode Slider Toggle (Desktop) */}
          <div className="hidden lg:flex">
            <SliderToggle selected={theme} setSelected={setTheme} />
          </div>

          {/* Hamburger Toggle (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-8 h-8 flex items-center justify-center bg-transparent mr-2 shadow-none"
            aria-label="Toggle Menu"
          >
            <GiHamburgerMenu
              className={`absolute text-2xl transition-all duration-300 transform ${
                isMenuOpen
                  ? "opacity-0 rotate-90 scale-75"
                  : "opacity-100 rotate-0 scale-100"
              }
              ${isScrolled ? "text-black" : "text-white"}`}
            />
            <IoClose
              className={`absolute text-3xl text-white dark:text-white  transition-all duration-300 transform ${
                isMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-75"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* --- Mobile Overlay --- */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* --- Mobile Sidebar --- */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-dark dark:bg-slate-900 shadow-lg transform transition-transform duration-300 ease-in-out flex flex-col ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 mt-2 flex border-b border-alternate dark:border-gray-700">
            <img src={favicon} alt="logo" className="h-full w-fit"/>
        </div>

        <ul className="flex flex-col mt-10 px-6 space-y-4 text-lg font-medium ">
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

        <div className="flex justify-start mt-10 px-6">
          <button
            onClick={() => {
              navigate("/contact");
              setIsMenuOpen(false);
            }}
            className="px-6 py-2 rounded-2xl transition"
          >
            Get Started
          </button>
        </div>

        {/* Dark Mode Toggle for Mobile */}
        <div className="flex justify-start mt-6 px-6 h-8">
          <SliderToggle selected={theme} setSelected={setTheme} />
        </div>
      </div>
    </header>
  );
};

// === Animated Framer Motion Slider Toggle ===
const SliderToggle = ({ selected, setSelected }) => {
  return (
    <div className="relative flex w-fit items-center rounded-2xl transition-all duration-300 ease-in-out bg-gray-300 shadow-lg dark:shadow-white/30 dark:shadow-md">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "light"
            ? "text-black bg-transparent"
            : "text-black bg-transparent"
        }`}
        onClick={() => setSelected("light")}
      >
        <FiSun className="relative z-10 text-lg md:text-sm " />
        {/* <span className="relative z-10 lowercase">Light-mode</span> */}
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "dark"
            ? "text-black bg-transparent"
            : "text-black bg-transparent"
        }`}
        onClick={() => setSelected("dark")}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        {/* <span className="relative z-10 lowercase">Dark-mode</span> */}
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-2xl bg-alt"
        />
      </div>
    </div>
  );
};

export default NavBar;
