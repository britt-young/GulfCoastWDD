import React from "react";

const Bio = () => {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
      <div className="mx-auto lg:mr-20">
        <img
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about"
          className="w-full lg:h-185 h-140 object-cover rounded-3xl"
        />
      </div>
      <div className="flex flex-col items-start lg:mr-90 mt-10 lg:mt-0">
        <h4 className="">Gulf Coast Web Design & Development</h4>
        <h2 className="font-bold">
          Bringing your buisness to the online space
        </h2>
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laborisLorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laborisLorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris.
        </p>
        <p className="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laborisLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris</p>
        <button className="mt-10">About Us</button>
      </div>
    </div>
  );
};

export default Bio;
