import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact"); // Navigate to the "/contact" route
  };
  return (
    <div className="bg-white dark:bg-dark">
      <div className="mx-auto py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-alternate dark:bg-white px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#002775" />
                <stop offset={1} stopColor="#ddff00" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-white lg:text-4xl leading-9">
              Make your business stand out!
            </h2>
            <p className="lg:mt-6 text-gray-300">
              Generate more website traffic and convert viewers to customers!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="text-sm flex items-center relative overflow-visible uppercase font-alt font-bold leading-tight 
    shadow-lg px-6 py-2 rounded-3xl cursor-pointer bg-alt text-black 
    tracking-wide transition-all duration-300 ease-in-out 
    translate-y-0 transform hover:bg-white hover:text-black hover:shadow-xl hover:-translate-y-0.5"
                onClick={handleClick}
              >
                Schedule Now <ArrowRightIcon className="size-6 ms-4" />
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold text-white hover:text-gray-100"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              alt="screenshot"
              src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
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
