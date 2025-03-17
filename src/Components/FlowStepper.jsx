import React from "react";
// import { BsPersonWorkspace } from "react-icons/bs";
//import {UserPlusIcon} from 'heroicons/react/24/solid'



const FlowStepper = () => {
  return (
    <div className="flex-col flex lg:flex-row mx-auto lg:gap-20 gap-0">
      {/* Step1 */}
      <div className="flex flex-col items-center mx-auto lg:max-w-7xl gap-4 py-10 lg:px-0 px-5">
        <div className="relative">
          <div className="lg:h-60 h-30 w-30 lg:w-60 bg-white shadow-lg rounded-lg"></div>
          <span className="absolute h-15 w-15 rounded-full bg-red-500 border-4 border-white -top-6 -left-6 text-center justify-center flex items-center">
            <h3>1</h3>
          </span>
        </div>
        <h5 className="font-bold text-lg">Initial Consultation</h5>
        <p className="lg:w-60 text-center">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      {/* Step2 */}
      <div className="flex flex-col items-center mx-auto lg:max-w-7xl gap-4 py-10 lg:px-0 px-5">
        <div className="relative">
          <div className="lg:h-60 h-30 w-30 lg:w-60 bg-white shadow-lg rounded-lg flex items-center justify-center"></div>
          <span className="absolute h-15 w-15 rounded-full bg-white border-8 border-red-500 -top-6 -left-6 text-center justify-center flex items-center">
            <h3>2</h3>
          </span>
        </div>
        <h5 className="font-bold text-lg">Design Approval</h5>
        <p className="lg:w-60 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
      </div>
      {/* Step3 */}
      <div className="flex flex-col items-center mx-auto lg:max-w-7xl gap-4 py-10 lg:px-0 px-5">
        <div className="relative">
          <div className="lg:h-60 h-30 w-30 lg:w-60 bg-white shadow-lg rounded-lg"></div>
          <span className="absolute h-15 w-15 rounded-full bg-red-500 border-4 border-white -top-6 -left-6 text-center justify-center flex items-center">
            <h3>3</h3>
          </span>
        </div>
        <h5 className="font-bold text-lg">Development & Launch</h5>
        <p className="lg:w-60 text-center">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
};

export default FlowStepper;
