import React from "react";
// import { BsPersonWorkspace } from "react-icons/bs";
//import {UserPlusIcon} from 'heroicons/react/24/solid'
import { IoDesktopSharp, IoCodeSlash } from "react-icons/io5";
import { BsClipboard2CheckFill, BsPersonWorkspace } from "react-icons/bs";

const FlowStepper = () => {
  return (
    <div className="flex-col flex lg:flex-row mx-auto lg:gap-15 gap-0 lg:px-10 px-5">
      {/* Step1 */}
      <div className="flex flex-col items-center gap-2 py-10 lg:px-0 px-5">
        <div className="bg-white relative h-60 w-80 shadow-lg shadow-white/20 rounded-lg flex flex-col justify-center gap-2 p-10">
          {/* <BsPersonWorkspace className="w-10 h-10 text-black" /> */}
          <span className="border-white bg-alt absolute h-12 w-12 rounded-full  border-4 -top-6 -left-6 justify-center flex items-center">
            <h6 className="text-black text-2xl">1</h6>
          </span>
          <h4 className="text-dark">Initial Consultation</h4>
          <p className="text-black">During our 30-minute introduction call, we'll discuss which package is best suited for your business and gather necessary information. </p>
        </div>
      </div>
      {/* Step2 */}
      <div className="flex flex-col items-center gap-2 py-10 lg:px-0 px-5">
        <div className="bg-white relative h-60 w-80 shadow-lg shadow-white/20 rounded-lg flex flex-col justify-center gap-2 p-10">
          {/* <BsClipboard2CheckFill className="w-10 h-10 text-black " /> */}
          <span className="border-white bg-alt absolute h-12 w-12 rounded-full  border-4 -top-6 -left-6 justify-center flex items-center">
            <h6 className="text-black text-2xl">2</h6>
          </span>
          <h4 className="text-dark">Design Approval</h4>
          <p className="text-black">After a contract is signed, we will design a draft of your website. We will screen share with you and make any necessary revisions. </p>
        </div>
      </div>
      {/* Step3 */}
      <div className="flex flex-col items-center gap-2 py-10 lg:px-0 px-5">
        <div className="bg-white relative h-60 w-80 shadow-lg shadow-white/20 rounded-lg flex flex-col justify-center gap-2 p-10">
          {/* <IoCodeSlash className="w-10 h-10 text-black " /> */}
          <span className="border-white bg-alt absolute h-12 w-12 rounded-full  border-4 -top-6 -left-6 justify-center flex items-center">
            <h6 className="text-black text-2xl">3</h6>
          </span>
          <h4 className="text-dark">Development</h4>
          <p className="text-black">Once approved by you, we will begin development of your website and will send you a live demo link for you to review once more before launch. </p>
        </div>
      </div>
      {/* Step4 */}
      <div className="flex flex-col items-center gap-2 py-10 lg:px-0 px-5">
        <div className="bg-white relative h-60 w-80 shadow-lg shadow-white/20 rounded-lg flex flex-col justify-center gap-2 p-10">
          {/* <IoDesktopSharp className="w-10 h-10 text-black " /> */}
          <span className="border-white bg-alt absolute h-12 w-12 rounded-full  border-4 -top-6 -left-6 justify-center flex items-center">
            <h6 className="text-black text-2xl">4</h6>
          </span>
          <h4 className="text-dark">Website Launch</h4>
          <p className="text-black">If you're 100% satisfied with the live demo, we'll continue with your website launch. Depending on your package choice, free future edits are available!</p>
        </div>
      </div>
    </div>
  );
};

export default FlowStepper;
