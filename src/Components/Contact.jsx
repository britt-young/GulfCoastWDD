import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import element from "../assets/element.svg";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact"); // Navigate to the "/contact" route
  };
  return (
    <div className="bg-white dark:bg-dark">
      <div className="flex justify-center py-16 px-5 lg:px-0">
        <div className="lg:w-[100rem] h-fit relative isolate overflow-hidden bg-alternate dark:bg-white p-5  rounded-3xl transform transition-all duration-300 group">
          {/* Animated bubble background */}
          <div className="absolute -bottom-100 -right-0 lg:-bottom-10 lg:-right-100 w-150 h-150 lg:w-300 lg:h-300 bg-white dark:bg-alternate rounded-full opacity-10 transform group-hover:scale-125 transition-transform duration-300" />

          {/* TEXT + IMAGE FLEX WRAPPER */}
          <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:gap-32">
            {/* TEXT BLOCK */}
            <div className="m-5 lg:m-0 text-center lg:text-left">
              <h2 className="text-white dark:text-black">
                Make your business stand out!
              </h2>
              <p className="mt-2 text-white dark:text-black">
                Generate more website traffic and convert viewers to customers!
              </p>

              <div className="mt-10 flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 items-center justify-center gap-x-6 lg:justify-start">
                <a
                  className="text-sm flex items-center relative overflow-visible uppercase font-alt font-bold leading-tight shadow-lg px-6 py-2 rounded-3xl cursor-pointer bg-alt text-black tracking-wide transition-all duration-300 ease-in-out translate-y-0 transform hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-0.5"
                  onClick={handleClick}
                >
                  Schedule Now <ArrowRightIcon className="size-6 ms-4" />
                </a>
                <a
                  href="/FAQs"
                  className="text-sm/6 font-semibold text-white dark:text-alternate hover:text-dark hover:cursor-pointer z-10"
                >
                  read our FAQs
                </a>
              </div>
            </div>

            {/* IMAGE BLOCK */}
            <div className="relative mt-25 lg:mt-0 flex justify-center lg:justify-end w-full lg:w-auto">
              <img
                alt="screenshot"
                src={element}
                className="w-[400px] lg:max-w-none h-auto object-contain p-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
