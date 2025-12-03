import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import element from "../assets/element.svg";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact");
  };

  return (
    <div className="bg-white dark:bg-dark">
      <div className="flex justify-center py-16 px-5 lg:px-0">
        <div className="lg:w-[100rem] h-fit relative isolate overflow-hidden bg-alternate p-5 rounded-3xl transform transition-all duration-300 group  shadow-lg shadow-gray-500">
          {/* Animated bubble background */}
          <div className="absolute -bottom-100 -right-0 lg:-bottom-10 lg:-right-100 w-150 h-150 lg:w-300 lg:h-300 bg-white dark:bg-white rounded-full opacity-10 transform group-hover:scale-150 transition-transform duration-300" />

          {/* TEXT + IMAGE FLEX WRAPPER */}
          <div className="flex flex-col lg:flex-row items-center justify-around w-full gap-10 lg:gap-0 p-5">
            
            {/* TEXT BLOCK */}
            <div className="flex flex-col items-center lg:items-start text-left max-w-2xl">
              <h2 className="text-white ">
                Make your business stand out!
              </h2>
              <p className="lg:mt-2 mt-5 text-white ">
                Generate more website traffic and convert viewers to customers!
              </p>

              <div className="lg:mt-5 mt-10 flex flex-row gap-y-2 lg:gap-y-0 gap-x-6 items-center">
                <a
                  className="text-sm flex items-center relative overflow-visible uppercase font-alt font-bold leading-tight shadow-lg px-6 py-2 rounded-3xl cursor-pointer bg-alt text-black tracking-wide transition-all duration-300 ease-in-out translate-y-0 transform hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-0.5"
                  onClick={handleClick}
                >
                  Schedule Now <ArrowRightIcon className="size-6 ms-4" />
                </a>
                <a
                  href="/FAQs"
                  className="text-sm/6 font-semibold text-white hover:text-dark hover:cursor-pointer z-10"
                >
                  read our FAQs
                </a>
              </div>
            </div>

            {/* IMAGE BLOCK */}
            <div className="relative w-full lg:w-auto flex justify-center">
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
