import React from "react";

const Portfolio = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 py-10 lg:px-0 px-5">
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
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-4 py-10 lg:px-0 px-5">
        {/* First Card */}
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
          <img
            class="w-full"
            src="https://tailwindcss-v0.netlify.app//img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4">
          <button>click here</button>
          </div>
        </div>
        {/* Second Card */}
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
          <img
            class="w-full"
            src="https://tailwindcss-v0.netlify.app//img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4">
          <button>click here</button>
          </div>
        </div>
        {/* Third Card */}
        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
          <img
            class="w-full"
            src="https://tailwindcss-v0.netlify.app//img/card-top.jpg"
            alt="Sunset in the mountains"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-grey-darker text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 py-4">
            <button>click here</button>
          </div>
        </div>
      </div>      
    </div>
  );
};

export default Portfolio;
