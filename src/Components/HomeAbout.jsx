import { useNavigate } from "react-router-dom";
import GuarenteeGrid from "./GuarenteeGrid";
import pic from "../assets/imgs/homeabout1.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import WaveAnimation from "./WaveAnimation3";
import { px } from "framer-motion";

AOS.init();

const HomeAbout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/About");
  };
  return (
    <div className="bg-white dark:bg-dark">
      <WaveAnimation/>

      {/* Content */}
      <div className="relative pt-40 pb-20 px-5 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-15 text-black">
        {/* Image */}
        <div className="w-full flex items-center justify-center ">
          <img
            src={pic}
            alt="website preview"
            data-aos="fade-right"
            data-aos-duration="1500"
            className="w-fit lg:h-185 md:h-140 h-100 object-cover outline-2 outline-offset-1 outline-white rounded-2xl shadow-lg"
          />
        </div>

        {/* Text + CTA */}
        <div className="flex flex-col items-start dark:text-white">
          <h4 className="text-alternate dark:text-alt">Gulf Coast Guarantee</h4>
          <h2 className="">Websites starting at $0 down, $145 per month</h2>
          <p className="mt-5">
            We offer a variety of pricing packages for you to choose from. Our
            monthly subscription offer includes a standard 5-page website for $0
            down. If needed, pages can be added. Pricing will vary depending on
            the number of additional pages requested.
            <span className="font-bold mx-1">12 month minimum contract</span>
            Includes design, development, hosting, unlimited edits, 24/7
            support, and lifetime updates.
          </p>
          <GuarenteeGrid />
          <button
            className="mt-5 w-full md:w-fit flex flex-row items-center justify-center dark:bg-alt dark:hover:bg-white dark:text-black bg-alternate text-white hover:bg-alt hover:text-black"
            onClick={handleClick}
          >
            Get to know gcwdd <ArrowRightIcon className="size-6 ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
