import React from "react";

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-60 py-10">
      <div className="h-full">
        <h4 className="">Portfolio</h4>
        <h2 className="font-bold">Some of our recent website designs</h2>
      </div>
      <div className="flex items-center justify-start">
        <p className="border-t-1 lg:border-t-0 lg:border-l-1 border-l-0 border-gray-600 lg:pl-5 lg:pt-0 pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laborisLorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
