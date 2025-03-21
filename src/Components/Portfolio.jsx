import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-white relative px-6 py-24 sm:py-32 lg:px-8">
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
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-1 gap-5 py-10 lg:px-5 px-5">
        {/* First Card */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto">
          <img
            className="w-full object-cover"
            src="https://tailwindcss-v0.netlify.app//img/card-top.jpg"
            alt="Website Design"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Local Farm</div>
            <p className="text-grey-darker text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, earum!
            </p>
          </div>
          <div className="px-6 py-4">
          <button>visit website</button>
          </div>
        </div>
        {/* Second Card */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto">
          <img
            className="w-full object-cover"
            src="https://tailwindcss-v0.netlify.app//img/card-top.jpg"
            alt="Website Design"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Local Florist</div>
            <p className="text-grey-darker text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, earum!
            </p>
          </div>
          <div className="px-6 py-4">
          <button>visit website</button>
          </div>
        </div>
        {/* Third Card */}
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto">
          <img
            className="w-full object-cover"
            src="https://tailwindcss-v0.netlify.app//img/card-top.jpg"
            alt="Website Design"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Riley Addison Photography</div>
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
