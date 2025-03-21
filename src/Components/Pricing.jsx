import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Lump-sum",
    id: "tier-sum",
    href: "#",
    price: "$900",
    add: "+$25/month Hosting",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
    ],
    featured: false,
  },
  {
    name: "Monthly",
    id: "tier-month",
    href: "#",
    price: "$145",
    add: "/month",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    featured: true,
  },
  {
    name: "E-commerce",
    id: "tier-commerce",
    href: "#",
    price: "$59",
    add: "Starting",
    description:
      "The ideal plan for businesses looking for additional features.",
    features: [
      "50 products",
      "Up to 50,000 subscribers",
      "Advanced analytics",
      "Priority support response time",
      "Custom reporting",
      "Email marketing",
    ],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Pricing = () => {
  return (
    <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/678 w-full bg-linear-to-tr from-[#79ABAC] to-[#AEDBDE] opacity-90"
        />
      </div>
      <div className="mx-auto text-center">
        <div className="">
          <h4>our packages</h4>
          <h2 className="">
            Pricing packages for any business
          </h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-gray-600 sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>
      {/* Pricing Cards */}
      <div className="mx-auto max-w-7xl mt-16 grid grid-cols-1 gap-y-6 sm:mt-20 lg:grid-cols-3 lg:gap-8">
        {tiers.map((tier, tierIdx) => (
          <div
          key={tier.id}
          className={classNames(
            tier.featured
              ? "relative bg-white shadow-2xl "
              : "bg-white/60 sm:mx-8 lg:mx-0",
            "rounded-3xl lg:p-8 shadow-sm shadow-white/50 p-10 h-full flex flex-col"
          )}
        >
          <h3
            id={tier.id}
            className={classNames(
              tier.featured ? "text-indigo-400" : "text-indigo-600",
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
                    tier.featured ? "text-main" : "text-black",
                    "h-6 w-5 flex-none"
                  )}
                />
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={tier.href}
            aria-describedby={tier.id}
            className={classNames(
              tier.featured
                ? "bg-main text-black shadow-xs hover:bg-alt"
                : "text-black ring-1 ring-black ring-inset hover:ring-white hover:bg-alt",
              "block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 mt-10"
            )}
          >
            Get started today
          </a>
        </div>
        
        ))}
      </div>
    </div>
  );
};

export default Pricing;
