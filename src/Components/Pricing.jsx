import { useNavigate } from "react-router-dom";
import { CheckIcon, XCircleIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Whole Package",
    id: "tier-whole",
    href: "#",
    price: "$1,000",
    add: "+$25/month hosting",
    description:
      "The perfect one and done plan for businesses that want a website without the hassle of monthly payments.",
    features: [
      "Custom Design & Development",
      "Standard 5 Page Website",
      "+$100 per Additional Page",
      "Unlimited Edits Add-On $50/mo ",
    ],
    others: ["24/7 Support", "Lifetime Updates"],
    featured: false,
  },
  {
    name: "Membership",
    id: "tier-member",
    href: "#",
    price: "$150",
    add: "/month",
    description:
      "Our most popular plan for businesses that prefer a month to month commitment",
    features: [
      "Custom Design & Development",
      "Standard 5 Page Website",
      "Includes Hosting",
      "Unlimited Edits",
      "24/7 Support",
      "Lifetime Updates",
    ],
    others: [],
    featured: true,
  },
  {
    name: "E-commerce",
    id: "tier-commerce",
    href: "#",
    price: "$1,300",
    add: "base price",
    description:
      "The ideal plan for businesses wanting to sell products or services online",
    features: [
      "Custom Shopify Storefront",
      "Integrated Shipping",
      "Shopify Tutorial Walkthrough",
      "Fully Editable In Shopify CMS",
    ],
    others: ["Unlimited Edits", "24/7 Support", "Lifetime Updates"],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Pricing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <section className="bg-white dark:bg-dark py-5 h-full">
      <div className="bg-alternate shadow-lg shadow-gray-400 dark:shadow-none py-12 lg:pt-24 mx-5 lg:mx-40 lg:px-0 rounded-2xl relative isolate overflow-hidden transform transition-all duration-300 group">
        {/* Animated bubble background */}
        <div className="absolute -top-130 -right-20 lg:-top-350 lg:right-0 w-150 h-150 lg:w-400 lg:h-450 bg-white dark:bg-alt rounded-full opacity-10 transform group-hover:scale-150 transition-transform duration-300" />
        <div className="mx-auto text-center px-5 lg:px-0">
          <div>
            <h4 className="text-alt">our packages</h4>
            <h2 className="text-white">Pricing packages for any business</h2>
          </div>
          <p className="mt-5 lg:mt-2 text-white">
            Choose an affordable plan that’s packed with the best features for
            engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="relative mx-auto max-w-7xl grid grid-cols-1 mt-15 gap-y-9 lg:grid-cols-3 lg:gap-8 lg:pb-24 px-2 xl:px-0">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                "rounded-2xl shadow-lg inset-shadow-sm shadow-black/30 dark:shadow-white/30 p-4 lg:p-8 h-full flex flex-col mx-3 lg:mx-0 hover:scale-105 transition-all duration-300 ease-in",
                tier.featured
                  ? "bg-white border-1 border-gray-50"
                  : "bg-white border-1 border-gray-50",
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-alternate" : "text-red-600",
                  "text-base font-semibold",
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2 ">
                <span className="lg:text-5xl text-4xl font-semibold tracking-tight text-black">
                  {tier.price}
                </span>
                <span className="md:text-base text-sm lg:px-0 px-2 text-black ">
                  {tier.add}
                </span>
              </p>
              <p className="mt-6 text-base font-alt text-black">
                {tier.description}
              </p>

              <ul role="list" className="lg:mt-8 space-y-3 mt-10 flex-grow ">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3 items-center">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-alternate"
                      aria-hidden="true"
                    />
                    <span className="text-black font-light font-alt">
                      {feature}
                    </span>
                  </li>
                ))}
                {tier.others.map((other) => (
                  <li key={other} className="flex gap-x-3 items-center">
                    <XCircleIcon
                      className="h-6 w-5 flex-none text-red-400/80"
                      aria-hidden="true"
                    />
                    <span className="text-black/80 font-light font-alt">
                      {other}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                onClick={handleClick}
                className={classNames(
                  "block rounded-2xl px-3.5 py-2.5 text-center font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 mt-10 uppercase tracking-wider",
                  tier.featured
                    ? "bg-alternate text-white shadow-lg hover:bg-alt hover:text-black"
                    : "text-black bg-gray-100 hover:bg-gray-200",
                )}
              >
                Get a quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
