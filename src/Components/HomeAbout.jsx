import React from "react";
import GuarenteeGrid from "./GuarenteeGrid";

const HomeAbout = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-10">
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about"
          className="w-full h-200 object-cover pb-10 px-5 lg:px-0 mr-8"
        />
      </div>
      <div className="flex flex-col lg:items-start lg:ml-8 m-5 lg:w-180">
        <h4 className="">Gulf Coast Guarentee</h4>
        <h2 className="text-3xl font-bold">Websites starting at $0 down and $145 per month</h2>
        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        <div><GuarenteeGrid/></div>
      </div>
    </div>
  );
};

export default HomeAbout;
