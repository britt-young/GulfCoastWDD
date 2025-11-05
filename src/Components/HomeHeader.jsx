import { Link } from "react-router-dom";
import mockup from "../assets/imgs/mockUp.svg";
import Silk from "./Silk"; // make sure Silk.jsx exists in /components

const HomeHeader = () => {
  return (
    <div className="relative w-full overflow-hidden lg:mt-10 mt-5 py-10 lg:px-60 flex flex-col lg:flex-row items-center justify-center gap-10 h-[80vh]">

      {/* 🧱 Foreground Content */}
      <div className="h-fit lg:w-1/2 items-start flex flex-col px-5 lg:px-0 z-5">
        <h4>unique designs, custom-coded</h4>
        <h1 className="text-white">
          Small business web designs
        </h1>
        <p className="mt-5 text-white">
          No drag-and-drop webpage builders or templates. We offer 100%
          hand-coded websites for your business starting at only $145/mo with
          free hosting and edits*
        </p>
        <Link to="/Contact" className="mt-5">
          <button>
            get started
          </button>
        </Link>
      </div>

      {/* 🖼️ Image Section */}
      <div className="flex items-center lg:justify-start justify-center z-5">
        <picture>
          <img
            src={mockup}
            alt="mockup img"
            className="lg:w-[800px] md:w-[600px] w-[400px]"
          />
        </picture>
      </div>
    </div>
  );
};

export default HomeHeader;
