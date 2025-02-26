import React from "react";
import GuarenteeGrid from "./GuarenteeGrid";

const HomeAbout = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center py-10">
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="about"
          className="w-full h-200 object-cover pb-10 mr-8"
        />
      </div>
      <div className="flex flex-col lg:items-start lg:ml-8 ">
        <h4 className="">what we offer</h4>
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-5">shgvksuhdgvshgvksuhdgvshgvksuhdgvshgvksuhdgvshgvksuhdgv</p>
        <div><GuarenteeGrid/></div>
      </div>
    </div>
  );
};

export default HomeAbout;
