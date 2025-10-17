import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Contact = () => {
const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contact"); // Navigate to the "/contact" route
  };
  return (
    <div className="bg-white w-full h-fit">
      <div className="lg:my-10 my-5 py-20 px-5 flex flex-col lg:flex-row mx-20 justify-around border-1 rounded-3xl border-alt bg-alt/20">
        <div className="lg:text-start text-center">
          <h2>Book your free consultation call today</h2>
          <p className="mt-2">
            Make your business stand out, generate more website views and turn
            them into customers!
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button className="flex items-center" onClick={handleClick}>Schedule Now <ArrowRightIcon className="size-6 ms-4" /></button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
