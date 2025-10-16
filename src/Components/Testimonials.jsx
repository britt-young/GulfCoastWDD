import AOS from "aos";
import { FaUserCircle } from "react-icons/fa"; // placeholder avatar
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import "aos/dist/aos.css";

import WaveAnimation from "./WaveAnimation2";
AOS.init();

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden lg:min-h-[580px] bg-white">
      <WaveAnimation />
      <div className="relative flex flex-col items-center justify-center mx-auto pt-40">
        <div className="max-w-7xl py-2 mb-5 text-white text-center">
          <h4>Testimonials</h4>
          <h2>What our clients are saying</h2>
          <p className="mt-5 mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-5 px-10 items-center">
          {/* Testimonial Card */}
          <div
            className="flex items-start gap-4 bg-white  rounded-3xl shadow-md p-6"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            {/* Icon / Avatar */}
            <div className="flex-shrink-0 text-alternate">
              <FaUserCircle className="text-5xl" />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-700 mb-2">
                <RiDoubleQuotesL className="inline-block mr-1 text-alternate" />
                Brittney transformed our outdated website into a modern,
                user-friendly platform. We've seen a noticeable increase in
                traffic and positive feedback since the launch
                <RiDoubleQuotesR className="inline-block ml-1 text-alternate" />
              </p>
              <div className="flex flex-col items-end pe-8">
                <p className="text-sm">Local Florist</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div
            className="flex items-start gap-4 bg-white rounded-3xl shadow-md p-6"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="flex-shrink-0 text-alternate">
              <FaUserCircle className="text-5xl" />
            </div>
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-700 mb-2">
                <RiDoubleQuotesL className="inline-block mr-1 text-alternate" />
                Thanks to Gulf Coast WDD, our e-commerce site is not only
                beautiful but also fast and user-friendly. Their attention to
                detail and expertise led to a significant boost in sales
                <RiDoubleQuotesR className="inline-block ml-1 text-alternate" />
              </p>
              <div className="flex flex-col items-end pe-8">
                <p className="text-sm ">Local Farm</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div
            className="flex items-start gap-4 bg-white  rounded-3xl shadow-md p-6"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <div className="flex-shrink-0 text-alternate">
              <FaUserCircle className="text-5xl" />
            </div>
            <div className="flex flex-col justify-between h-full">
              <p className="text-gray-700 mb-2">
                <RiDoubleQuotesL className="inline-block mr-1 text-alternate" />
                Brittney brought our vision to life with a stunning and
                functional website. Their ongoing support and expertise have
                been invaluable to our business
                <RiDoubleQuotesR className="inline-block ml-1 text-alternate" />
              </p>
              <div className="flex flex-col items-end pe-8">
                <p className="text-sm">Julia Rose Photography</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
