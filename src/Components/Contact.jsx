import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import element from "../assets/element.svg";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact"); // Navigate to the "/contact" route
  };
  return (
    //     <div className="bg-white dark:bg-dark">
    //     <div className="relative bg-alternate h-60 w-80 shadow-lg shadow-white/20 rounded-lg flex flex-col justify-center gap-2 p-10  transform transition-all duration-300 hover:-translate-y-2 hover:translate-x-2">
    //             {/* Animated bubble background */}
    //             <div className="absolute bottom-10 -right-6 w-32 h-32 bg-alternate dark:bg-alternate rounded-full opacity-10 transform translate-x-16 -translate-y-4 group-hover:scale-150 transition-transform duration-300" />
    //             </div>
    // </div>

    <div className="bg-white dark:bg-dark">
      <div className="mx-auto py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="h-[500px] lg:h-fit relative isolate overflow-hidden bg-alternate dark:bg-white px-6 pt-16 rounded-3xl md:pt-24 lg:flex lg:gap-x-10 lg:px-24 lg:pt-0 transform transition-all duration-300 group">
          {/* Animated bubble background */}
          <div className="absolute -bottom-100 -right-0 lg:-bottom-10 lg:-right-100 w-150 h-150 lg:w-350 lg:h-350 bg-white dark:bg-alternate rounded-full opacity-10 transform group-hover:scale-180 transition-transform duration-300" />
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-white lg:text-4xl leading-9">
              Make your business stand out!
            </h2>
            <p className="lg:mt-6 text-gray-300">
              Generate more website traffic and convert viewers to customers!
            </p>
            <div className="mt-10 flex flex-col lg:flex-row gap-y-2 lg:gap-y-0 items-center justify-center gap-x-6 lg:justify-start">
              <a
                className="text-sm flex items-center relative overflow-visible uppercase font-alt font-bold leading-tight 
    shadow-lg px-6 py-2 rounded-3xl cursor-pointer bg-alt text-black 
    tracking-wide transition-all duration-300 ease-in-out 
    translate-y-0 transform hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-0.5"
                onClick={handleClick}
              >
                Schedule Now <ArrowRightIcon className="size-6 ms-4" />
              </a>
              <a
                onClick={handleClick}
                className="text-sm/6 font-semibold text-white hover:text-dark hover:cursor-pointer"
              >
                read our FAQs
              </a>
            </div>
          </div>
          <div className="relative mt-25 lg:mt-0">
            <img
              alt="screenshot"
              src={element}
              className="absolute -top-20 lg:left-0 w-96 lg:w-250 max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <div className="bg-white dark:bg-dark lg:flex-row flex-col py-20">
      <div className="blur-lg">
      <div className="lg:text-start text-center">
        <h2>Book your free consultation call today</h2>
        <p className="my-4 lg:mt-2 lg:my-0">
          Make your business stand out! Generate more website traffic and convert viewers to customers!
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button className="flex items-center" onClick={handleClick}>
          Schedule Now <ArrowRightIcon className="size-6 ms-4" />
        </button>
      </div>
      </div>
    </div> */
}
