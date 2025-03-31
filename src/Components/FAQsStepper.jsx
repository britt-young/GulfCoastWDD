import React from "react";
import { useState } from "react";

const FAQsStepper = () => {
  const [activeCategory, setActiveCategory] = useState("General");
  const [expandedItems, setExpandedItems] = useState([false, false, false]);

  const toggleExpand = (index) => {
    setExpandedItems((prev) => {
      const newExpandedItems = [...prev];
      newExpandedItems[index] = !newExpandedItems[index];
      return newExpandedItems;
    });
  };

  const faqData = {
    General: [
      [
        "How long does the entire design and development process take?",
        "We typically take between 4 weeks to complete a website, dependent on how quickly clients respond to content requests and proposal feedback.",
      ],
      [
        "What is the difference between the Lump Sum and Monthly packages?",
        "The Lump Sum package is a one-time payment for a set number of pages, while the Monthly package is a subscription service that includes ongoing support and updates.",
      ],
      [
        "Can I upgrade from the Lump Sum to the Monthly package?",
        "Yes, you can upgrade at any time. Please contact our customer support team for assistance.",
      ],
      [
        "What if I need more than 5 pages in the Lump Sum package?",
        "If you need more than 5 pages, there is an additional charge of $100 per page.",
      ],
      [
        "How do you handle late payments?",
        "Every invoice sent comes with a 7 day grace period. If the invoice is not paid within those 7 days, there will be a $25 late fee applied. If you're on a subscription, and there are multiple monthly invoices that are overdue for months and late for months, we can cancel the contract and the client will be responsible for paying the full price of the site.We are generally very flexible and understanding of certain situations and often times offer assistance and help. We recommend setting up automatic payments to avoid this issue.",
    ],
  ],
    "Lump Sum": [
      [
        "How many pages are included in the Lump Sum package?",
        "The Lump Sum package includes 5 pages of your choice. You can select any combination of pages that suit your needs. If you need more than 5 pages, there is a $100 charge per additional page.",
      ],
      [
        "What payment methods do you accept?",
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.",
      ],
      [
        "How do I contact customer support?",
        "You can contact our customer support team via email, phone, or live chat on our website. We are available 24/7 to assist you.",
      ],
    ],
    Monthly: [
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
      [
        "Can I change my shipping address after placing an order?",
        "If your order has not been shipped yet, we can modify your shipping address. Please contact us as soon as possible.",
      ],
      [
        "Do you offer expedited shipping?",
        "Yes, we offer expedited shipping options for faster delivery. You can choose the shipping method during checkout.",
      ],
    ],
    "E-Commerce": [
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
      [
        "How do I change my email address?",
        "You can change your email address by logging into your account and visiting your profile settings.",
      ],
      [
        "Can I have multiple accounts?",
        "We recommend having only one account per person to ensure all your orders and information are consolidated in one place.",
      ],
    ],
  };

  return (
    <div className="flex flex-col items-center py-24 bg-gray-300 dark:bg-black">
      {/* Title/Subtitle */}
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-center py-5">
        <h4 className="">how can we help</h4>
        <h2 className="text-center">Frequently Asked Questions</h2>
        <p className="mt-5 lg:w-200 mx-5 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor.
        </p>
      </div>

      {/* Category buttons */}
      <div className="flex gap-4 mb-8 mt-10">
        {["General", "Lump Sum", "Monthly", "E-Commerce"].map((category) => (
          <a
            key={category}
            className={`px-4 py-2 border rounded cursor-pointer hover:bg-alt ${
              activeCategory === category
                ? "bg-main text-black"
                : "bg-white text-black"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </a>
        ))}
      </div>

      {/* FAQ list */}
      <div className="w-full max-w-2xl">
        {faqData[activeCategory].map((item, index) => (
          <div key={index} className="my-4 border rounded">
            <div
              onClick={() => toggleExpand(index)}
              className="px-4 py-1 cursor-pointer bg-main hover:bg-alt flex justify-between items-center"
            >
              <span className="font-semibold">{item[0]}</span> {/* Question */}
              <span className="text-xl">
                {expandedItems[index] ? "-" : "+"}
              </span>{" "}
              {/* Plus/Minus Symbol */}
            </div>
            {expandedItems[index] && (
              <div className="px-4 py-2 bg-gray-50">
                <p className="dark:text-black">{item[1]}</p> {/* Answer */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsStepper;
