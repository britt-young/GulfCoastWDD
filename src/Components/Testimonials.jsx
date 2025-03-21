import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-white lg:p-20 p-5">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-center py-5 mb-5 text-center">
        <h4 className="">testimonials</h4>
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
        <div className="bg-gray-50 h-fit min-h-full m-2 mt-0 p-8 shadow-lg shadow-gray-500 rounded-4xl lg:rounded-2xl flex flex-col justify-center items-center">
        <div className="my-2 items-start justify-start flex-grow">
            <h4 className="mt-0">Mobile First Design</h4>
            <p className="mt-5 mb-10">
              "Brittney transformed our outdated website into a modern,
              user-friendly platform. The team was responsive and dedicated, and
              we've seen a noticeable increase in traffic and positive feedback
              since the launch."
            </p>
            <h4>– Sarah T., Marketing Director, Local Florist</h4>
          </div>
        </div>
        {/* Testimonial Card */}
        <div className="bg-gray-50 h-fit min-h-full m-2 mt-0 p-8 shadow-lg shadow-gray-500 rounded-4xl lg:rounded-2xl flex flex-col justify-center items-center">
        <div className="my-2 items-start justify-start flex-grow">
            <h4 className="mt-0">Mobile First Design</h4>
            <p className="mt-5 mb-10">
            "Thanks to Gulf Coast WDD, our e-commerce site is not only beautiful but also fast and user-friendly. Their attention to detail and expertise led to a significant boost in sales."
            </p>
            <h4>– John M., CEO, Local Farm</h4>
          </div>
        </div>
        {/* Testimonial Card */}
        <div className="bg-gray-50 h-fit min-h-full m-2 mt-0 p-8 shadow-lg shadow-gray-500 rounded-4xl lg:rounded-2xl flex flex-col justify-center items-center">
        <div className="my-2 items-start justify-start flex-grow">
            <h4 className="mt-0">Mobile First Design</h4>
            <p className="mt-5 mb-10">
            "Brittney brought our vision to life with a stunning and functional website. Their ongoing support and expertise have been invaluable to our business."
            </p>
            <h4>– Emily R., Founder, Riley Addison Photography</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
