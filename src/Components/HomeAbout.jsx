import React from "react";
import {useNavigate} from "react-router-dom";
import GuarenteeGrid from "./GuarenteeGrid";

const HomeAbout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/About"); // Navigate to the "/contact" route
  }
  return (
    <div className="bg-secondary relative px-6 py-25 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
      <div className="mx-auto lg:mr-20">
        <img
          src="https://images.pexels.com/photos/20044366/pexels-photo-20044366/free-photo-of-hands-holding-smartphone-over-laptop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="about"
          className="w-full lg:h-185 h-140 object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col items-start lg:mr-80 mt-10 lg:mt-0">
        <h4 className="">Gulf Coast Guarentee</h4>
        <h2 className="font-bold">Websites starting at $145 per month</h2>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laborisLorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris
        </p>
        <div className="w-full">
          <GuarenteeGrid />
        </div>
        <button className="mt-10" onClick={handleClick}>About Us</button>
      </div>
    </div>
  );
};

export default HomeAbout;

// dark:bg-linear-150 from-[#1f3b47] to-[#3d8069]