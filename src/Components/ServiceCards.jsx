import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import mobile from "../assets/icons/mobile.png";

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-5 bg-blue-400">
      <div className="bg-white mx-5 lg:mt-0 mt-2 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
        <img
          src={mobile}
          alt="serviceicon"
          className="w-16 h-16 mb-5"
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

      <div className="bg-white mx-5 lg:mt-0 mt-2 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
        <img
          src={mobile}
          alt="serviceicon"
          className="w-16 h-16 mb-5"
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

      <div className="bg-white mx-5 lg:mt-0 mt-2 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
        <img
          src={mobile}
          alt="serviceicon"
          className="w-16 h-16 mb-5"
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

      <div className="bg-white mx-5 lg:mt-0 mt-2 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
        <img
          src={mobile}
          alt="serviceicon"
          className="w-16 h-16 mb-5"
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

      <div className="bg-white mx-5 lg:mt-0 mt-2 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
        <img
          src={mobile}
          alt="serviceicon"
          className="w-16 h-16 mb-5"
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

      <div className="bg-white mx-5 lg:mt-0 mt-2 p-4 shadow-lg rounded-lg flex flex-col items-center justify-center">
        <img
          src={mobile}
          alt="serviceicon"
          className="w-16 h-16 mb-5"
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
  );
};

export default ServiceCards;
