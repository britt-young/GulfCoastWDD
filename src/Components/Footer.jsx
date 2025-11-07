import { useNavigate, Link } from "react-router-dom";
import {
  PhoneArrowDownLeftIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import WaveAnimation from "./WaveAnimation2";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact"); // Navigate to the "/contact" route
  };
  return (
    <section className="relative overflow-hidden bg-white dark:bg-dark">
      <WaveAnimation />
    <div className="pt-40 pb-20 relative grid grid-cols-1 lg:grid-cols-2 lg:px-60 px-5 lg:gap-40 gap-20 z-0 font-alt">

      {/* brand side */}
      <div className="flex flex-col lg:items-start justify-top gap-5 text-white">
        {/* <img src={logo} alt="logo" className="h-20" /> */}
        <div className="flex flex-col text-center h-20 w-fit p-4 lg:p-0">
          <h2 className="uppercase">Gulf Coast</h2>
          <p className="font-alt text-alt tracking-widest text-lg">Web Design & Development</p>
        </div>
        <p className="mr-10 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris{" "}
        </p>
        <button onClick={handleClick}>
          Get Started
        </button>
      </div>
      {/* contact + link side */}
      <div className="flex lg:flex-row flex-col gap-10 lg:gap-0 text-white">
        <div className="flex flex-col lg:items-start">
          <h4 className="mb-4 text-2xl border-l-6 border-alt pl-2 text-white">
            Contact Us
          </h4>
          <div className="text-left font-normal indent-4">
            <p className="mb-2">
              <PhoneArrowDownLeftIcon className="inline-block w-4 me-2" />
              +123 456 7890
            </p>
            <p className="my-2 mr-10">
              <EnvelopeIcon className="inline-block w-4 me-2 " />
              <a href="https://gulfcoastwdd.com/" className="hover:underline">
                gulfcoastwdd@protonmail.com
              </a>
            </p>
            <p className="my-2">
              <MapPinIcon className="inline-block w-4 me-2 " />
              Tallahassee, FL., USA
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:items-start">
          <h4 className="text-2xl border-l-6 border-alt pl-2 mb-4 text-white">
            Site Map
          </h4>
          <div className="text-left font-normal indent-4 w-full">
            <ul>
              <li className="hover:underline">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:underline">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:underline">
                <Link to="/services">Services</Link>
              </li>
              <li className="hover:underline">
                <Link to="/faqs">FAQs</Link>
              </li>
              <li className="hover:underline">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Footer;
