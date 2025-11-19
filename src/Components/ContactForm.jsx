import { useState } from "react";
import { Field, Label, Checkbox } from "@headlessui/react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [enabled, setEnabled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Required for Netlify to recognize the form
    formData.append("form-name", form.getAttribute("name"));

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      setSubmitted(true);
      form.reset();
      setEnabled(false);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was a problem submitting the form.");
    }
  };

  if (submitted) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Thank you for your message!
        </h2>
        <p className="mt-2 text-gray-600">
          We’ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div className="py-20 px-5 lg:px-0">
      <div className="bg-gray-100 dark:bg-alternate rounded-lg shadow-lg py-5 max-w-2xl mx-auto hover:scale-105 transition-all duration-300">
        <div className="mx-auto text-center text-black dark:text-white">
          <h2>Request a meeting</h2>
          <p className="mt-2">
            Send us a message and let us help you convert website visitors to
            clients
          </p>
        </div>

        <form
          name="gcww-contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="lg:mx-auto mx-5 max-w-xl mt-12 font-alt"
        >
          {/* Hidden form metadata for Netlify */}
          <input type="hidden" name="form-name" value="gcww-contact" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human:{" "}
              <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold text-gray-900 dark:text-white"
              >
                First name
              </label>
              <div className="mt-1">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 font-alt text-gray-900  outline-1 outline-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <div className="mt-1">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 font-alt text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-gray-900 dark:text-white"
              >
                Company
              </label>
              <div className="mt-1">
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="block w-full rounded-md bg-white px-3.5 py-2 font-alt text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900 dark:text-white"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 font-alt text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <div className="mt-1">
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="123-456-7890"
                  className="block w-full rounded-md bg-white px-3.5 py-2 font-alt text-sm text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400"
                />
              </div>
            </div>

            <label className="block text-sm font-semibold text-gray-900 dark:text-white col-span-2">
              Select your preferred pricing package:
              <select
                name="selectedPackage"
                defaultValue="default"
                required
                className="bg-white px-1 py-1 font-alt hover:cursor-pointer text-gray-700 outline-1 outline-gray-300 mt-1 ms-2 rounded-md"
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
                  className="group block size-4 rounded border bg-white data-[checked]:bg-alternate"
                  required
                >
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
              <Label className="text-sm text-gray-600 dark:text-white content-center">
                By selecting this, you agree to our
                <Link to="/privacy" className="text-alternate dark:text-alt underline ms-1 hover:text-black dark:hover:text-white">
                  privacy policy
                </Link>
              </Label>
            </Field>
          </div>

          <div className="mt-10 mb-2">
            <button
              type="submit"
              className="bg-alternate text-white rounded hover:bg-alt dark:bg-alt dark:hover:bg-white dark:text-black hover:text-black transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
