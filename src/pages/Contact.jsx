import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactSection from "../Components/ContactSection";
import ContactHeader from "../Components/ContactHeader";

const Contact = () => {
  return (
    <div className="min-h-screen absolute top-0 -z-10 bg-gray-500 w-full">
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

export default Contact;
