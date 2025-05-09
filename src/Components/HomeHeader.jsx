import React from "react";
import { useNavigate } from "react-router-dom";
import mockup from "../assets/mockup.svg"


const HomeHeader = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact"); // Navigate to the "/contact" route
  };

  return (
    <div className="pt-10 pb-10 lg:px-60 flex flex-col lg:flex-row items-center justify-center gap-10 lg:h-[550px]">
      {/* change below div to items-start if second div is un-commented */}
      <div className="h-fit lg:w-[500px] items-start justify-center flex flex-col px-5 lg:px-0">
        <h4>unique designs, custom-coded</h4>
        <h1>Small business web designs</h1>
        <p className="mt-5 text-white">
          No drag-and-drop webpage builders or templates. We offer 100%
          hand-coded websites for your business starting at only $145/mo with
          free hosting and edits*
        </p>
        <button className="mt-10" onClick={handleClick} >get started</button>
      </div>
      <div className="flex items-center lg:justify-start justify-center">
        <picture>
          <img
            src={mockup}
            alt="mockup img"
            className="lg:w-[600px]"
          />
        </picture>
      </div>
    </div>
  );
};

export default HomeHeader;

// grid lg:grid-cols-12 gap-8 grid-cols-1 h-[750px] lg:m-0 m-5
