import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Tractor, Flower2, Aperture } from "lucide-react";

const features = [
  {
    name: "Local Farm",
    description:
      "A template website for local farmers and seasonal grocerers. A community-driven agricultural resource connecting local farmers and families. Our mission is to promote sustainable agriculture, provide a fun outdoor experience, and share local food with everyone.",
    icon: Tractor,
    image: "./imgs/farm.webp",
    buttonText: "visit local farm",
    url: "https://www.localfarm.dev",
  },
  {
    name: "Local Florist",
    description:
      "A template website for florists wanting to sell online. Local Florist is committed to beautiful arrangements, fair pricing, and exceptional service.",
    icon: Flower2,
    image: "./imgs/florist.png",
    buttonText: "visit local florist",
    url: "https://www.localflorist.dev",
  },
  {
    name: "Julia Rose Photography",
    description:
      "A template website for a freelance photographer. Specializing in senior portraits and elopements.",
    icon: Aperture,
    image: "./imgs/photo.png",
    buttonText: "visit julia rose photo",
    url: "https://www.juliarosephoto.dev",
  },
];

const PortfolioDisplay = () => {
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <div className="overflow-hidden bg-white dark:bg-dark py-20 lg:pl-52 px-5 lg:px-0">
      <div className="flex lg:flex-row flex-col gap-x-6 gap-y-16 sm:gap-y-20 lg:mx-0 ">
        {/* Left section: Text + Features */}
        <div className="lg:pt-4 lg:w-2/5">
          <h4 className="text-alternate dark:text-alt">Portfolio</h4>
          <h2 className="dark:text-white">
            Recently launched websites 
          </h2>
          <p className="mt-5 lg:mt-2 text-black dark:text-white">
            At Gulf Coast Web Design & Development, we specialize in small
            business web design and development for clients all along the
            northern coast of the Gulf. No matter your business, we can build a
            website that is beautiful, tailored to your industry, boosts
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
                <dd className="font-normal font-alt leading-5">{feature.description}</dd>
              </div>
            ))}

            {/* Dynamic Button */}
            {activeFeature?.url && (
              <a
                href={activeFeature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-alternate text-white hover:text-black hover:bg-alt dark:bg-alt dark:text-black hover:dark:bg-white mt-5 flex flex-row items-center justify-center mx-auto transition-all duration-300 hover:translate-y-[-2px] px-4 py-2 rounded-2xl font-alt uppercase"
              >
                {activeFeature.buttonText}
                <ArrowUpRightIcon className="size-5 ms-2" />
              </a>
            )}
          </dl>
        </div>

        {/* Right section: Image */}
        <div className="relative flex items-center justify-center lg:w-3/5">
          <img
            key={activeFeature.image}
            alt={activeFeature.name}
            src={activeFeature.image}
            className="lg:rounded-l-2xl shadow-xl shadow-black/30 ring-1 ring-white sm:w-[36rem] lg:w-[1000px] md:-ml-4 lg:-ml-0 transition-all duration-700 ease-in-out opacity-100 animate-fadeIn"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioDisplay;
