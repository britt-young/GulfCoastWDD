
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
    others: [
      "24/7 Support",
      "Lifetime Updates",
    ],
    featured: false,
  },
  {
    name: "Monthly",
    id: "tier-month",
    href: "#",
    price: "$145",
    add: "/month",
    description: "Our most popular plan for businesses that prefer a month to month commitment",
    features: [
      "Design And Development",
      "Includes Hosting",
      "5 Page Website + Privacy/Terms Pages",
      "Unlimited Edits",
      "24/7 Support",
      "Lifetime Updates",
    ],
    others: [
    ],
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
    others: [
      "Unlimited Edits",
      "24/7 Support",
      "Lifetime Updates",
    ],
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
  }

  return (
    <div className="relative isolate px-6 py-20 lg:px-8 border-8 border-double border-white shadow-lg">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/678 w-full"
        />
      </div>
      <div className="mx-auto text-center">
        <div>
          <h4>our packages</h4>
          <h2 className="">
            Pricing packages for any business
          </h2>
        </div>
        <p className="mt-5">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>

  
      {/* Pricing Cards */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 mt-15 gap-y-9 lg:grid-cols-3 lg:gap-8 ">
        {tiers.map((tier, tierIdx) => (
          <div
          key={tier.id}
          className={classNames(
            tier.featured
              ? "relative bg-white/90 shadow-xl"
              : "bg-white/30 shadow-xl",
            "rounded-3xl lg:p-8 shadow-white/30 p-10 h-full flex flex-col mx-8 lg:mx-0 hover:scale-105 transition-all duration-300 ease-in"
          )}
        >
          <h3
            id={tier.id}
            className={classNames(
              tier.featured ? "text-blue-10" : "text-white",
              "text-base/7 font-semibold"
            )}
          >
            {tier.name}
          </h3>
          <p className="mt-4 flex items-baseline gap-x-2">
            <span
              className={classNames(
                tier.featured ? "text-black" : "text-black",
                "text-5xl font-semibold tracking-tight"
              )}
            >
              {tier.price}
            </span>
            <span
              className={classNames(
                tier.featured ? "text-black" : "text-black",
                "text-base"
              )}
            >
              {tier.add}
            </span>
          </p>
          <p
            className={classNames(
              tier.featured ? "text-black" : "text-black",
              "mt-6 text-base/7"
            )}
          >
            {tier.description}
          </p>
          <ul
            role="list"
            className={classNames(
              tier.featured ? "text-black" : "text-black",
              "mt-8 space-y-3 text-sm/6 sm:mt-10 flex-grow"
            )}
          >
            {tier.features.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  aria-hidden="true"
                  className={classNames(
                    tier.featured ? "text-blue-10" : "text-blue-10",
                    "h-6 w-5 flex-none"
                  )}
                />
                {feature}
              </li>
            ))}
            {tier.others.map((other) => (
              <li key={other} className="flex gap-x-3">
                <XCircleIcon
                  aria-hidden="true"
                  className={classNames(
                    tier.featured ? "text-black" : "text-black",
                    "h-6 w-5 flex-none"
                  )}
                />
                {other}
              </li>
            ))}
          </ul>
          <a
            href={tier.href}
            aria-describedby={tier.id}
            onClick={handleClick}
            className={classNames(
              tier.featured
                ? "bg-blue-10/60 text-white shadow-lg hover:bg-blue-10 "
                : "text-black bg-white/60 hover:bg-white ",
              "block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 mt-10 uppercase hover:animate-bounce"
            )}
          >
            Get a quote
          </a>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Pricing;
