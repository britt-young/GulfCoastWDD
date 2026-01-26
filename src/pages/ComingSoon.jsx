import WaveAnimation from "../Components/WaveAnimation3";
import { Undo2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[100px] ">
        <WaveAnimation />
      </div>
      <div className="lg:px-0 relative h-100 dark:bg-dark bg-white flex flex-col items-center justify-center">
        <div className="w-fit lg:text-start text-center">
          <h4 className="text-alternate dark:text-alt">come back later!</h4>
          <h3 className="dark:text-white">new blog articles coming soon</h3>
          <button onClick={handleClick} className="mt-5 hover:bg-alternate hover:text-white dark:hover:bg-white hover:dark:text-black gap-2 flex flex-row items-center justify-center w-full">
            back to homepage <Undo2 />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
