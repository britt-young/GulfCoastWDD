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
        "Our websites typically take 4 weeks to complete. Development timelines can vary depending on how quickly clients respond to content requests and proposal feedback.",
      ],
      [
        "What is the difference between the Lump Sum and Monthly packages?",
        "The main difference is long term versus short term costs. Our subscription package will cost more over time, but you'll pay small manageable and affordable monthly payments. The Lump-Sum package is a one-time payment that covers the entire project. When deciding which package is best for you, it all depends on your budget and services included in each package.",
      ],
      [
        "What if I need more than 5 pages in the Lump Sum package?",
        "If you need more than 5 pages, there is an additional charge of $100 per page.",
      ],
      [
        "How do I make a payment and what payment methods do you accept?",
        "We will send you and invoice via Square that provides you a link to the secure payment page. Subscriptions can be paid with a credit card or debit card. Lump sum projects are paid with an ACH bank transfer. We DO NOT ACCEPT CHECKS.",
      ],
      [
        "Do you offer refunds?",
        "When you sign a contract (lump sum or subscription) a deposit is required before designing begins. If you are not satisfied with our design proposals and no longer wish to continue with us, then we will refund you your deposit.",
      ],
      [
        "Who owns the domain name and website after the project is completed?",
        "Purchasing the domain is included in all of our packages but the CLIENT will always own the domain name. The website is owned by the GCWDD unless the client chooses the lump-sum package. If the client is on a subscription plan and cancels, the website will be taken down and the client will no longer have access to it.",
      ],
      [
        "How do we request edits?",
        "All edit requests must be submitted via email to <a href='mailto:GulfCoastWDD@protonmail.com' class='email-link'>GulfCoastWDD@protonmail.com</a> and will be fulfilled in the order they're received. As edits are received and completed, we will send you an email notification.",
      ]
    ],
    "Lump Sum": [
      [
        "How many pages are included in the Lump Sum package?",
        "The Lump Sum package includes 5 pages of your choice. You can select any combination of pages that suit your needs. If you need more than 5 pages, there is a one time charge of $100 charge per additional page.",
      ],
      [
        "Can I add unlimited edits and support to the Lump Sum package?",
        "Yes! We offer $50/mo. support packages within a minimum of 12 months commitment."
      ],
      [
        "How do I contact customer support?",
        "You can contact our customer support team via email, phone, or live chat on our website. We are available 24/7 to assist you.",
      ],
    ],
    Monthly: [
      [
        "How long do the subscription last?",
        "Monthly subscriptions plans last a minimum of 12 months. After the 12 months, it is on a month-to-month basis and you can cancel at any time. If you cancel, you do not keep the site.",
      ],
      [
        "If I previously cancelled, can I re-subscribe?",
        "Yes! You just have to sign a new 12 month contract.",
      ],
      [
        "What happens if I need to cancel before the 12 months are up?",
        "If you cancel before your 12 month contract is up, you will owe the full cost of a lump sum website ($900) minus the amount you've already paid.",
      ],
      [
        "How do you handle late payments?",
        "Every invoice sent comes with a 7 day grace period. If the invoice is not paid within those 7 days, there will be a $25 late fee applied. If you're on a subscription, and there are multiple monthly invoices that are overdue for months and late for months, we can cancel the contract and the client will be responsible for paying the full price of the site.We are generally very flexible and understanding of certain situations and often times offer assistance and help. We recommend setting up automatic payments to avoid this issue.",
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
                <p dangerouslySetInnerHTML={{ __html: item[1] }} /> {/* Answer */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsStepper;
