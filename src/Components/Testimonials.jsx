import AOS from "aos";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import 'aos/dist/aos.css';
AOS.init();

const Testimonials = () => {
  return (
    <div className="lg:py-20 py-15 px-10 bg-gray-50">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-center py-2 mb-5 text-center">
        <h4 className="">testimonials</h4>
        <h2 className="">What our clients are saying</h2>
        <p className="mt-5 lg:w-200 mx-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>
      {/* Testimonial Grid */}
      <div className="mx-auto max-w-full grid grid-cols-1 lg:grid-cols-3 py-5 lg:gap-x-5 gap-y-5">
        {/* Testimonial Card */}
        <div className="card min-h-full shadow-black/30" data-aos="zoom-in" data-aos-duration="1500">
          <div className="my-2 items-start justify-start flex-grow relative">
            <p className=" mb-15">
              <span className="inline-flex items-start me-1">
                <RiDoubleQuotesL />
              </span>
              Brittney transformed our outdated website into a modern,
              user-friendly platform. The team was responsive and dedicated, and
              we've seen a noticeable increase in traffic and positive feedback
              since the launch
              <span className="inline-flex items-end ms-1">
                <RiDoubleQuotesR />
              </span>
            </p>
            <div className="absolute bottom-0 left-0 right-0">
              <h5 className="leading-5 font-bold">Sarah T.</h5>
              <h5 className="leading-5">Marketing Director, Local Florist</h5>
            </div>
          </div>
        </div>
        {/* Testimonial Card */}
        <div className="card min-h-full shadow-black/30" data-aos="zoom-in" data-aos-duration="1500">
          <div className="my-2 items-start justify-start flex-grow relative">
            <p className=" mb-15">
              <span className="inline-flex items-start me-1">
                <RiDoubleQuotesL />
              </span>
              Thanks to Gulf Coast WDD, our e-commerce site is not only
              beautiful but also fast and user-friendly. Their attention to
              detail and expertise led to a significant boost in sales
              <span className="inline-flex items-end ms-1">
                <RiDoubleQuotesR />
              </span>
            </p>
            <div className="absolute bottom-0 left-0 right-0">
              <h5 className="leading-5 font-bold">John M.</h5>
              <h5 className=" leading-5">CEO, Local Farm</h5>
            </div>
          </div>
        </div>
        {/* Testimonial Card */}
        <div className="card min-h-full shadow-black/30" data-aos="zoom-in" data-aos-duration="1500">
          <div className="my-2 items-start justify-start flex-grow relative  transition-colors duration-300">
            <p className=" mb-15">
              <span className="inline-flex items-start me-1">
                <RiDoubleQuotesL />
              </span>
              Brittney brought our vision to life with a stunning and functional
              website. Their ongoing support and expertise have been invaluable
              to our business
              <span className="inline-flex items-end ms-1">
                <RiDoubleQuotesR />
              </span>
            </p>
            <div className="absolute bottom-0 left-0 right-0">
              <h5 className=" leading-5 font-bold">Emily R.</h5>
              <h5 className=" leading-5">Founder, Julia Rose Photography</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

// dark:bg-linear-240 from-[#1f3b47] to-[#3d8069] dark:text-white
