import { useNavigate, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { TbDeviceMobileStar } from "react-icons/tb";


import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ServiceCards = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact"); // Navigate to the "/contact" route
  };
  return (
    <div className="relative px-6 py-24 lg:px-8 bg-gray-50">
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
      <div
        className="group mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-20 gap-0 lg:pb-10 lg:pt-15 p-0"
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        {/* Feature Card */}
        <div className="card hover:scale-105 transition-all duration-300 ease-in">
          {/* <TbDeviceMobileStar className="bg-white border-2 border-black rounded-lg p-2 w-15 h-15 absolute transform lg:translate-x-0 -top-7.5 left-7.5" /> */}
          <div className="mt-5">
            <h5 className="text-xl font-semibold">Mobile First Design</h5>
            <p className="mt-1 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              to="/services"
              className="flex items-center font-medium px-2 py-1 w-fit"
            >
              see more <FaArrowRight className="ms-2 inline-block" />
            </Link>
          </div>
        </div>
        {/* Feature Card */}
        <div className="card hover:scale-105 transition-all duration-300 ease-in">
          {/* <TbDeviceMobileStar className="bg-white border-2 border-black rounded-lg p-2 w-15 h-15 absolute transform lg:translate-x-0 -top-7.5 left-7.5" /> */}
          <div className="mt-5">
            <h5 className="text-xl font-semibold">
              Loading Speed Optimization
            </h5>
            <p className="mt-1 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              to="/services"
              className="flex items-center font-medium px-2 py-1 w-fit"
            >
              see more <FaArrowRight className="ms-2 inline-block" />
            </Link>
          </div>
        </div>
        {/* Feature Card */}
        <div className="card hover:scale-105 transition-all duration-300 ease-in">
          {/* <TbDeviceMobileStar className="bg-white border-2 border-black rounded-lg p-2 w-15 h-15 absolute transform lg:translate-x-0 -top-7.5 left-7.5" /> */}
          <div className="mt-5">
            <h5 className="text-xl font-semibold">Responsive Design</h5>
            <p className="mt-1 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              to="/services"
              className="flex items-center font-medium px-2 py-1 w-fit"
            >
              see more <FaArrowRight className="ms-2 inline-block" />
            </Link>
          </div>
        </div>
        {/* Feature Card */}
        <div className="card hover:scale-105 transition-all duration-300 ease-in">
          {/* <TbDeviceMobileStar className="bg-white border-2 border-black rounded-lg p-2 w-15 h-15 absolute transform lg:translate-x-0 -top-7.5 left-7.5" /> */}
          <div className="mt-5">
            <h5 className="text-xl font-semibold">Based in the USA</h5>
            <p className="mt-1 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              to="/services"
              className="flex items-center font-medium px-2 py-1 w-fit"
            >
              see more <FaArrowRight className="ms-2 inline-block" />
            </Link>
          </div>
        </div>
        {/* Feature Card */}
        <div className="card hover:scale-105 transition-all duration-300 ease-in">
          {/* <TbDeviceMobileStar className="bg-white border-2 border-black rounded-lg p-2 w-15 h-15 absolute transform lg:translate-x-0 -top-7.5 left-7.5" /> */}
          <div className="mt-5">
            <h5 className="text-xl font-semibold">On-Page SEO</h5>
            <p className="mt-1 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              to="/services"
              className="flex items-center font-medium px-2 py-1 w-fit"
            >
              see more <FaArrowRight className="ms-2 inline-block" />
            </Link>
          </div>
        </div>
        {/* Feature Card */}
        <div className="card hover:scale-105 transition-all duration-300 ease-in">
          {/* <TbDeviceMobileStar className="bg-white border-2 border-black rounded-lg p-2 w-15 h-15 absolute transform lg:translate-x-0 -top-7.5 left-7.5" /> */}
          <div className="mt-5 ">
            <h5 className="text-xl font-semibold">Mobile First Design</h5>
            <p className="mt-1 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
          <div className="flex justify-end ">
            <Link
              to="/services"
              className="flex items-center font-medium px-2 py-1 w-fit "
            >
              see more <FaArrowRight className="ms-2 inline-block" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-0">
        <button className="lg:mt-0 mt-10" onClick={handleClick}>
          get started
        </button>
      </div>
    </div>
  );
};

export default ServiceCards;
