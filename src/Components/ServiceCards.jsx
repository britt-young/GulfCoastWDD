import { useNavigate, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { TbDeviceMobileStar } from "react-icons/tb";

import AOS from "aos";
import "aos/dist/aos.css";
import WaveBackground2 from "./WaveBackground2";
AOS.init();

const ServiceCards = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact"); // Navigate to the "/contact" route
  };
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:px-8">
      <WaveBackground2 />

      <div className="relative mx-auto max-w-7xl pt-20 lg:h-[850px] h-full">
        <div className="flex flex-col items-center justify-center py-5 text-white">
          <h4>what we offer</h4>
          <h2 className="text-center ">Services included in all our packages</h2>
          <p className="mt-2 lg:w-200 mx-5 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
        {/* Feature Card Grid */}
        <div
          className="group mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-4 gap-y-0 lg:p-8 p-0"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          {/* Feature Card */}
          <div className="card hover:scale-105 transition-all duration-300 ease-in bg-white text-black shadow-lg shadow-dark rounded-3xl">
            {/* <TbDeviceMobileStar className="bg-white border-2 border-black rounded-lg p-2 w-15 h-15 absolute transform lg:translate-x-0 -top-7.5 left-7.5" /> */}
            <div className="h-full w-fit">
              <h5 className="text-alternate">User-Friendly Features</h5>
              <p className="mt-1 mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                odio commodi voluptatibus possimus provident! Quidem magnam,
                velit provident cupiditate, quasi earum temporibus numquam!
              </p>
            </div>
            <div className="flex justify-end hover:text-alternate">
              <Link
                to="/services/features"
                className="flex items-center px-2 py-1 w-fit"
              >
                see more <FaArrowRight className="ms-2 inline-block" />
              </Link>
            </div>
          </div>
          {/* Feature Card */}
          <div className="card hover:scale-105 transition-all duration-300 ease-in bg-white text-black shadow-lg shadow-dark rounded-3xl">
            {/* <TbDeviceMobileStar className="bg-white border-2 border-black rounded-lg p-2 w-15 h-15 absolute transform lg:translate-x-0 -top-7.5 left-7.5" /> */}
            <div className="h-full w-fit">
              <h5 className="text-alternate">
                Loading Speed Optimization
              </h5>
              <p className="mt-1 mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                odio commodi voluptatibus possimus provident! Quidem magnam,
                velit provident cupiditate, quasi earum temporibus numquam!
              </p>
            </div>
            <div className="flex justify-end hover:text-alternate">
              <Link
                to="/services/optimization"
                className="flex items-center px-2 py-1 w-fit"
              >
                see more <FaArrowRight className="ms-2 inline-block" />
              </Link>
            </div>
          </div>
          {/* Feature Card */}
          <div className="card hover:scale-105 transition-all duration-300 ease-in bg-white text-black shadow-lg shadow-dark rounded-3xl">
            {/* <TbDeviceMobileStar className="bg-white border-2 border-black rounded-lg p-2 w-15 h-15 absolute transform lg:translate-x-0 -top-7.5 left-7.5" /> */}
            <div className="h-full w-fit">
              <h5 className="text-alternate">Responsive Design</h5>
              <p className="mt-1 mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                odio commodi voluptatibus possimus provident! Quidem magnam,
                velit provident cupiditate, quasi earum temporibus numquam!
              </p>
            </div>
            <div className="flex justify-end hover:text-alternate">
              <Link
                to="/services/responsiveness"
                className="flex items-center px-2 py-1 w-fit"
              >
                see more <FaArrowRight className="ms-2 inline-block" />
              </Link>
            </div>
          </div>
          {/* Feature Card */}
          <div className="card hover:scale-105 transition-all duration-300 ease-in bg-white text-black shadow-lg shadow-dark rounded-3xl">
            {/* <TbDeviceMobileStar className="bg-white border-2 border-black rounded-lg p-2 w-15 h-15 absolute transform lg:translate-x-0 -top-7.5 left-7.5" /> */}
            <div className="h-full w-fit">
              <h5 className="text-alternate">User Security and Web Encryption</h5>
              <p className="mt-1 mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                odio commodi voluptatibus possimus provident! Quidem magnam,
                velit provident cupiditate, quasi earum temporibus numquam!
              </p>
            </div>
            <div className="flex justify-end hover:text-alternate">
              <Link
                to="/services/security"
                className="flex items-center px-2 py-1 w-fit"
              >
                see more <FaArrowRight className="ms-2 inline-block" />
              </Link>
            </div>
          </div>
          {/* Feature Card */}
          <div className="card hover:scale-105 transition-all duration-300 ease-in bg-white text-black shadow-lg shadow-dark rounded-3xl">
            {/* <TbDeviceMobileStar className="bg-white border-2 border-black rounded-lg p-2 w-15 h-15 absolute transform lg:translate-x-0 -top-7.5 left-7.5" /> */}
            <div className="h-full w-fit">
              <h5 className="text-alternate">On-Page SEO</h5>
              <p className="mt-1 mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                odio commodi voluptatibus possimus provident! Quidem magnam,
                velit provident cupiditate, quasi earum temporibus numquam!
              </p>
            </div>
            <div className="flex justify-end hover:text-alternate">
              <Link
                to="/services/seo"
                className="flex items-center px-2 py-1 w-fit"
              >
                see more <FaArrowRight className="ms-2 inline-block" />
              </Link>
            </div>
          </div>
          {/* Feature Card */}
          <div className="card hover:scale-105 transition-all duration-300 ease-in bg-white text-black shadow-lg shadow-dark rounded-3xl">
            {/* <TbDeviceMobileStar className="bg-white border-2 border-black rounded-lg p-2 w-15 h-15 absolute transform lg:translate-x-0 -top-7.5 left-7.5" /> */}
            <div className="h-full w-fit">
              <h5 className="text-alternate">Shopify Store Integration</h5>
              <p className="mt-1 mb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
                odio commodi voluptatibus possimus provident! Quidem magnam,
                velit provident cupiditate, quasi earum temporibus numquam!
              </p>
            </div>
            <div className="flex justify-end hover:text-alternate">
              <Link
                to="/services/shopify"
                className="flex items-center px-2 py-1 w-fit "
              >
                see more <FaArrowRight className="ms-2 inline-block" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-0">
          <button className="lg:mt-0 mt-10 " onClick={handleClick}>
            get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
