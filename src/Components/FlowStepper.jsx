import React from "react";
// import { BsPersonWorkspace } from "react-icons/bs";
//import {UserPlusIcon} from 'heroicons/react/24/solid'
import { IoPeopleCircleSharp, IoShieldCheckmarkSharp, IoRocketSharp } from "react-icons/io5";

const FlowStepper = () => {
  return (
    <div className="flex-col flex lg:flex-row mx-auto lg:gap-20 gap-0 lg:px-10 px-5">
      {/* Step1 */}
      <div className="flex flex-col items-center gap-4 py-10 lg:px-0 px-5">
        <div className="bg-alternate relative lg:h-60 h-30 w-30 lg:w-60 shadow-lg shadow-white/40 rounded-lg items-center justify-center flex">
        <IoPeopleCircleSharp className="w-20 h-20 text-white"/>
          <span className="border-white bg-alternate absolute h-15 w-15 rounded-full  border-4 -top-6 -left-6 text-center justify-center flex items-center">
            <h6 className="text-white font-semibold text-3xl">1</h6>
          </span>
        </div>
        <h5>Initial Consultation</h5>
        <p className="lg:w-60 text-center ">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      {/* Step2 */}
      <div className="flex flex-col items-center gap-4 py-10 lg:px-0 px-5">
        <div className="bg-alternate relative lg:h-60 h-30 w-30 lg:w-60 shadow-lg shadow-white/40 rounded-lg items-center justify-center flex">
        <IoShieldCheckmarkSharp className="w-20 h-20 text-white"/>
        <span className="border-white bg-alternate absolute h-15 w-15 rounded-full border-4 -top-6 -left-6 text-center justify-center flex items-center">
          <h6 className="text-white font-semibold text-3xl">2</h6>
          </span>
        </div>
        <h5>Design Approval</h5>
        <p className="lg:w-60 text-center ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
      </div>
      {/* Step3 */}
      <div className="flex flex-col items-center gap-4 py-10 lg:px-0 px-5">
      <div className="bg-alternate relative lg:h-60 h-30 w-30 lg:w-60 shadow-lg shadow-white/40 rounded-lg items-center justify-center flex">
      <IoRocketSharp  className="w-20 h-20 text-white"/>
      <span className="border-white bg-alternate absolute h-15 w-15 rounded-full border-4 -top-6 -left-6 text-center justify-center flex items-center">
          <h6 className="text-white text-3xl font-semibold">3</h6>
          </span>
        </div>
        <h5>Development & Launch</h5>
        <p className="lg:w-60 text-center ">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
};

export default FlowStepper;
