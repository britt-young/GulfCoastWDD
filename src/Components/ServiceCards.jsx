import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { MdPhonelinkSetup } from "react-icons/md";

const ServiceCards = () => {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-center py-5">
        <h4 className="">what we offer</h4>
        <h2 className="text-center text-3xl font-bold">Our Services</h2>
        <p className="mt-5 lg:w-200 mx-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>
      {/* Feature Card Grid */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-20 gap-0 lg:p-20 overflow-hidden">
        {/* Feature Card */}
        <div className="bg-blue-50 h-fit m-2 mt-20 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col items-center justify-center relative">
          <MdPhonelinkSetup className="rounded-lg bg-blue-900/60 p-4 w-20 h-20 mb-4 absolute left-1/2 transform -translate-x-1/2 -top-11" />
          <div className="m-5">
            <h4 className="text-center">Mobile First Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div>
            <Link to="/services" className="">
              <FaArrowRight />
            </Link>
          </div>
        </div>
        {/* Feature Card */}
        <div className="bg-blue-50 h-fit m-2 mt-20 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col items-center justify-center relative">
          <MdPhonelinkSetup className="rounded-lg bg-blue-900/60 p-4 w-20 h-20 mb-4 absolute left-1/2 transform -translate-x-1/2 -top-11" />
          <div className="m-5">
            <h4 className="text-center">Mobile First Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div>
            <Link to="/services" className="">
              <FaArrowRight />
            </Link>
          </div>
        </div>
        {/* Feature Card */}
        <div className="bg-blue-50 h-fit m-2 mt-20 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col items-center justify-center relative">
          <MdPhonelinkSetup className="rounded-lg bg-blue-900/60 p-4 w-20 h-20 mb-4 absolute left-1/2 transform -translate-x-1/2 -top-11" />
          <div className="m-5">
            <h4 className="text-center">Mobile First Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div>
            <Link to="/services" className="">
              <FaArrowRight />
            </Link>
          </div>
        </div>
        {/* Feature Card */}
        <div className="bg-blue-50 h-fit m-2 mt-20 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col items-center justify-center relative">
          <MdPhonelinkSetup className="rounded-lg bg-blue-900/60 p-4 w-20 h-20 mb-4 absolute left-1/2 transform -translate-x-1/2 -top-11" />
          <div className="m-5">
            <h4 className="text-center">Mobile First Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div>
            <Link to="/services" className="">
              <FaArrowRight />
            </Link>
          </div>
        </div>
        {/* Feature Card */}
        <div className="bg-blue-50 h-fit m-2 mt-20 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col items-center justify-center relative">
          <MdPhonelinkSetup className="rounded-lg bg-blue-900/60 p-4 w-20 h-20 mb-4 absolute left-1/2 transform -translate-x-1/2 -top-11" />
          <div className="m-5">
            <h4 className="text-center">Mobile First Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div>
            <Link to="/services" className="">
              <FaArrowRight />
            </Link>
          </div>
        </div>
        {/* Feature Card */}
        <div className="bg-blue-50 h-fit m-2 mt-20 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col items-center justify-center relative">
          <MdPhonelinkSetup className="rounded-lg bg-blue-900/60 p-4 w-20 h-20 mb-4 absolute left-1/2 transform -translate-x-1/2 -top-11" />
          <div className="m-5">
            <h4 className="text-center">Mobile First Design</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div>
            <Link to="/services" className="">
              <FaArrowRight />
            </Link>
          </div>
        </div>
        
      </div>

      <div className="flex flex-col items-center justify-center mt-5 lg:mt-0">
        <button className="">get started</button>
      </div>
    </div>
  );
};

export default ServiceCards;
