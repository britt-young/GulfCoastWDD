import React from "react";
// import { BsPersonWorkspace } from "react-icons/bs";
//import {UserPlusIcon} from 'heroicons/react/24/solid'
import { IoDesktopSharp, IoCodeSlash } from "react-icons/io5";
import { BsClipboard2CheckFill, BsPersonWorkspace } from "react-icons/bs";

const FlowStepper = () => {
  return (
    <div className="flex-col flex lg:flex-row mx-auto lg:gap-20 gap-0 lg:px-10 px-5">
      {/* Step1 */}
      <div className="flex flex-col items-center gap-2 py-10 lg:px-0 px-5">
        <div className="bg-white relative h-50 w-50 shadow-lg shadow-white/20 rounded-lg flex flex-col items-center justify-center gap-4">
          <BsPersonWorkspace className="w-10 h-10 text-black " />
          <span className="border-white bg-alternate absolute h-15 w-15 rounded-full  border-4 -top-6 -left-6 text-center justify-center flex items-center">
            <h6 className="text-white font-semibold text-3xl">1</h6>
          </span>
          <h6 className="text-black text-center font-normal">
            Initial Consultation
          </h6>
        </div>
      </div>
      {/* Step2 */}
      <div className="flex flex-col items-center gap-2 py-10 lg:px-0 px-5">
        <div className="bg-white relative h-50 w-50 shadow-lg shadow-white/20 rounded-lg flex flex-col items-center justify-center gap-4">
          <BsClipboard2CheckFill className="w-10 h-10 text-black " />
          <span className="border-white bg-alternate absolute h-15 w-15 rounded-full  border-4 -top-6 -left-6 text-center justify-center flex items-center">
            <h6 className="text-white font-semibold text-3xl">2</h6>
          </span>
          <h6 className="text-black text-center font-normal">
            Design Approval
          </h6>
        </div>
      </div>
      {/* Step3 */}
      <div className="flex flex-col items-center gap-2 py-10 lg:px-0 px-5">
        <div className="bg-white relative h-50 w-50 shadow-lg shadow-white/20 rounded-lg flex flex-col items-center justify-center gap-4">
          <IoCodeSlash className="w-10 h-10 text-black " />
          <span className="border-white bg-alternate absolute h-15 w-15 rounded-full  border-4 -top-6 -left-6 text-center justify-center flex items-center">
            <h6 className="text-white font-semibold text-3xl">3</h6>
          </span>
          <h6 className="text-black text-center font-normal">Development</h6>
        </div>
      </div>
      {/* Step4 */}
      <div className="flex flex-col items-center gap-2 py-10 lg:px-0 px-5">
        <div className="bg-white relative h-50 w-50 shadow-lg shadow-white/20 rounded-lg flex flex-col items-center justify-center gap-4">
          <IoDesktopSharp className="w-10 h-10 text-black " />
          <span className="border-white bg-alternate absolute h-15 w-15 rounded-full  border-4 -top-6 -left-6 text-center justify-center flex items-center">
            <h6 className="text-white font-semibold text-3xl">4</h6>
          </span>
          <h6 className="text-black text-center font-normal">Website Launch</h6>
        </div>
      </div>
    </div>
  );
};

export default FlowStepper;
