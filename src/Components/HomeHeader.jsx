import React from "react";
import { useNavigate } from "react-router-dom";
import mockup from "../assets/mockup2.svg"

const HomeHeader = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact"); // Navigate to the "/contact" route
  };

  return (
    <div className="pt-20 pb-20 lg:px-60 flex flex-col lg:flex-row items-center justify-center gap-0 lg:h-[700px]">
      <div className="h-full items-start justify-center flex flex-col px-5 lg:px-0">
        <h4>unique designs, custom-coded</h4>
        <h2>small business web design</h2>
        <p className="mt-5">
          No drag-and-drop webpage builders or templates. We offer 100%
          hand-coded websites for your business starting at only $145/mo with
          free hosting and edits*
        </p>
        <button className="lg:mt-10 mt-5" onClick={handleClick} >get started</button>
      </div>
      <div className="flex items-center lg:justify-start justify-center">
        <picture>
          <img
            src={mockup}
            alt="mockup img"
            className="h-full w-400 p-5 lg:p-0"
          />
        </picture>
      </div>
    </div>
  );
};

export default HomeHeader;

// grid lg:grid-cols-12 gap-8 grid-cols-1 h-[750px] lg:m-0 m-5
