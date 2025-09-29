
import { useNavigate } from "react-router-dom";
import {PhoneArrowDownLeftIcon, EnvelopeIcon, MapPinIcon} from "@heroicons/react/24/solid";
import logo from "../assets/logos/Footer-logo-light.svg"


const Footer = () => {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/Contact"); // Navigate to the "/contact" route
    };
  return (
    <div className="bg-gray-100 grid grid-cols-1 lg:grid-cols-2 p-10 lg:px-80 lg:gap-40 gap-20 z-0">
      <div className="flex flex-col lg:items-start justify-between py-5 lg:order-first order-last">
        <img src={logo} alt="logo" className="h-50"/>
        <p className="my-5 mr-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris </p>
          <button onClick={handleClick}>Get Started</button>
      </div>
      <div className="flex flex-col lg:items-start py-5 lg:order-last order-first">
        <h4 className="mb-4 text-2xl border-l-6 border-main pl-2">Contact Us</h4>
        <div>
        <p className="my-1"><PhoneArrowDownLeftIcon className="inline-block w-4 me-2 text-alternate" />+123 456 7890</p>
        <p className="my-1 mr-10"><EnvelopeIcon className="inline-block w-4 me-2 text-alternate" />gulfcoastwdd@protonmail.com</p>
        <p className="my-1"><MapPinIcon className="inline-block w-4 me-2 text-alternate" />United States</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
