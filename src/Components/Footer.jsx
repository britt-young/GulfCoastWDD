import { useNavigate, Link } from "react-router-dom";
import {
  PhoneArrowDownLeftIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import WaveAnimation from "./WaveAnimation2";
import logoDark from "../assets/logos/nav-logo-dark.svg";

const Footer = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
  };

  // Email obfuscation
  const emailUser = "gulfcoastwdd";
  const emailDomain = "protonmail.com";

  // Address for Apple Maps
  const address = "Tallahassee, FL., USA";
  const mapsLink = `https://maps.apple.com/?q=${encodeURIComponent(address)}`;

  // Phone number
  const phoneNumber = "+18502968466";

  // Function to render email dynamically
  const renderEmail = () => {
    const email = `${emailUser}@${emailDomain}`;
    return (
      <span
        className="hover:underline cursor-pointer"
        onClick={() => (window.location.href = `mailto:${email}`)}
      >
        {emailUser}@{emailDomain}
      </span>
    );
  };

  return (
    <section className="relative overflow-hidden bg-white dark:bg-dark">
      <WaveAnimation />
      <div className="pt-40 pb-20 relative grid grid-cols-1 lg:grid-cols-2 lg:px-60 px-5 lg:gap-28 gap-20 z-0 font-alt">
        {/* Brand side */}
        <div className="flex flex-col items-start justify-top gap-3 text-white">
          <img src={logoDark} alt="logo" className="h-[80px]" />

          <p className="mb-10 ms-2">
            Expand your business’s reach with a strong online presence. We
            create professional, high-performance websites tailored to your
            industry—all at an affordable price.
          </p>
          <button className="lg:ms-2 lg:w-fit w-full" onClick={handleClick}>Get Started</button>
        </div>

        {/* Contact + Link side */}
        <div className="flex lg:flex-row flex-col gap-10 lg:gap-0 text-white">
          {/* Contact Section */}
          <div className="flex flex-col lg:items-start">
            <h4 className="mb-4 text-2xl border-l-6 border-alt pl-2 text-white">
              Contact Us
            </h4>
            <div className="text-left font-normal indent-4">
              {/* Phone */}
              <p className="mb-2">
                <PhoneArrowDownLeftIcon className="inline-block w-4 me-2" />
                <a href={`tel:${phoneNumber}`} className="hover:underline">
                  (850) 296-8466
                </a>
              </p>

              {/* Email */}
              <p className="my-2 mr-10">
                <EnvelopeIcon className="inline-block w-4 me-2 " />
                {renderEmail()}
              </p>

              {/* Address */}
              <p className="my-2">
                <MapPinIcon className="inline-block w-4 me-2 " />
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {address}
                </a>
              </p>
            </div>
          </div>

          {/* Site Map Section */}
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
                <li className="hover:underline">
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/privacy">Terms & Conditions</Link>
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
