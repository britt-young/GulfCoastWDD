import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FlowStepper = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      id: 1,
      title: "Initial Consultation",
      description:
        "During our 30-minute introduction call, we'll discuss which package is best suited for your business and gather necessary information.",
    },
    {
      id: 2,
      title: "Design Approval",
      description:
        "After a contract is signed, we will design a draft of your website. We will screen share with you and make any necessary revisions.",
    },
    {
      id: 3,
      title: "Development",
      description:
        "Once approved by you, we will begin development of your website and will send you a live demo link for you to review once more before launch.",
    },
    {
      id: 4,
      title: "Website Launch",
      description:
        "If you're 100% satisfied with the live demo, we'll continue with your website launch. Depending on your package choice, free future edits are available!",
    },
  ];

  return (
    <div
      data-aos="zoom-in"
      className="flex-col flex lg:flex-row mx-auto lg:gap-10 gap-0 lg:px-10 px-5 py-5"
    >
      {steps.map((step) => (
        <div
          key={step.id}
          className="flex flex-col items-center gap-2 py-10 lg:px-0 px-5 group"
        >
          <div className="relative bg-white h-60 w-80 shadow-lg shadow-white/20 rounded-lg flex flex-col justify-center gap-2 p-10  transform transition-all duration-300 hover:-translate-y-2 hover:translate-x-2">
            {/* Animated bubble background */}
            <div className="absolute -bottom-15 right-5 w-32 h-32 bg-alternate dark:bg-alt rounded-full opacity-10 transform translate-x-16 -translate-y-4 group-hover:scale-150 transition-transform duration-300" />

             {/* Step number bubble */}
            <span className="absolute h-12 w-12 -top-3 -left-3 border-4 border-white bg-alt rounded-full flex items-center justify-center shadow-md">
              <h6 className="text-gray-800 text-2xl font-semibold">{step.id}</h6>
            </span>

            {/* Card Content */}
            <h4 className="text-dark">{step.title}</h4>
            <p className="text-black">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlowStepper;
