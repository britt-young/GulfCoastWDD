import React from 'react'
import {PhoneArrowDownLeftIcon, EnvelopeIcon, MapPinIcon} from "@heroicons/react/24/solid";

const ContactSection = () => {
  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-start">
        <h4>contact us</h4>
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Send us a message
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <div className="flex flex-col lg:items-start justify-between py-5">
        <p className="my-1"><PhoneArrowDownLeftIcon className="inline-block w-6 me-2" />+123 456 7890</p>
        <p className="my-1 mr-10"><EnvelopeIcon className="inline-block w-6 me-2" />gulfcoastwdd@protonmail.com</p>
        <p className="my-1"><MapPinIcon className="inline-block w-6 me-2" />United States</p>
      </div>
    </div>
  )
}

export default ContactSection