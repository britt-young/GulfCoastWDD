import { useNavigate, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { TbDeviceMobileStar } from "react-icons/tb";

import AOS from "aos";
import "aos/dist/aos.css";
import WaveAnimation2 from "./WaveAnimation2";

AOS.init();

const ServiceCards = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact"); // Navigate to the "/contact" route
  };
  return (
   

      <div className="mx-auto max-w-7xl pt-20 bg-alternate dark:bg-dark">
        <div className="flex flex-col items-center justify-center py-5 text-white">
          <h4>what we offer</h4>
          <h2 className="text-center ">Services included in our packages</h2>
          <p className="mt-2 lg:w-200 mx-5 text-center">
            Let us take care of your website so you can take care of your business
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
                Make a good first impression with potential clients by having a website that is easy to navigate and has intuitive feature placement to guide users to the information they want to see
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
                Fast loading times are a non-negotiable for ensuring a positive user experience! We optimize images, videos, and code to improve page speed and keep users engaged and satisfied
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
                Our websites adapt to every screen size! Half of all website traffic originates from mobile devices, making responsive design essential for your site to reach all types of users
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
                Users want to know their personal data is safe and secure when browsing your website. We include HTTPS encryption when building our sites to give your users piece of mind that their senstitive data is protected from theft or misuse 
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
                Our "on-page" SEO strategy includes key components like high quality copyright content, keyword optimization, meta tag descriptions, clean URL structure, and enhanced user experience to attract relevant traffic and improve SEO rankings 
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
                Already have a Shopify store? We can seemlessly integrate your store with your new custom website. Starting your E-Commerse website from the ground up? We will take care of everything, all you need to do is provide us your inventory!
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
  );
};

export default ServiceCards;
