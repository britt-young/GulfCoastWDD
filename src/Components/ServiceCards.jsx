import { useNavigate, Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServiceCards = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleClick = () => {
    navigate("/Contact");
  };

  const services = [
    {
      id: 1,
      title: "User-Friendly Features",
      description:
        "Make a good first impression with potential clients by having a website that is easy to navigate and has intuitive feature placement to guide users to the information they want to see.",
      link: "/services/features",
    },
    {
      id: 2,
      title: "Loading Speed Optimization",
      description:
        "Fast loading times are a non-negotiable for ensuring a positive user experience! We optimize images, videos, and code to improve page speed and keep users engaged and satisfied.",
      link: "/services/optimization",
    },
    {
      id: 3,
      title: "Responsive Design",
      description:
        "Our websites adapt to every screen size! Half of all website traffic originates from mobile devices, making responsive design essential for your site to reach all users.",
      link: "/services/responsiveness",
    },
    {
      id: 4,
      title: "User Security and Web Encryption",
      description:
        "Users want to know their personal data is safe. We include HTTPS encryption to give your users peace of mind that their sensitive data is protected from misuse.",
      link: "/services/security",
    },
    {
      id: 5,
      title: "On-Page SEO",
      description:
        "Our on-page SEO strategy includes keyword optimization, meta descriptions, clean URLs, and enhanced UX to attract relevant traffic and improve rankings.",
      link: "/services/seo",
    },
    {
      id: 6,
      title: "Shopify Store Integration",
      description:
        "Already have a Shopify store? We can integrate it seamlessly with your new custom website—or build your eCommerce presence from scratch.",
      link: "/services/shopify",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl py-20 bg-alternate dark:bg-dark">
      {/* Header */}
      <div className="flex flex-col items-center justify-center py-5 text-white text-center">
        <h4>what we offer</h4>
        <h2>
          Services included in our packages
        </h2>
        <p className="mt-2">
          Let us take care of your website so you can take care of your business
        </p>
      </div>

      {/* Services Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8"
        data-aos="zoom-in"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative bg-white text-black rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:translate-x-2 hover:-translate-y-2"
          >
            {/* Animated bubble background */}
            <div className="absolute -bottom-16 right-5 w-32 h-32 transform translate-x-16 -translate-y-4 bg-alternate rounded-full opacity-10 group-hover:scale-150 transition-transform duration-300" />

            {/* Card Content */}
            <div className="relative p-6 flex flex-col justify-between h-full">
              <div>
                <h5 className="mb-1">{service.title}</h5>
                <p className="text-gray-700 mb-4">{service.description}</p>
              </div>

              {/* Hover link reveal */}
              <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <Link
                  to={service.link}
                  className="inline-flex items-center text-alternate font-semibold hover:underline"
                >
                  see more <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action button */}
      <div className="flex justify-center">
        <Link to="/Contact" className="mt-5">
          <button className="w-full md:w-fit">
            get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCards;
