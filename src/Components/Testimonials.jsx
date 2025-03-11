import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-yellow-300 lg:p-20 p-5">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-center py-5 mb-10">
        <h4 className="">testimonials</h4>
        <h2 className="text-center">what our clients are saying</h2>
        <p className="mt-5 lg:w-200 mx-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>
      {/* Testimonial Grid */}
      <div className="mx-auto max-w-full grid grid-cols-1 lg:grid-cols-3 lg:p-5 lg:gap-x-5 overflow-hidden">
        {/* Testimonial Card */}
        <div className="bg-blue-50 h-fit m-2 mt-5 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-4xl lg:rounded-2xl flex flex-col relative">
          <div className="my-2 items-start justify-start">
            <h4 className="mt-5">Mobile First Design</h4>
            <p className="mt-2 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
        </div>
        {/* Testimonial Card */}
        <div className="bg-blue-50 h-fit m-2 mt-5 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-4xl lg:rounded-2xl flex flex-col relative">
          <div className="my-2 items-start justify-start">
            <h4 className="mt-5">Mobile First Design</h4>
            <p className="mt-2 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
        </div>
        {/* Testimonial Card */}
        <div className="bg-blue-50 h-fit m-2 mt-5 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-4xl lg:rounded-2xl flex flex-col relative">
          <div className="my-2 items-start justify-start">
            <h4 className="mt-5">Mobile First Design</h4>
            <p className="mt-2 mb-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
              odio commodi voluptatibus possimus provident! Quidem magnam, velit
              provident cupiditate, quasi earum temporibus numquam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
