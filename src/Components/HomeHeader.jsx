import { Link } from "react-router-dom";
import mockup from "../assets/mockupGif.gif"


const HomeHeader = () => {

  return (
    <div className="lg:mt-10 mt-5 py-10 lg:px-60 flex flex-col lg:flex-row items-center justify-center gap-10 h-[80vh]">
      {/* change below div to items-start if second div is un-commented */}
      <div className="h-fit lg:w-1/2 items-start flex flex-col px-5 lg:px-0">
        <h4>unique designs, custom-coded</h4>
        <h1 className="text-white">Small business web designs</h1>
        <p className="mt-5 text-white">
          No drag-and-drop webpage builders or templates. We offer 100%
          hand-coded websites for your business starting at only $145/mo with
          free hosting and edits*
        </p>
        <Link to="/Contact" className="mt-5">
          <button>get started</button>
        </Link>
      </div>
      <div className="flex items-center lg:justify-start justify-center w-[800px] h-[600px] bg-white/50">
         {/* <picture>
          <img
            src={mockup}
            alt="mockup img"
            className="lg:w-[600px]"
          />
        </picture>   */}
      </div>
    </div>
  );
};

export default HomeHeader;
