import { React, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className="py-8 lg:px-40 px-8">
      <nav
        className={`flex justify-between items-center px-4 transition-all duration-200 ease-in-out ${isScrolled ? "fixed top-0 left-0 w-full bg-white shadow-md z-50 rounded-none m-0 scroll-smooth" : "lg:rounded-3xl rounded-xl bg-white shadow-xl z-50"}`}
      >
        {/* Logo or brand */}
        <div className="text-xl font-bold">Logo</div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden m-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-4 uppercase">
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/">Page 1</NavLink>
          </li>
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/page2">Page 2</NavLink>
          </li>
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/page3">Page 3</NavLink>
          </li>
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/page4">Page 4</NavLink>
          </li>
          <li className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
            <NavLink to="/page5">Page 5</NavLink>
          </li>
        </ul>

        {/* Sign Up Button (Desktop) */}
        <button
          className="hidden lg:flex items-center justify-center m-5"
          onClick={() => navigate("/page5")}
        >
          Sign Up
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-4 px-4 py-2 uppercase items-center">
          <li>
            <NavLink to="/">Page 1</NavLink>
          </li>
          <li>
            <NavLink to="/page2">Page 2</NavLink>
          </li>
          <li>
            <NavLink to="/page3">Page 3</NavLink>
          </li>
          <li>
            <NavLink to="/page4">Page 4</NavLink>
          </li>
          <li>
            <NavLink to="/page5">Page 5</NavLink>
          </li>
        </ul>

        {/* Sign Up Button (Mobile) */}
  <div className="flex justify-center mt-5"> 
    <button
      className="p-2 w-full max-w-xs cursor-pointer"
      onClick={() => navigate("/page5")}
    >
      Sign Up
    </button>
    </div>
    </div>
  </div>
  );
};

export default NavBar;
