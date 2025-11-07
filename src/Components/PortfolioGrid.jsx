// import { NavLink } from "react-router-dom";

// import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Local Farm",
    description:
      "A template website for local farmers and seasonal grocerers. A community-driven agricultural resource connecting local farmers and families. Our mission is to promote sustainable agriculture, provide a fun outdoor experience, and share local food with everyone.",
    icon: CloudArrowUpIcon,
    image: "./imgs/farm.png",
  },
  {
    name: "Local Florist",
    description:
      "A template website for florists wanting to sell online. Local Florist is committed to beautiful arrangements, fair pricing, and exceptional service.",
    icon: LockClosedIcon,
    image: "./imgs/florist.png",
  },
  {
    name: "Julia Rose Photography",
    description:
      "A template website for a freelance photographer. Specializing in senior portraits and elopements.",
    icon: ServerIcon,
    image: "./imgs/photo.png",
  },
];

const PortfolioGrid = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <div className="overflow-hidden bg-white dark:bg-dark py-24 lg:pl-52 px-5 lg:px-0">
      <div className="flex lg:flex-row flex-col gap-x-6 gap-y-16 sm:gap-y-20 lg:mx-0 ">
        {/* Left section: Text + Features */}
        <div className="lg:pt-4 lg:w-2/5">
          <div className="">
            <h4 className="text-alternate dark:text-alt">Portfolio</h4>
            <h2 className="dark:text-white">
              Some of our recent website designs
            </h2>
            <p className="mt-6 text-black dark:text-white">
              At Gulf Coast Web Design & Development, we specialize in small
              business web design and development for clients all along the
              northern coast of the gulf. No matter your business, we can build
              a website that is beautiful, tailored to your industry, boosts
              customer trust, and converts website viewers into patrons.
            </p>

            <dl className="mt-10 space-y-8 text-base text-black dark:text-white lg:max-w-none">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  onClick={() => setActiveFeature(feature)}
                  className={`relative pl-9 cursor-pointer transition-all duration-300 ${
                    activeFeature.name === feature.name
                      ? "text-alternate dark:text-alt"
                      : "hover:text-alternate hover:dark:text-alt"
                  }`}
                >
                  <dt className="inline font-semibold">
                    <feature.icon
                      aria-hidden="true"
                      className={`absolute top-1 left-1 size-5 transition-colors ${
                        activeFeature.name === feature.name
                          ? "text-alternate dark:text-alt"
                          : "text-black hover:text-alternate dark:hover:text-white dark:text-white"
                      }`}
                    />
                    {feature.name}
                  </dt>
                  <dd className="font-normal">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Right section: Image */}
        <div className="relative flex items-center justify-center lg:w-3/5">
          <img
            key={activeFeature.image}
            alt={activeFeature.name}
            src={activeFeature.image}
            className="lg:rounded-l-3xl shadow-xl shadow-black/30 ring-1 ring-white sm:w-[36rem] lg:w-[1000px] md:-ml-4 lg:-ml-0 transition-all duration-700 ease-in-out opacity-100 animate-fadeIn"
          />
        </div>
      </div>
    </div>
  );
};

// <section className="bg-white dark:bg-dark py-20">
//   <div className=" lg:mx-auto mx-5 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 text-black">
//     <div className="">
//       <h4 className="text-alternate dark:text-alt">Portfolio</h4>
//       <h2 className="dark:text-white">
//         Some of our recent website designs
//       </h2>
//     </div>
//     <div className="dark:text-white flex items-center justify-start pb-10 lg:pb-0">
//       <p className="border-t-1 lg:border-t-0 lg:border-l-1 border-l-0 border-alternate dark:border-alt lg:pl-5 lg:pt-0 pt-5">
//         At Gulf Coast Web Design & Development, we specialize in small
//         business web design and development for clients all along the
//         northern coast of the gulf. No matter your business, we can build a
//         website that is beautiful, tailored to your industry, boosts
//         customer trust, and converts website viewers into patrons.
//       </p>
//     </div>
//   </div>
//   {/* Portfolio Cards */}
//   <div className="dark:text-white relative text-center mx-5 lg:mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 lg:gap-2 gap-20 lg:pt-25 px-0">
//     {/* First Webpage */}
//     <div>
//       <img
//         src={farm}
//         alt="Mockup Image"
//         className="lg:w-full md:w-[90%] w-[80%] mx-auto object-cover"
//       />

//       {/* <h5 className="pt-2 font-bold uppercase text-black dark:text-white">Local Farm</h5>
//       <p className="pb-5">
//         A beautiful farm website showcasing local produce
//       </p> */}
//       <NavLink
//         to="https://localfarm.dev"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <button
//           alt="visit website"
//           className="bg-blue-300 dark:bg-alt dark:hover:bg-white dark:text-black hover:bg-alt text-white hover:text-black flex flex-row items-center justify-center mx-auto mt-5"
//         >
//           Visit LocalFarm.dev <ArrowUpRightIcon className="size-5 ms-2" />
//         </button>
//       </NavLink>
//     </div>
//     {/* Second Webpage */}
//     <div>
//       <img
//         src={florist}
//         alt="Mockup Image"
//         className="lg:w-full md:w-[90%] w-[80%] mx-auto object-cover"
//       />

//       {/* <h5 className="pt-2 font-bold uppercase text-black dark:text-white">Local Florist</h5>
//       <p className="pb-5">
//         A beautiful florist website showcasing local flowers
//       </p> */}
//       <NavLink
//         to="https://localflorist.dev"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <button
//           alt="visit website"
//           className="mt-5 bg-indigo-300 dark:bg-alt dark:hover:bg-white dark:text-black hover:bg-alt text-white hover:text-black flex flex-row items-center justify-center mx-auto"
//         >
//           Visit localflorist.dev
//           <ArrowUpRightIcon className="size-5 ms-2" />
//         </button>
//       </NavLink>
//     </div>
//     {/* Third Webpage */}
//     <div className="relative group">
//       <img
//         src={photo}
//         alt="Mockup Image"
//         className="lg:w-full md:w-[90%] w-[80%] mx-auto object-cover"
//       />

//       {/* <h5 className="pt-2 font-bold uppercase text-black dark:text-white">Julia Rose Photo</h5>
//       <p className="pb-5">
//         A beautiful photography website of stunning visuals
//       </p> */}
//       <NavLink
//         to="https://juliarosephoto.dev"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <button
//           alt="visit website"
//           className="mt-5 bg-pink-400 dark:bg-alt dark:hover:bg-white dark:text-black hover:bg-alt text-white hover:text-black flex flex-row items-center justify-center mx-auto"
//         >
//           Visit JuliaRosePhoto.dev
//           <ArrowUpRightIcon className="size-5 ms-2" />
//         </button>
//       </NavLink>
//     </div>
//   </div>
// </section>
//   );
// };

export default PortfolioGrid;
