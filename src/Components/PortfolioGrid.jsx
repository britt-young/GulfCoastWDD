import farm from "../assets/clippings/mockup-farm.svg";
import florist from "../assets/clippings/mockup-florist.svg";
import photo from "../assets/clippings/mockup-photo.svg";
import { NavLink } from "react-router-dom";
import WaveAnimation from "./WaveAnimation3";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const PortfolioGrid = () => {
  return (
    <section className="relative overflow-hidden min-h-[900px] ">
      <WaveAnimation />
      <div className="relative lg:mx-auto mx-5 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 text-black pt-40 ">
        <div className="">
          <h4 className="text-alternate dark:text-alt">Portfolio</h4>
          <h2 className="dark:text-white">
            Some of our recent website designs
          </h2>
        </div>
        <div className="dark:text-white flex items-center justify-start pb-10 lg:pb-0">
          <p className="border-t-1 lg:border-t-0 lg:border-l-1 border-l-0 border-alternate dark:border-alt lg:pl-5 lg:pt-0 pt-5">
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
      <div className="dark:text-white relative text-center mx-5 lg:mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-2 gap-20 lg:pt-25 px-0">
        {/* First Webpage */}
        <div>
          <img
            src={farm}
            alt="Mockup Image"
            className="lg:w-full md:w-[90%] w-[80%] mx-auto object-cover"
          />

          <h5 className="pt-2 font-bold uppercase text-black dark:text-white">Local Farm</h5>
          <p className="pb-5">
            A beautiful farm website showcasing local produce
          </p>
          <NavLink
            to="https://localfarm.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-alternate dark:bg-alt dark:hover:bg-white dark:text-black hover:bg-alt text-white hover:text-black flex flex-row items-center justify-center mx-auto">
              visit website <ArrowUpRightIcon className="size-5 ms-2" />
            </button>
          </NavLink>
        </div>
        {/* Second Webpage */}
        <div>
          <img
            src={florist}
            alt="Mockup Image"
            className="lg:w-full md:w-[90%] w-[80%] mx-auto object-cover"
          />

          <h5 className="pt-2 font-bold uppercase text-black dark:text-white">Local Florist</h5>
          <p className="pb-5">
            A beautiful florist website showcasing local flowers
          </p>
          <NavLink
            to="https://localflorist.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-alternate dark:bg-alt dark:hover:bg-white dark:text-black hover:bg-alt text-white hover:text-black flex flex-row items-center justify-center mx-auto">
              visit website <ArrowUpRightIcon className="size-5 ms-2" />
            </button>
          </NavLink>
        </div>
        {/* Third Webpage */}
        <div className="relative group">
          <img
            src={photo}
            alt="Mockup Image"
            className="lg:w-full md:w-[90%] w-[80%] mx-auto object-cover"
          />

          <h5 className="pt-2 font-bold uppercase text-black dark:text-white">Julia Rose Photo</h5>
          <p className="pb-5">
            A beautiful photography website of stunning visuals
          </p>
          <NavLink
            to="https://juliarosephoto.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-alternate dark:bg-alt dark:hover:bg-white dark:text-black hover:bg-alt text-white hover:text-black flex flex-row items-center justify-center mx-auto">
              visit website <ArrowUpRightIcon className="size-5 ms-2" />
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
