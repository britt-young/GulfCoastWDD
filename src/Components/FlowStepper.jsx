import React from "react";

const FlowStepper = () => {
  return (
    <div className="flex-col flex lg:flex-row mx-10">
      {/* Step1 */}
      <div className="flex flex-col items-center mx-auto lg:max-w-7xl gap-4 py-10 lg:px-0 px-5">
        <div className="relative">
          <div className="lg:h-60 h-30 w-30 lg:w-60 bg-white shadow-lg rounded-lg overflow-hidden px-6 py-4"></div>
          <span className="absolute lg:h-15 h-10 w-10 lg:w-15 rounded-full bg-red-500 border-4 border-white -top-6 -left-6 text-center justify-center flex items-center">
            <h3>1</h3>
          </span>
        </div>
        <h4>hello</h4>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {/* Step2 */}
      <div className="flex flex-col items-center mx-auto lg:max-w-7xl gap-4 py-10 lg:px-0 px-5">
        <div className="relative">
          <div className="lg:h-60 h-30 w-30 lg:w-60 bg-white shadow-lg rounded-lg overflow-hidden px-6 py-4"></div>
          <span className="absolute lg:h-15 h-10 w-10 lg:w-15 rounded-full bg-white border-8 border-red-500 -top-6 -left-6 text-center justify-center flex items-center">
            <h3>2</h3>
          </span>
        </div>
        <h4>hello</h4>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      {/* Step3 */}
      <div className="flex flex-col items-center mx-auto lg:max-w-7xl gap-4 py-10 lg:px-0 px-5">
        <div className="relative">
          <div className="lg:h-60 h-30 w-30 lg:w-60 bg-white shadow-lg rounded-lg overflow-hidden px-6 py-4"></div>
          <span className="absolute lg:h-15 h-10 w-10 lg:w-15 rounded-full bg-red-500 border-4 border-white -top-6 -left-6 text-center justify-center flex items-center">
            <h3>3</h3>
          </span>
        </div>
        <h4>hello</h4>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default FlowStepper;
