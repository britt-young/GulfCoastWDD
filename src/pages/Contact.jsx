import ContactForm from "../Components/ContactForm";
import ContactSection from "../Components/ContactSection";
import ContactHeader from "../Components/ContactHeader";

const Contact = () => {
  return (
    <div className="min-h-screen ">
      <ContactHeader />
      <div className="flex flex-col lg:flex-row lg:gap-20 justify-center bg-white dark:bg-dark lg:min-h-[860px]">
        <ContactSection />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
