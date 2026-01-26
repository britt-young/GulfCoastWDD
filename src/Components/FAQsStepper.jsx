import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { faqData } from "../data/faqData"

const FAQsStepper = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };

  const [activeCategory, setActiveCategory] = useState("General");
  const [expandedItems, setExpandedItems] = useState([false, false, false]);

  const toggleExpand = (index) => {
    setExpandedItems((prev) => {
      const newExpandedItems = [...prev];
      newExpandedItems[index] = !newExpandedItems[index];
      return newExpandedItems;
    });
  };

  return (
    <div className="bg-white dark:bg-dark flex flex-col items-center py-10">
      {/* Title/Subtitle */}
      <div className="relative flex flex-col items-center justify-center pt-0">
        <h4 className="text-alternate dark:text-alt">how can we help</h4>
        <h2 className="text-center dark:text-white">Frequently Asked Questions</h2>
        <p className="mt-2 lg:w-200 mx-5 text-center dark:text-white">
          If you can't find the answer to your question please feel free to contact us<span className="text-alternate dark:text-alt ms-1 hover:underline hover:cursor-pointer" onClick={handleClick}>here</span>.
        </p>
      </div>

      {/* Category buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 mt-10 text-center">
        {["General", "Whole", "Membership", "E-Commerce"].map((category) => (
          <a
            key={category}
            className={`px-4 py-2 border-1 rounded-2xl cursor-pointer shadow-lg font-normal ${
              activeCategory === category
                ? "bg-alternate dark:bg-alt dark:text-black text-white border-black"
                : "bg-white text-black hover:bg-gray-100"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </a>
        ))}
      </div>

      {/* FAQ list */}
      <div className="w-full max-w-2xl px-5 lg:px-0">
        {faqData[activeCategory].map((item, index) => (
          <div key={index} className="my-4">
            <div
              onClick={() => toggleExpand(index)}
              className=" text-black px-4 py-1 cursor-pointer bg-gray-200 hover:bg-alternate hover:dark:bg-alt hover:dark:text-black hover:text-white flex justify-between items-center"
            >
              <span className="font-semibold tracking-wider">{item[0]}</span>
              <span className="text-xl">
                {expandedItems[index] ? "-" : "+"}
              </span>{" "}
              {/* Plus/Minus Symbol */}
            </div>
            {expandedItems[index] && (
              <div className="px-4 py-2 bg-gray-50">
                <p dangerouslySetInnerHTML={{ __html: item[1] }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsStepper;
