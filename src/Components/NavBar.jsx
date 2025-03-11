import { React, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

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
        className={`flex justify-between items-center px-4 transition-all duration-200 ease-in-out ${
          isScrolled
            ? "fixed top-0 left-0 w-full bg-white shadow-md z-50 rounded-none m-0 scroll-smooth"
            : "lg:rounded-3xl rounded-xl bg-white shadow-xl z-50"
        }`}
      >
        {/* Logo or brand */}
        <img src="/logo.png" alt="logo" className="h-12" />

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden m-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <GiHamburgerMenu />
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-10 uppercase">
          <li className="hover:font-bold hover:text-purple-800">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:font-bold hover:text-purple-800">
            <NavLink to="/About">About</NavLink>
          </li>
          <li className="hover:font-bold hover:text-purple-800">
            <NavLink to="/FAQs">FAQs</NavLink>
          </li>
          <li className="hover:font-bold hover:text-purple-800">
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>

        {/* Sign Up Button (Desktop) */}
        <button
          className="hidden lg:flex items-center justify-center m-5"
          onClick={() => navigate("/Contact")}
        >
          Sign Up
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} lg:rounded-3xl rounded-xl bg-white shadow-xl -z-40 -mt-5 py-8`}>
        <ul className="flex flex-col space-y-4 px-4 py-2 uppercase items-center">
          <li className="hover:font-bold hover:text-purple-800">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:font-bold hover:text-purple-800">
            <NavLink to="/About">About</NavLink>
          </li>
          <li className="hover:font-bold hover:text-purple-800">
            <NavLink to="/FAQs">FAQs</NavLink>
          </li>
          <li className="hover:font-bold hover:text-purple-800">
            <NavLink to="/Contact">Contact</NavLink>
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
