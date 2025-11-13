import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact"); // Navigate to the "/contact" route
  };
  return (
    <div className="bg-white dark:bg-dark lg:flex-row flex-col">
      <div className="lg:text-start text-center">
        <h2>Book your free consultation call today</h2>
        <p className="my-4 lg:mt-2 lg:my-0">
          Make your business stand out, generate more website views and turn
          them into customers!
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button className="flex items-center" onClick={handleClick}>
          Schedule Now <ArrowRightIcon className="size-6 ms-4" />
        </button>
      </div>
    </div>
  );
};

export default Contact;
