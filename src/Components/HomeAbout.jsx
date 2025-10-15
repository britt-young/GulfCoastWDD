import { useNavigate } from "react-router-dom";
import GuarenteeGrid from "./GuarenteeGrid";
import pic from "../assets/imgs/homeabout.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import WaveBackground from "./WaveBackground";

AOS.init();

const HomeAbout = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/About"); // Navigate to the "/contact" route
  };
  return (
    <section className="relative px-5 lg:pt-25 pt-10 overflow-hidden">
      <WaveBackground />

      {/* Content */}
      <div className="relative py-10 px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-5 lg:gap-10 text-black">
        {/* Image */}
        <div className="w-full flex items-center justify-center">
          <img
            src={pic}
            alt="website preview"
            data-aos="fade-right"
            data-aos-duration="1500"
            className="w-fit lg:h-185 md:h-140 h-100 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text + CTA */}
        <div className="flex flex-col items-start">
          <h4 className="text-alternate dark:text-alt">Gulf Coast Guarantee</h4>
          <h2 className="dark:text-white">
            Websites starting at $145 per month
          </h2>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <GuarenteeGrid />

          <button
            className="mt-10 w-full flex justify-center mx-auto bg-alternate text-white hover:bg-alt hover:text-black"
            onClick={handleClick}
          >
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
