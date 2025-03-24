import React from "react";
import FlowStepper from "./FlowStepper";

const Workflow = () => {
  return (
    <div className="bg-main flex flex-col py-10 relative isolate">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/500 w-full bg-linear-to-tr from-[#79ABAC] to-[#AEDBDE] opacity-100"
        />
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 py-10 lg:px-0 px-5">
        <div className="h-full">
          <h4 className="">Our Workflow</h4>
          <h2 className="font-bold">How we build the perfect website</h2>
        </div>
        <div className="flex items-center justify-start">
          <p className="border-t-1 lg:border-t-0 lg:border-l-1 border-l-0 border-alt lg:pl-5 lg:pt-0 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <FlowStepper />
      <div className="flex items-center justify-center">
        <button>Get Started Today</button>
      </div>
    </div>
  );
};

export default Workflow;
