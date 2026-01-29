import React from "react";
import {
  PhoneArrowDownLeftIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const ContactSection = () => {
  // Email obfuscation
  const emailUser = "gulfcoastwdd";
  const emailDomain = "protonmail.com";

  // Address for Apple Maps
  const address = "Tallahassee, FL., USA";
  const mapsLink = `https://maps.apple.com/?q=${encodeURIComponent(address)}`;

  // Phone number
  const phoneNumber = "+18506101066";

  // Function to render email dynamically
  const renderEmail = () => {
    const email = `${emailUser}@${emailDomain}`;
    return (
      <span
        className="hover:underline cursor-pointer"
        onClick={() => (window.location.href = `mailto:${email}`)}
      >
        {emailUser}@{emailDomain}
      </span>
    );
  };
  return (
    <div className="px-5 lg:py-20 pt-20 lg:px-0 flex flex-col items-center">
      <div className="mx-auto w-fit lg:text-start text-center dark:text-white">
        <h4 className="text-alternate dark:text-alt">contact us</h4>
        <h2>Reach out today</h2>
        <p className="mt-2">
          We looking forward to working with you!
        </p>
      </div>
      <div className="font-alt pt-5 dark:text-white text-black">
        {/* Phone */}
        <p className="mb-2">
          <PhoneArrowDownLeftIcon className="inline-block w-4 me-2" />
          <a href={`tel:${phoneNumber}`} className="hover:underline">
            (850) 610-1066
          </a>
        </p>

        {/* Email */}
        <p className="my-2 mr-10">
          <EnvelopeIcon className="inline-block w-4 me-2 " />
          {renderEmail()}
        </p>

        {/* Address */}
        <p className="my-2">
          <MapPinIcon className="inline-block w-4 me-2 " />
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {address}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
