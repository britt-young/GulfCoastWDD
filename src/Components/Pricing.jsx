import { useNavigate } from "react-router-dom";
import { CheckIcon, XCircleIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Lump-sum",
    id: "tier-sum",
    href: "#",
    price: "$900",
    add: "+$25/month hosting fee",
    description:
      "The perfect one and done plan for businesses that want a website without the hassle of monthly payments",
    features: [
      "Design And Development",
      "$25 Hosting Fee",
      "5 Page Website + Privacy/Terms Pages",
      "+$50/mo Unlimited Edits",
    ],
    others: ["24/7 Support", "Lifetime Updates"],
    featured: false,
  },
  {
    name: "Monthly",
    id: "tier-month",
    href: "#",
    price: "$145",
    add: "/month",
    description:
      "Our most popular plan for businesses that prefer a month to month commitment",
    features: [
      "Design And Development",
      "Includes Hosting",
      "5 Page Website + Privacy/Terms Pages",
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
    price: "$1300",
    add: "base price",
    description:
      "The ideal plan for businesses wanting to sell products or services online",
    features: [
      "Custom Shopify Store",
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
    navigate("/Contact");
  };

  return (
    <section className="bg-white dark:bg-dark">
      <div className="mx-auto pt-40 text-center">
        <div>
          <h4 className="text-alternate dark:text-alt">our packages</h4>
          <h2 className="dark:text-white">Pricing packages for any business</h2>
        </div>
        <p className="mt-5 dark:text-white">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 mt-15 gap-y-9 lg:grid-cols-3 lg:gap-8 pb-40">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              "rounded-3xl shadow-lg inset-shadow-sm shadow-black/30 dark:shadow-white/30 p-10 lg:p-8 h-full flex flex-col mx-8 lg:mx-0 hover:scale-105 transition-all duration-300 ease-in",
              tier.featured ? "bg-white border-1 border-gray-50" : "bg-white border-1 border-gray-50"
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-alternate" : "text-red-600",
                "text-base font-semibold"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2 ">
              <span className="text-5xl font-semibold tracking-tight text-black">
                {tier.price}
              </span>
              <span className="text-base lg:px-0 px-2 text-black">{tier.add}</span>
            </p>
            <p className="mt-6 text-base font-alt text-black">{tier.description}</p>

            <ul role="list" className="lg:mt-8 space-y-3 mt-10 flex-grow ">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3 items-center">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-alternate"
                    aria-hidden="true"
                  />
                  <span className="text-black ">{feature}</span>
                </li>
              ))}
              {tier.others.map((other) => (
                <li key={other} className="flex gap-x-3 items-center">
                  
                  <XCircleIcon
                    className="h-6 w-5 flex-none text-red-400"
                    aria-hidden="true"
                  />
                  <span className="text-black font-normal">{other}</span>
                </li>
              ))}
            </ul>

            <a
              href={tier.href}
              onClick={handleClick}
              className={classNames(
                "block rounded-md px-3.5 py-2.5 text-center font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 mt-10 uppercase tracking-wider",
                tier.featured
                  ? "bg-alternate text-white shadow-lg hover:bg-alt hover:text-black"
                  : "text-black bg-gray-100 hover:bg-gray-200"
              )}
            >
              Get a quote
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
