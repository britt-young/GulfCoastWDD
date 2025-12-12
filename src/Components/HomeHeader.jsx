// import graphic from "../assets/mockup.svg";
import { Link } from "react-router-dom";


export default function HomeHeader() {
  return (
    <div className="max-w-7xl mx-auto overflow-hidden  mt-10 py-10 h-full flex flex-col lg:flex-row items-center gap-20">
      {/* Content */}
      <div className="flex flex-col text-start px-5 lg:px-0 z-0">
        <h4>unique designs, custom-coded</h4>
        <h1 className="text-white">Small business web design & development</h1>
        <p className="mt-2 text-white">
          No drag-and-drop webpage builders or templates. We offer 100%
          hand-coded websites for your business starting at only $145/mo with
          free hosting and edits*
        </p>
        <Link to="/Contact" className="mt-5">
          <button className="w-5/6 md:w-fit">get started</button>
        </Link>
      </div>
      <div className="w-250 h-100 hidden lg:block"></div>
    </div>
  );
} 
