import React from "react";

const Testimonials = () => {
  return (
    <div className="bg-yellow-300 pt-20">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-center py-5">
        <h4 className="">testimonials</h4>
        <h2 className="text-center text-3xl font-bold">what our clients are saying</h2>
        <p className="mt-5 lg:w-200 mx-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
      </div>
      {/* Testimonial Grid */}
      <div className="mx-auto  grid grid-cols-1 lg:grid-cols-3 lg:gap-x-2 lg:gap-y-20 gap-0 lg:p-20 pb-4 overflow-hidden">
        {/* Testimonial Card */}
        <div className="bg-blue-50 h-fit m-2 mt-20 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col relative">
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
        <div className="bg-blue-50 h-fit m-2 mt-20 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col relative">
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
        <div className="bg-blue-50 h-fit m-2 mt-20 lg:mt-0 p-8 shadow-lg shadow-gray-500 rounded-lg flex flex-col relative">
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
