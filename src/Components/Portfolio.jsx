import React from "react";
import farm from "../assets/clippings/localFarm.png";
import florist from "../assets/clippings/localFlorist.png";
import photo from "../assets/clippings/photo.png";
import { NavLink } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="bg-light  relative px-6 lg:py-25 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-full">
          <h4 className="">Portfolio</h4>
          <h2 className="font-bold">Some of our recent website designs</h2>
        </div>
        <div className="flex items-center justify-start pb-10 lg:pb-0">
          <p className="border-t-1 lg:border-t-0 lg:border-l-1 border-l-0 border-black lg:pl-5 lg:pt-0 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laborisLorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </p>
        </div>
      </div>
      {/* Portfolio Cards */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-2 gap-4 lg:pt-15 px-0 ">
        {/* First Webpage */}
        <div className="relative group border-2 border-white">
          {/* Image */}
          <img
            src={farm}
            alt="Overlay Image"
            className="w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="hidden group-hover:flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-black/80">
            <p className="text-white p-4">Local Farm</p>
            <NavLink
              to="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>visit website</button>
            </NavLink>
          </div>
        </div>

        {/* Second Webpage */}
        <div className="relative group border-2 border-white">
          {/* Image */}
          <img
            src={florist}
            alt="Overlay Image"
            className="w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="hidden group-hover:flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-black/80">
            <p className="text-white p-4">Local Florist</p>
            <NavLink
              to="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>visit website</button>
            </NavLink>
          </div>
        </div>

        {/* Third Webpage */}
        <div className="relative group border-2 border-white">
          {/* Image */}
          <img
            src={photo}
            alt="Overlay Image"
            className="w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="hidden group-hover:flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-black/80">
            <p className="text-white p-4">Julia Rose Photography</p>
            <NavLink
              to="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>visit website</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

// dark:bg-linear-180 from-[#1f3b47] to-[#3d8069] dark:text-white
