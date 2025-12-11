import React from "react";
import { Link } from "react-router-dom";
import InteractiveSVGBackground from "./InteractiveSVGBackground";

// Header with animated interactive SVG background
export default function HomeHeader() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-0 opacity-40 pointer-events-auto">
        <InteractiveSVGBackground />
      </div>

      <div className="max-w-7xl mx-auto overflow-hidden mt-10 py-10 h-full lg:h-[450px] flex items-center">
        {/* Content */}
        <div className="flex flex-col text-start px-5 lg:px-0 z-0">
          <h4>unique designs, custom-coded</h4>
          <h1 className="text-white">
            Small business web design & development
          </h1>
          <p className="mt-2 text-white">
            No drag-and-drop webpage builders or templates. We offer 100%
            hand-coded websites for your business starting at only $145/mo with
            free hosting and edits*
          </p>
          <Link to="/Contact" className="mt-5">
            <button className="w-5/6 md:w-fit">get started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
