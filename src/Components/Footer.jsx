import React from "react";
import {PhoneArrowDownLeftIcon, EnvelopeIcon, MapPinIcon} from "@heroicons/react/24/solid";


const Footer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 bg-main dark:bg-main-dark p-20 lg:px-80 lg:gap-40 gap-20 z-0">
      <div className="flex flex-col lg:items-start justify-between py-5 lg:order-first order-last">
        <img src="https://via.placeholder.com/150" alt="logo" />
        <p className="my-5 mr-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris </p>
          <button>Get Started</button>
      </div>
      <div className="flex flex-col lg:items-start py-5 lg:order-last order-first">
        <h4 className="mb-4 text-2xl">Contact Us</h4>
        <div>
        <p className="my-1"><PhoneArrowDownLeftIcon className="inline-block w-6 me-2" />+123 456 7890</p>
        <p className="my-1 mr-10"><EnvelopeIcon className="inline-block w-6 me-2" />gulfcoastwdd@protonmail.com</p>
        <p className="my-1"><MapPinIcon className="inline-block w-6 me-2" />United States</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
