import { useNavigate, Link } from "react-router-dom";
import {
  PhoneArrowDownLeftIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import logo from "../assets/logos/Footer-logo-light.svg";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact"); // Navigate to the "/contact" route
  };
  return (
    <div className="bg-white grid grid-cols-1 lg:grid-cols-2 p-10 lg:px-80 lg:gap-40 gap-20 z-0 font-alt">
      {/* brand side */}
      <div className="flex flex-col lg:items-start justify-between py-5 ">
        <img src={logo} alt="logo" className="h-50" />
        <p className="my-5 mr-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris{" "}
        </p>
        <button onClick={handleClick}>Get Started</button>
      </div>
      {/* contact + link side */}
      <div>
        <div className="flex flex-col lg:items-start py-5 ">
          <h4 className="mb-4 text-2xl border-l-6 border-alternate pl-2">
            Contact Us
          </h4>
          <div className="text-left font-normal indent-4">
            <p className="mb-2">
              <PhoneArrowDownLeftIcon className="inline-block w-4 me-2 text-alternate" />
              +123 456 7890
            </p>
            <p className="my-2 mr-10">
              <EnvelopeIcon className="inline-block w-4 me-2 text-alternate" />
              <a href="https://gulfcoastwdd.com/" className="hover:underline">gulfcoastwdd@protonmail.com</a>
            </p>
            <p className="my-2">
              <MapPinIcon className="inline-block w-4 me-2 text-alternate" />
              Tallahassee, FL., USA
            </p>
          </div>
        </div>
        <div className="mt-8">
              <h4 className="text-2xl border-l-6 border-alternate pl-2 mb-2 ">
                Site Map
              </h4>
              <div className="text-left font-normal indent-4">
                <ul>
                  <li className="hover:text-alternate">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:text-alternate">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="hover:text-alternate">
                    <Link to="/events">Event Schedule</Link>
                  </li>
                  <li className="hover:text-alternate">
                    <Link to="/products">Product Library</Link>
                  </li>
                </ul>
              </div>
            </div>
      </div>
    </div>
  );
};

export default Footer;
