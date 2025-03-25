import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  return (
    <div className="bg-white dark:bg-black dark:text-white lg:p-20 p-5">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-center py-5 mb-5 text-center">
        <h4 className="text-main dark:text-alt-dark">testimonials</h4>
        <h2 className="">what our clients are saying</h2>
        <p className="mt-5 lg:w-200 mx-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>
      {/* Testimonial Grid */}
      <div className="mx-auto max-w-full grid grid-cols-1 lg:grid-cols-3 py-5 lg:gap-x-5 gap-y-5">
        {/* Testimonial Card */}
        <div className="card min-h-full">
          <div className="my-2 items-start justify-start flex-grow">
            <p className="mt-5 mb-10">
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
            <h4 className="text-main dark:text-alt-dark">Sarah T.</h4>
            <h4 className="text-main dark:text-alt-dark">Marketing Director, Local Florist</h4>
          </div>
        </div>
        {/* Testimonial Card */}
        <div className="card min-h-full">
          <div className="my-2 items-start justify-start flex-grow">
            <p className="mt-5 mb-10">
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
            <h4 className="text-main dark:text-alt-dark">John M.</h4>
            <h4 className="text-main dark:text-alt-dark">CEO, Local Farm</h4>
          </div>
        </div>
        {/* Testimonial Card */}
        <div className="card min-h-full">
          <div className="my-2 items-start justify-start flex-grow">
            <p className="mt-5 mb-10">
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
            <h4 className="text-main dark:text-alt-dark">Emily R.</h4>
            <h4 className="text-main dark:text-alt-dark">Founder, Riley Addison Photography</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
