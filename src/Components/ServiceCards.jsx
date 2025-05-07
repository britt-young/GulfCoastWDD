import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { TbDeviceMobileStar } from "react-icons/tb";
import { GiSpeedometer } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GiEarthAmerica } from "react-icons/gi";
import { ImEmbed2 } from "react-icons/im";

const ServiceCards = () => {
  const navigate = useNavigate();
  
    const handleClick = () => {
      navigate("/Contact"); // Navigate to the "/contact" route
    };
  return (
    <div className="main-background relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-center py-5 ">
        <h4 className="">what we offer</h4>
        <h2 className="text-center">Our Services</h2>
        <p className="mt-5 lg:w-200 mx-5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>
      {/* Feature Card Grid */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-20 gap-0 lg:pb-10 lg:pt-15 p-0">
        {/* Feature Card */}
        <div className="card hover:bg-primary hover:text-white transition duration-300 ease-in-out">
        <TbDeviceMobileStar className="text-white hover:bg-primary bg-alternate rounded-lg p-4 w-20 h-20 mb-4 absolute transform translate-x-full -top-11" />
          <div className="my-2 items-start justify-start">
            <h4 className="mt-5 text-lg">Mobile First Design</h4>
            <p className=" mt-2 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div>
            <Link
              to="/services"
              className="flex items-center justify-start font-bold hover:text-black rounded-lg px-2 py-1 w-fit"
            >
              see more <FaArrowRight className="ms-2 inline-block" />
            </Link>
          </div>
        </div>

        {/* Feature Card */}
        <div className="card">
        <GiSpeedometer className="text-white  bg-alternate  rounded-lg p-4 w-20 h-20 mb-4 absolute transform -translate-x-0.5 -top-11" />
          <div className="my-2 items-start justify-start">
            <h4 className="mt-5">Optimized Page Loading</h4>
            <p className="mt-2 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div>
            <Link
              to="/services"
              className="flex items-center justify-start font-bold hover:text-primary  rounded-lg px-2 py-1 w-fit"
            >
              see more <FaArrowRight className="ms-2 inline-block" />
            </Link>
          </div>
        </div>

        {/* Feature Card */}
        <div className="card">
        <LiaLaptopCodeSolid className="text-white  bg-alternate  rounded-lg p-4 w-20 h-20 mb-4 absolute transform -translate-x-0.5 -top-11" />
          <div className="my-2 items-start justify-start">
            <h4 className="mt-5">Device Responsiveness</h4>
            <p className="mt-2 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div>
            <Link
              to="/services"
              className="flex items-center justify-start font-bold hover:text-primary  rounded-lg px-2 py-1 w-fit"
            >
              see more <FaArrowRight className="ms-2 inline-block" />
            </Link>
          </div>
        </div>

        {/* Feature Card */}
        <div className="card">
        <GiEarthAmerica className="text-white  bg-alternate  rounded-lg p-4 w-20 h-20 mb-4 absolute transform -translate-x-0.5 -top-11" />
          <div className="my-2 items-start justify-start">
            <h4 className=" mt-5">Based in USA</h4>
            <p className=" mt-2 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div>
            <Link
              to="/services"
              className="flex items-center justify-start font-bold hover:text-primary  rounded-lg px-2 py-1 w-fit"
            >
              see more <FaArrowRight className="ms-2 inline-block" />
            </Link>
          </div>
        </div>

        {/* Feature Card */}
        <div className="card">
        <ImEmbed2 className="text-white  bg-alternate  rounded-lg p-4 w-20 h-20 mb-4 absolute transform -translate-x-0.5 -top-11" />
          <div className="my-2 items-start justify-start">
            <h4 className=" mt-5">Mobile First Design</h4>
            <p className=" mt-2 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div>
            <Link
              to="/services"
              className="flex items-center justify-start font-bold hover:text-primary  rounded-lg px-2 py-1 w-fit"
            >
              see more <FaArrowRight className="ms-2 inline-block" />
            </Link>
          </div>
        </div>

        {/* Feature Card */}
        <div className="card">
        <ImEmbed2 className="text-white  bg-alternate  rounded-lg p-4 w-20 h-20 mb-4 absolute transform -translate-x-0.5 -top-11" />
          <div className="my-2 items-start justify-start">
            <h4 className=" mt-5">Mobile First Design</h4>
            <p className="mt-2 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div>
            <Link
              to="/services"
              className="flex items-center justify-start font-bold hover:text-primary  rounded-lg px-2 py-1 w-fit"
            >
              see more <FaArrowRight className="ms-2 inline-block" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-0">
      <button className="lg:mt-0 mt-5" onClick={handleClick} >get started</button>
      </div>
    </div>
  );
};

export default ServiceCards;
