import farm from "../assets/clippings/mockup-farm.svg";
import florist from "../assets/clippings/mockup-florist.svg";
import photo from "../assets/clippings/mockup-photo.svg";
import { NavLink } from "react-router-dom";
import WaveBackground from "./WaveBackground";

const PortfolioGrid = () => {
  return (
    <section className="px-6 py-20 lg:px-8 relative overflow-hidden">
      <WaveBackground />
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-full">
          <h4>Portfolio</h4>
          <h2>Some of our recent website designs</h2>
        </div>
        <div className="flex items-center justify-start pb-10 lg:pb-0">
          <p className="border-t-1 lg:border-t-0 lg:border-l-1 border-l-0 border-black lg:pl-5 lg:pt-0 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laborisLorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris
          </p>
        </div>
      </div>
      {/* Portfolio Cards */}
      <div className="relative text-center mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-2 gap-20 lg:pt-25 px-0 ">
        {/* First Webpage */}
        <div>
          <img src={farm} alt="Mockup Image" className="w-full object-cover" />

          <h5 className="text-black p-2 font-semibold">Local Farm</h5>
          <p className="text-gray-600 pb-5">
            A beautiful farm website showcasing local produce
          </p>
          <NavLink
            to="https://localfarm.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover:bg-alternate hover:text-white">
              visit website
            </button>
          </NavLink>
        </div>
        {/* Second Webpage */}
        <div>
          <img
            src={florist}
            alt="Mockup Image"
            className="w-full object-cover"
          />

          <h5 className="text-black p-2 font-semibold">Local Florist</h5>
          <p className="text-gray-600 pb-5">
            A beautiful florist website showcasing local flowers
          </p>
          <NavLink
            to="https://localflorist.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover:bg-alternate hover:text-white">
              visit website
            </button>
          </NavLink>
        </div>
        {/* Third Webpage */}
        <div className="relative group">
          <img src={photo} alt="Mockup Image" className="w-full object-cover" />

          <h5 className="text-black p-2 font-semibold">Julia Rose Photo</h5>
          <p className="text-gray-600 pb-5">
            A beautiful photography website of stunning visuals
          </p>
          <NavLink
            to="https://juliarosephoto.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover:bg-alternate hover:text-white">
              visit website
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
