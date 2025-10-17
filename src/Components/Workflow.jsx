import FlowStepper from "./FlowStepper";
import { useNavigate } from "react-router-dom";
import WaveAnimation from "./WaveAnimation2";


const Workflow = () => {
  const navigate = useNavigate();
    const handleClick = () => {
      navigate("/About"); // Navigate to the "/contact" route
    };

  return (
    <section className="relative pb-12 bg-white overflow-hidden">
  <WaveAnimation />
    <div className="flex flex-col py-10 pt-10 relative isolate text-white lg:h-[650px]">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 py-10 lg:px-0 px-5">
        <div className="h-full">
          <h4 className="">Our Workflow</h4>
          <h2 className="font-bold">How we build the perfect website</h2>
        </div>
        <div className="flex items-center justify-start">
          <p className="border-t-1 lg:border-t-0 lg:border-l-1 border-l-0 border-alt lg:pl-5 lg:pt-0 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <FlowStepper />
      <div className="flex items-center justify-center">
        <button onClick={handleClick} >Schedule a Call</button>
      </div>
    </div>
     </section>
  );
};

export default Workflow;

// bg-linear-to-tr from-[#79ABAC] to-[#AEDBDE] opacity-100