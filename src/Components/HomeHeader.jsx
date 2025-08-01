import { Link } from "react-router-dom";
import mockup from "../assets/mockup.svg"


const HomeHeader = () => {

  return (
    <div className="pt-10 pb-10 lg:px-60 flex flex-col lg:flex-row items-center justify-center gap-10 lg:h-[550px]">
      {/* change below div to items-start if second div is un-commented */}
      <div className="h-fit lg:w-[500px] items-start justify-center flex flex-col px-5 lg:px-0">
        <h4>unique designs, custom-coded</h4>
        <h1>Small business web designs</h1>
        <p className="mt-5 ">
          No drag-and-drop webpage builders or templates. We offer 100%
          hand-coded websites for your business starting at only $145/mo with
          free hosting and edits*
        </p>
        <Link to="/Contact" className="mt-5">
          <button className="mt-10">get started</button>
        </Link>
      </div>
      <div className="flex items-center lg:justify-start justify-center lg:w-[600px] lg:h-[400px] bg-white/60 border-1">
        {/* <picture>
          <img
            src={mockup}
            alt="mockup img"
            className="lg:w-[600px]"
          />
        </picture> */}
      </div>
    </div>
  );
};

export default HomeHeader;
