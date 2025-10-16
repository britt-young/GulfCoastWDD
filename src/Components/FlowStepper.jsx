import React from "react";
// import { BsPersonWorkspace } from "react-icons/bs";
//import {UserPlusIcon} from 'heroicons/react/24/solid'
import {   IoDesktopSharp , IoCodeSlash } from "react-icons/io5";
import { BsClipboard2CheckFill, BsPersonWorkspace  } from "react-icons/bs";



const FlowStepper = () => {
  return (
    
    <div className="flex-col flex lg:flex-row mx-auto lg:gap-20 gap-0 lg:px-10 px-5">
      {/* Step1 */}
      <div className="flex flex-col items-center gap-2 py-10 lg:px-0 px-5">
        <div className="bg-white relative lg:h-60 h-30 w-30 lg:w-60 shadow-lg shadow-white/40 rounded-lg items-center justify-center flex">
        <BsPersonWorkspace   className="w-20 h-20 text-black"/>
          <span className="border-alternate bg-white absolute h-15 w-15 rounded-full  border-4 -top-6 -left-6 text-center justify-center flex items-center">
            <h6 className="text-dark font-semibold text-3xl">1</h6>
          </span>
        </div>
        <h5 className="text-white">Initial Consultation</h5>
        {/* <p className="lg:w-60 text-center text-white">
          Lorem ipsum dolor sit amet.
        </p> */}
      </div>
      {/* Step2 */}
      <div className="flex flex-col items-center gap-2 py-10 lg:px-0 px-5">
        <div className="bg-white relative lg:h-60 h-30 w-30 lg:w-60 shadow-lg shadow-white/40 rounded-lg items-center justify-center flex">
        <BsClipboard2CheckFill     className="w-20 h-20 text-black"/>
        <span className="border-alternate bg-white absolute h-15 w-15 rounded-full border-4 -top-6 -left-6 text-center justify-center flex items-center">
          <h6 className="text-dark font-semibold text-3xl">2</h6>
          </span>
        </div>
        <h5 className="text-white">Design Approval</h5>
        {/* <p className="lg:w-60 text-center text-white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        </p> */}
      </div>
      {/* Step3 */}
      <div className="flex flex-col items-center gap-2 py-10 lg:px-0 px-5">
      <div className="bg-white relative lg:h-60 h-30 w-30 lg:w-60 shadow-lg shadow-white/40 rounded-lg items-center justify-center flex">
      <IoCodeSlash   className="w-20 h-20 text-black"/>
      <span className="border-alternate bg-white absolute h-15 w-15 rounded-full border-4 -top-6 -left-6 text-center justify-center flex items-center">
          <h6 className="text-dark text-3xl font-semibold">3</h6>
          </span>
        </div>
        <h5 className="text-white">Revisions / Development</h5>
        {/* <p className="lg:w-60 text-center text-white">
          Lorem ipsum dolor sit amet consectetur.
        </p> */}
      </div>
      {/* Step4 */}
      <div className="flex flex-col items-center gap-2 py-10 lg:px-0 px-5">
      <div className="bg-white relative lg:h-60 h-30 w-30 lg:w-60 shadow-lg shadow-white/40 rounded-lg items-center justify-center flex">
      <IoDesktopSharp   className="w-20 h-20 text-black"/>
      <span className="border-alternate bg-white absolute h-15 w-15 rounded-full border-4 -top-6 -left-6 text-center justify-center flex items-center">
          <h6 className="text-dark text-3xl font-semibold">4</h6>
          </span>
        </div>
        <h5 className="text-white">Delivery & Launch</h5>
        {/* <p className="lg:w-60 text-center text-white">
          Lorem ipsum dolor sit amet consectetur.
        </p> */}
      </div>
    </div>
   
  );
};

export default FlowStepper;
