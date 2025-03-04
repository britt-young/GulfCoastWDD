import React from "react";

const HomeHeader = () => {
  return (
    <div className="relative isolate bg-yellow-400 px-6 py-24 sm:py-32 lg:px-80 flex flex-col lg:flex-row items-center justify-center gap-8">
      <div className="h-full items-start justify-center flex flex-col px-5 lg:px-0">
        <h4>unique designs, custom-coded</h4>
        <h2>small business web design</h2>
        <p className="mt-5">No drag-and-drop webpage builders or templates. We offer 100% hand-coded websites for your business starting at only $145/mo with free hosting and edits*</p>
        <button className="lg:mt-15 mt-5">get started</button>
      </div>
      <div className="flex items-center lg:justify-start justify-center">
        <picture>
          <img
            src="https://plus.unsplash.com/premium_vector-1733932442559-1e9f83edb452?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="A random image"
            className="w-250"
          />
        </picture>
      </div>
    </div>
  );
};

export default HomeHeader;

// grid lg:grid-cols-12 gap-8 grid-cols-1 h-[750px] lg:m-0 m-5