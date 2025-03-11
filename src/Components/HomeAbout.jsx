import React from "react";
import GuarenteeGrid from "./GuarenteeGrid";

const HomeAbout = () => {
  return (
    <div className="relative isolate bg-red-200 px-6 py-24 sm:py-32 lg:px-8 flex flex-col lg:flex-row items-center justify-center">
      <div>
        <img
          src="https://images.pexels.com/photos/20044366/pexels-photo-20044366/free-photo-of-hands-holding-smartphone-over-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="about"
          className="w-full h-185 object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col items-start lg:ml-8 m-5 lg:w-180">
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
