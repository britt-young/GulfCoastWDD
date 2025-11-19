import { Link } from "react-router-dom";
import mockup from "../assets/mockup1.svg";

const HomeHeader = () => {
  
  return (
    <div className="max-w-full overflow-hidden mt-10 py-10 lg:px-30 flex flex-col lg:flex-row items-center justify-center lg:gap-10 gap-20 h-full lg:h-[650px]">

      {/*Content */}
      <div className="h-fit lg:w-full flex flex-col px-5 lg:px-0">
        <h4>unique designs, custom-coded</h4>
        <h1 className="text-white pe-10 sm:pe-0">
          Small business web design & development
        </h1>
        <p className="mt-5 text-white">
          No drag-and-drop webpage builders or templates. We offer 100%
          hand-coded websites for your business starting at only $145/mo with
          free hosting and edits*
        </p>
        <Link to="/Contact" className="mt-5">
          <button className="w-full md:w-fit">
            get started
          </button>
        </Link>
      </div>

      {/*Image */}
      <div className="px-5 lg:px-0 ">
        <picture>
          <img
            src={mockup}
            alt="mockup img"
            className="w-full"
          />
        </picture>
      </div>
    </div>
  );
};

export default HomeHeader;
