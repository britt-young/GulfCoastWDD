import { Link } from "react-router-dom";
import mockup from "../assets/imgs/mockup.svg";

const HomeHeader = () => {
  
  return (
    <div className="relative w-full overflow-hidden lg:mt-10 mt-5 py-10 lg:px-60 flex flex-col lg:flex-row items-center justify-center gap-10 h-full">

      {/*Content */}
      <div className="h-fit lg:w-1/2 flex flex-col px-5 lg:px-0">
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
      <div className="flex items-center lg:justify-start justify-center lg:w-1/2 md:w-[400px] w-[200px]">
        {/* <picture>
          <img
            src={mockup}
            alt="mockup img"
            className="lg:w-1/2 md:w-[400px] w-[200px]"
          />
        </picture> */}
      </div>
    </div>
  );
};

export default HomeHeader;
