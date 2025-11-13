import FlowStepper from "./FlowStepper";
import { useNavigate } from "react-router-dom";


const Workflow = () => {
  const navigate = useNavigate();
    const handleClick = () => {
      navigate("/About"); // Navigate to the "/contact" route
    };


  return (
    <div className="flex flex-col py-20 relative isolate text-white bg-alternate overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-4 py-10 lg:px-0 px-5">
        <div className="h-full">
          <h4 className="">Our Workflow</h4>
          <h2 className="font-bold ">How we build the perfect website, everytime!</h2>
        </div>
        <div className="flex items-center justify-start">
          <p className="border-t-1 lg:border-t-0 lg:border-l-1 border-l-0 border-alt lg:pl-5 lg:pt-0 pt-5">
            After deciding if our services are right for your business, we'll send over a contract followed by a short questionnaire. During the design process, we'll use the information from your questionnaire to create your site's content for you! Once approved, we build and deliver your website within 4-8 weeks.
          </p>
        </div>
      </div>
      <FlowStepper />
      <div className="flex items-center justify-center">
        <button onClick={handleClick} >Schedule a Call</button>
      </div>
    </div>
     
  );
};

export default Workflow;

// bg-linear-to-tr from-[#79ABAC] to-[#AEDBDE] opacity-100