import { useState } from "react";
// import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Checkbox } from "@headlessui/react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="py-20 px-5 lg:px-0">
      <div className="bg-gray-100 rounded-lg shadow-lg py-5 max-w-2xl mx-auto">
        <div className="mx-auto text-center">
          <h2>Custom Website Request</h2>
          <p className="mt-2">
            Send us a message and let us help you convert website visitors to
            clients
          </p>
        </div>
        <form
          name="contact"
          netlify
          action="#"
          method="POST"
          className="lg:mx-auto mx-5 max-w-xl mt-12 font-alt"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold text-gray-900"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="first-name"
                  className="block w-full rounded-md bg-white  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1  outline-gray-300 placeholder:text-gray-400 "
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold  text-gray-900"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="last-name"
                  className="block w-full rounded-md bg-white  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1  outline-gray-300 placeholder:text-gray-400 "
                />
              </div>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold  text-gray-900"
              >
                Company
              </label>
              <div className="mt-1">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="company"
                  className="block w-full rounded-md bg-white  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1  outline-gray-300 placeholder:text-gray-400 "
                />
              </div>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold  text-gray-900"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1  outline-gray-300 placeholder:text-gray-400 "
                />
              </div>
            </div>
            <div className="col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold  text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-1">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block w-full rounded-md bg-white  px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1  outline-gray-300 placeholder:text-gray-400 placeholder:font-normal"
                />
              </div>
            </div>

            {/* Pricing Selection */}
            <label className="block text-sm font-semibold  text-gray-900">
              Select your preferred pricing package:
              <select
                name="selectedPackage"
                defaultValue="default"
                className="bg-white  px-3.5 py-1 text-base font-normal text-gray-400 outline-1  outline-gray-300 "
              >
                <option value="default" disabled>
                  Select a package
                </option>
                <option value="sum">Lump-Sum</option>
                <option value="sub">Monthly Subscription</option>
                <option value="e-comm">E-Commerce</option>
              </select>
            </label>

            <Field className="flex gap-x-2 col-span-2">
              <div className="flex h-6 items-center">
                <Checkbox
                  checked={enabled}
                  onChange={setEnabled}
                  className="group block size-4 rounded border bg-white data-[checked]:bg-alternate "
                >
                  {/* Checkmark icon */}
                  <svg
                    className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Checkbox>
              </div>
              <Label className="text-sm text-gray-600 content-center">
                By selecting this, you agree to our
                <Link to="/privacy" className="text-blue-600 underline ms-1">
                  privacy policy
                </Link>
              </Label>
            </Field>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="hover:bg-alternate hover:text-white"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
