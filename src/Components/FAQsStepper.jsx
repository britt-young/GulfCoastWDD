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
        "Our websites typically take between 4-8 weeks to complete. Development timelines can vary depending on the package selected and how quickly clients respond to content requests and proposal feedback.",
      ],
      [
        "What is the difference between the Lump Sum and Monthly packages?",
        "The main difference is long term versus short term costs. Our subscription package will cost more over time, but you'll pay small manageable and affordable monthly payments. The Lump-Sum package is a one-time payment that covers the entire project. When deciding which package is best for you, it all depends on your budget and services included in each package.",
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
        "Purchasing the domain is included in all of our packages but the CLIENT will always own the domain name. The website is owned by the GCWDD unless the client chooses the lump-sum or e-commerce package. If the client is on a subscription plan and cancels, the website will be taken down and the client will no longer have access to it.",
      ],
      [
        "How do we request edits?",
        "All edit requests must be submitted via email to <a href='mailto:GulfCoastWDD@protonmail.com' class='email-link'>GulfCoastWDD@protonmail.com</a> and will be fulfilled in the order they're received. As edits are received and completed, we will send you an email notification.",
      ],
      [
        "Do you offer brand design services as well?",
        "No. Before signing your contract we will confirm that you have the minimum brand design elements needed for your website development. (i.e., brand colors, logo, icons, stock photos, etc.)",
      ],
      [
        "How do I contact customer support?",
        "You can contact our customer support team via email or phone. We are available 24/7 to assist you.",
      ],
    ],
    "Lump Sum": [
      [
        "How many pages are included in the Lump Sum package?",
        "The Lump Sum package includes 5 pages of your choice. You can select any combination of pages that suit your needs. If you need more than 5 pages, there is a one time charge of $100 per additional page.",
      ],
      [
        "Can I add unlimited edits and support to the Lump Sum package?",
        "Yes! We offer $50/mo. support packages within a minimum of 12 months commitment."
      ],
      [
        "How do I contact customer support?",
        "You can contact our customer support team via email or phone. We are available 24/7 to assist you.",
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
        "Every invoice sent comes with a 7 day grace period. If the invoice is not paid within those 7 days, there will be a $25 late fee applied. If you're on a subscription, and there are multiple monthly invoices that are overdue, we can cancel the contract and the client will be responsible for paying the full price of the site. We are generally very flexible and understanding of certain situations and often times offer assistance and help. We recommend setting up automatic payments to avoid this issue.",
      ],
    ],
    "E-Commerce": [
      [
        "Do I need to have an online store before signing a contract?",
        'No. When you choose our e-Commerce package we take care of everything. If you already have a Shopify storefront, we can easily transfer products to your new site!',
      ],
      [
        "What brand assets do you need from me to build my Shopify backend?",
        "In addition to your brand's visual identity assets, you will need to provide product, legal, and operational assets as well.",
      ],
      [
        "How do I manage my Shopify store after launch?",
        "Once we've finished development, we transfer store ownership to you and do a quick walk-through of your store backend.  You'll have access to the Shopify Admin Dashboard where you can make all necessary updates/edits. ",
      ],
      [
        "Are there additional costs for store management?",
        "Yes. Shopify requires a subscription for store owners. Depending on your business needs, subscriptions can cost anywhere between $29 for solo entrepreneurs to $399 for larger businesses",
      ],
      
    ],
  };

  return (
    <div className="bg-white dark:bg-dark flex flex-col items-center py-20">
      {/* Title/Subtitle */}
      <div className="relative flex flex-col items-center justify-center pt-0">
        <h4 className="text-alternate dark:text-alt">how can we help</h4>
        <h2 className="text-center dark:text-white">Frequently Asked Questions</h2>
        <p className="mt-5 lg:w-200 mx-5 text-center dark:text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolor.
        </p>
      </div>

      {/* Category buttons */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 mt-10 text-center">
        {["General", "Lump Sum", "Monthly", "E-Commerce"].map((category) => (
          <a
            key={category}
            className={`px-4 py-2 border rounded cursor-pointer  font-normal ${
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
          <div key={index} className="my-4 border rounded">
            <div
              onClick={() => toggleExpand(index)}
              className=" text-black px-4 py-1 cursor-pointer bg-gray-200 hover:bg-alternate hover:dark:bg-alt hover:dark:text-black hover:text-white flex justify-between items-center"
            >
              <span className="font-semibold tracking-wider">{item[0]}</span> {/* Question */}
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
