import ContactForm from "../Components/ContactForm";
import ContactSection from "../Components/ContactSection";
import ContactHeader from "../Components/ContactHeader";
import SEOHelmet from "../Components/SEOHelmet";


const Contact = () => {
  return (
    <div className="min-h-screen ">
      {/* SEO Component */}
      <SEOHelmet
        title="Contact | Gulf Coast Web Designs & Development"
        description="Tallahassee, Florida Website Design & Development"
        canonical="/contact"
        ogImage="imgs/home-og.png"
      />
      <ContactHeader />
      <div className="flex flex-col lg:flex-row lg:gap-20 justify-center bg-white dark:bg-dark lg:min-h-[860px]">
        <ContactSection />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
