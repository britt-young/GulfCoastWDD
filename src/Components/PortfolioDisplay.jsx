import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Tractor, Flower2, Aperture } from "lucide-react";

const features = [
  {
    name: "Local Farm",
    description:
      "A website for local farmers and seasonal grocerers. A community-driven agricultural resource connecting local farmers and families. Our mission is to promote sustainable agriculture, provide a fun outdoor experience, and share local food with everyone.",
    icon: Tractor,
    image: "./imgs/farm.png",
    buttonText: "visit local farm",
    url: "https://www.localfarm.dev",
  },
  {
    name: "Local Florist",
    description:
      "A website for florists wanting to sell online. Local Florist is committed to beautiful arrangements, fair pricing, and exceptional service.",
    icon: Flower2,
    image: "./imgs/florist.png",
    buttonText: "visit local florist",
    url: "https://www.localflorist.dev",
  },
  {
    name: "Julia Rose Photography",
    description:
      "A website for a freelance photographer. Specializing in senior portraits and elopements.",
    icon: Aperture,
    image: "./imgs/photo.png",
    buttonText: "visit julia rose photo",
    url: "https://www.juliarosephoto.dev",
  },
];

const PortfolioDisplay = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <div className="overflow-hidden bg-white dark:bg-dark py-20 px-5 lg:pl-40 h-full">
      <div className="flex lg:flex-row flex-col gap-x-10 gap-y-16 sm:gap-y-20 lg:mx-0 ">
        {/* Left section: Text + Features */}
        <div className="lg:w-[40%]">
          <h4 className="text-alternate dark:text-alt">Portfolio</h4>
          <h2 className="dark:text-white">
            Recently launched websites 
          </h2>
          <p className="mt-5 lg:mt-2 text-black dark:text-white">
            At Gulf Coast Web Designs & Development, we specialize in small
            business web design and development for clients all along the
            northern coast of the Gulf. No matter your business, we can build a
            website that is beautiful, tailored to your industry, boosts
            customer trust, and converts website viewers into patrons.
          </p>

          <dl className="mt-5 space-y-8 ps-4 text-base text-black dark:text-white lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <button
                    type="button"
                    onClick={() => setActiveFeature(feature)}
                    className={`w-fit text-left font-semibold transition-all duration-300 capitalize ${
                      activeFeature.name === feature.name
                        ? "text-alternate dark:text-alt bg-transparent shadow-none"
                        : "hover:text-alternate dark:text-white hover:dark:text-alt bg-transparent shadow-none"
                    }`}
                  >
                    <feature.icon
                      aria-hidden="true"
                      className="size-5 items-center absolute bottom-2.5 left-0 "
                    />
                    {feature.name}
                  </button>
                </dt>

                <dd className="font-normal font-alt leading-5">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          {activeFeature?.url && (
            <a
              href={activeFeature.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-alternate text-white hover:text-black hover:bg-alt dark:bg-alt dark:text-black hover:dark:bg-white mt-10 flex flex-row items-center justify-center mx-auto transition-all duration-300 hover:translate-y-[-2px] px-4 py-2 rounded-2xl font-alt uppercase"
            >
              {activeFeature.buttonText}
              <ArrowUpRightIcon className="size-5 ms-2" aria-hidden="true" />
            </a>
          )}
        </div>

        {/* Right section: Image */}
        <div className="relative flex items-center justify-center lg:w-1/2">
          <img
            key={activeFeature.image}
            alt={activeFeature.name}
            src={activeFeature.image}
            className="md:w-[36rem] lg:w-[700px] md:-ml-4 lg:-ml-0 transition-transform duration-800 ease-in-out opacity-100 animate-fadeIn"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDisplay;
