import React from "react";
import { useState } from "react";

const FAQsStepper = () => {
  const [activeCategory, setActiveCategory] = useState("general");
  const [expandedItems, setExpandedItems] = useState([false, false, false]);

  const toggleExpand = (index) => {
    setExpandedItems((prev) => {
      const newExpandedItems = [...prev];
      newExpandedItems[index] = !newExpandedItems[index];
      return newExpandedItems;
    });
  };

  const faqData = {
    general: [
      [
        "What is your return policy?",
        "Our return policy allows returns within 30 days of purchase for a full refund or exchange. Products must be in their original condition and packaging.",
      ],
      [
        "How do I track my order?",
        "You can track your order by visiting our order tracking page and entering your order number. You will also receive tracking information via email once your order has shipped.",
      ],
      [
        "Can I change my delivery address?",
        "Yes, you can change your delivery address as long as the order has not been shipped. Please contact our customer service team as soon as possible.",
      ],
    ],
    shipping: [
      [
        "Do you ship internationally?",
        "Yes, we ship to most countries around the world. Shipping costs will be calculated at checkout based on your location.",
      ],
      [
        "How long does shipping take?",
        "Shipping typically takes between 5-10 business days, depending on your location. International orders may take longer.",
      ],
      [
        "Do you offer free shipping?",
        "We offer free shipping on orders over $50 within the United States. For international orders, shipping fees will apply.",
      ],
    ],
    account: [
      [
        "How do I reset my password?",
        'To reset your password, click on the "Forgot Password" link on the login page. We will send you a link to reset your password via email.',
      ],
      [
        "How can I delete my account?",
        "If you would like to delete your account, please contact our customer support team. We will guide you through the process.",
      ],
      [
        "How do I update my account information?",
        "You can update your account information by logging in and going to your profile settings. There, you can update your email, address, and other personal information.",
      ],
    ],
  };

  return (
    <div className="flex flex-col items-center py-10">
      {/* Category buttons */}
      <div className="flex gap-4 mb-8">
        {['general', 'shipping', 'account'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 border rounded ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* FAQ list */}
      <div className="w-full max-w-2xl">
        {faqData[activeCategory].map((item, index) => (
          <div key={index} className="mb-4 border rounded">
            <div
              onClick={() => toggleExpand(index)}
              className="px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
            >
              <span className="font-semibold">{item[0]}</span> {/* Question */}
              <span className="text-xl">{expandedItems[index] ? '-' : '+'}</span> {/* Plus/Minus Symbol */}
            </div>
            {expandedItems[index] && (
              <div className="px-4 py-2 bg-gray-50">
                <p>{item[1]}</p> {/* Answer */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsStepper;
