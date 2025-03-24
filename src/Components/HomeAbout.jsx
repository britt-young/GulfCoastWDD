import React from "react";
import GuarenteeGrid from "./GuarenteeGrid";
import mockup from "../assets/Mockup.svg";

const HomeAbout = () => {
  return (
    <div className="relative px-6 py-24 sm:py-32 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
      <div className="mx-auto lg:mr-20">
        <img
          src={mockup}
          alt="about"
          className="w-full lg:h-185 h-140 object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col items-start lg:mr-80 mt-10 lg:mt-0">
        <h4 className="">Gulf Coast Guarentee</h4>
        <h2 className="font-bold">Websites starting at $0 down and $145 per month</h2>
        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        <div className="w-full"><GuarenteeGrid/></div>
        <button className="mt-10">About Us</button>
      </div>
    </div>
  );
};

export default HomeAbout;
