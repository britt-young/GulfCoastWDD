import React from "react";
import farm from "../assets/clippings/localFarm.png"
import florist from "../assets/clippings/localFlorist.png"
import photo from "../assets/clippings/photo.png"

const Portfolio = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white relative px-6 py-25 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-full">
          <h4 className="">Portfolio</h4>
          <h2 className="font-bold">Some of our recent website designs</h2>
        </div>
        <div className="flex items-center justify-start">
          <p className="border-t-1 lg:border-t-0 lg:border-l-1 border-l-0 border-gray-600 lg:pl-5 lg:pt-0 pt-5">
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
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-1 gap-0 lg:pt-15 px-0">
        {/* First Card */}
        <div className="card p-0">
          <img
            className="w-full object-cover rounded-t-lg"
            src={farm}
            alt="Website Design"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">Local Farm</div>
            <p className="text-grey-darker text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, earum!
            </p>
          </div>
          <div className="px-6 py-4">
          <button>visit website</button>
          </div>
        </div>
        {/* Second Card */}
        <div className="card p-0 ">
          <img
            className="w-full object-cover rounded-t-lg"
            src={florist}
            alt="Website Design"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">Local Florist</div>
            <p className="text-grey-darker text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, earum!
            </p>
          </div>
          <div className="px-6 py-4">
          <button>visit website</button>
          </div>
        </div>
        {/* Third Card */}
        <div className="card p-0">
          <img
            className="w-full object-cover rounded-t-lg"
            src={photo}
            alt="Website Design"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">Riley Addison Photography</div>
            <p className="text-grey-darker text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, earum!
            </p>
          </div>
          <div className="px-6 py-4">
            <button>visit website</button>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Portfolio;
