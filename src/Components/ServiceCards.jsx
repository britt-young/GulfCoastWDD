import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdPhonelinkSetup } from "react-icons/md";

const ServiceCards = () => {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="flex flex-col items-center justify-center py-5">
        <h4 className="">what we offer</h4>
        <h2 className="text-center text-3xl font-bold">Our Services</h2>
        <p className="mt-5 lg:w-200 mx-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>

      {/* Feature Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-20 lg:w-300 lg:h-150 overflow-hidden mx-auto">
        {/* Feature Card (add negative margin on icon to offset?*/}
        <div className="bg-blue-50 w-fit m-2 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col items-center justify-center relative">
          <img
            src={<MdPhonelinkSetup />}
            alt="serviceicon"
            className="rounded-lg bg-blue-900/60 w-16 h-16 mb-4 absolute left-1/2 transform -translate-x-11/12 -top-4"
          />
          <div>
            <h4 className="text-center">Mobile First Design</h4>
            <p>kiesurthiseutbhkeiu</p>
          </div>
          <div>
            <Link to="/services" className="">
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="">get started</button>
      </div>
    </div>
  );
};

export default ServiceCards;
