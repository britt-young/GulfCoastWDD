import { useNavigate } from "react-router-dom";
import GuarenteeGrid from "./GuarenteeGrid";
import pic from "../assets/imgs/gridpic.svg";

const HomeAbout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/About"); // Navigate to the "/contact" route
  };
  return (
    <div className="first-background px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5 lg:gap-10">
        <div className="w-full flex items-center justify-center">
          <img
            src={pic}
            alt="Grid Image"
            className="w-fit lg:h-185 md:h-140 h-100 object-cover"
          />
        </div>
        <div className="flex flex-col items-start">
          <h4 className="">Gulf Coast Guarentee</h4>
          <h2 className="">Websites starting at $145 per month</h2>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laborisLorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris
          </p>
          <GuarenteeGrid />
          <button
            className="mt-10 w-full flex justify-center mx-auto bg-blue-10 text-white"
            onClick={handleClick}
          >
            More About GCWDD
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
