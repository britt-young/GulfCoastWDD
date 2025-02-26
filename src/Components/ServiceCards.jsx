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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-5 lg:mx-80 mx-20">
        {/* Feature Card */}
        <div className="bg-white mx-2 lg:mt-0 mt-2 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
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
        <div className="bg-white mx-2 lg:mt-0 mt-2 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
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
        <div className="bg-white mx-2 lg:mt-0 mt-2 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
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
        <div className="bg-white mx-2 lg:mt-0 mt-2 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
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
        <div className="bg-white mx-2 lg:mt-0 mt-2 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
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
        <div className="bg-white mx-2 lg:mt-0 mt-2 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
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
    </div>
  );
};

export default ServiceCards;
