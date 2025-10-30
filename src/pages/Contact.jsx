import React from "react";
import ContactForm from "../Components/ContactForm";
import ContactSection from "../Components/ContactSection";
import ContactHeader from "../Components/ContactHeader";

const Contact = () => {
  return (
    <div className="min-h-screen ">
      <ContactHeader />
      <div className="lg:px-60 grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-dark lg:min-h-[860px]">
        <ContactSection />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
