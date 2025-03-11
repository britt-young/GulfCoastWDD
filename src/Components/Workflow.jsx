import React from "react";
import FlowStepper from "./FlowStepper";

const Workflow = () => {
  return (
    <div className="bg-red-500 flex flex-col">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 py-10 lg:px-0 px-5">
        <div className="h-full">
          <h4 className="">Our Workflow</h4>
          <h2 className="font-bold">How we build the perfect website</h2>
        </div>
        <div className="flex items-center justify-start">
          <p className="border-t-1 lg:border-t-0 lg:border-l-1 border-l-0 border-gray-600 lg:pl-5 lg:pt-0 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <FlowStepper />
    </div>
  );
};

export default Workflow;
