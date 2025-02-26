import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import mobile from "../assets/icons/mobile.png";

const ServiceCards = () => {
  return (
    <div className="bg-blue-400">
      <div className="flex flex-col items-center justify-center py-5">
        <h4 className="">what we offer</h4>
        <h2 className="text-center text-3xl font-bold">Our Services</h2>
        <p className="mt-5">shgvksuhdgv</p>
      </div>

      {/* Feature Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-5 lg:w-fit w-80 overflow-hidden mx-auto">
        {/* Feature Card */}
        <div className="bg-white m-2 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col items-center justify-center">
          <img
            src={mobile}
            alt="serviceicon"
            className="w-16 h-16 mb-5 shadow-xl shadow-blue-300"
          />
          <div>
            <h4 className="text-center">Mobile First Design</h4>
            <p>kiesurthiseutbhkeiu</p>
          </div>
          <div>
            <Link to="/services" className="flex items-center justify-end">
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Feature Card */}
        <div className="bg-white m-2 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col items-center justify-center">
          <img
            src={mobile}
            alt="serviceicon"
            className="w-16 h-16 mb-5 shadow-xl shadow-blue-300"
          />
          <div>
            <h4 className="text-center">Mobile First Design</h4>
            <p>kiesurthiseutbhkeiu</p>
          </div>
          <div>
            <Link to="/services" className="flex items-center justify-end">
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Feature Card */}
        <div className="bg-white m-2 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col items-center justify-center">
          <img
            src={mobile}
            alt="serviceicon"
            className="w-16 h-16 mb-5 shadow-xl shadow-blue-300"
          />
          <div>
            <h4 className="text-center">Mobile First Design</h4>
            <p>kiesurthiseutbhkeiu</p>
          </div>
          <div>
            <Link to="/services" className="flex items-center justify-end">
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Feature Card */}
        <div className="bg-white m-2 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col items-center justify-center">
          <img
            src={mobile}
            alt="serviceicon"
            className="w-16 h-16 mb-5 shadow-xl shadow-blue-300"
          />
          <div>
            <h4 className="text-center">Mobile First Design</h4>
            <p>kiesurthiseutbhkeiu</p>
          </div>
          <div>
            <Link to="/services" className="flex items-center justify-end">
              <FaArrowRight />
            </Link>
          </div>
        </div>
    
        {/* Feature Card */}
        <div className="bg-white m-2 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col items-center justify-center">
          <img
            src={mobile}
            alt="serviceicon"
            className="w-16 h-16 mb-5 shadow-xl shadow-blue-300"
          />
          <div>
            <h4 className="text-center">Mobile First Design</h4>
            <p>kiesurthiseutbhkeiu</p>
          </div>
          <div>
            <Link to="/services" className="flex items-center justify-end">
              <FaArrowRight />
            </Link>
          </div>
        </div>
        
        {/* Feature Card */}
        <div className="bg-white m-2 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col items-center justify-center">
          <img
            src={mobile}
            alt="serviceicon"
            className="w-16 h-16 mb-5 shadow-xl shadow-blue-300"
          />
          <div>
            <h4 className="text-center">Mobile First Design</h4>
            <p>kiesurthiseutbhkeiu</p>
          </div>
          <div>
            <Link to="/services" className="flex items-center justify-end">
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
      <button className="mb-10">get started</button>
    </div>
    </div>
  );
};

export default ServiceCards;
