import { BadgeCheck } from "lucide-react";

const GuarenteeGrid = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-10 text-black dark:text-white">
      {/* Snippet */}
      <div className="w-full ">
        <h5 className="font-bold text-black dark:text-white">
          <span>
            <BadgeCheck className="inline-block me-1 mb-1 text-alternate dark:text-alt" />
          </span>
          SITE SECURITY
        </h5>
        <p>
          Every website we build includes secure communication through HTTPS encryption and generated SSL certificates
        </p>
      </div>
      {/* Snippet */}
      <div className="w-full ">
        <h5 className="font-bold text-black dark:text-white">
          <span>
            <BadgeCheck className="inline-block me-1 mb-1 text-alternate dark:text-alt" />
          </span>
          5-STAR CUSTOMER SUPPORT
        </h5>
        <p>
          Call or text anytime. No automated responses. When you call, you speak directly to me- your developer
        </p>
      </div>
      {/* Snippet */}
      <div className="w-full ">
        <h5 className="font-bold text-black dark:text-white">
          <span>
            <BadgeCheck className="inline-block me-1 mb-1 text-alternate dark:text-alt" />
          </span>
          OPTIMIZED PAGE SPEED 
        </h5>
        <p>
          1 in 4 users will abandon a site that takes more than 4 seconds to load. Our websites are built with performance in mind and score between 90-100 with Google everytime
        </p>
      </div>
      {/* Snippet */}
      <div className="w-full ">
        <h5 className="font-bold text-black dark:text-white">
          <span>
            <BadgeCheck className="inline-block me-1 mb-1 text-alternate dark:text-alt" />
          </span>
          CUSTOM DESIGN
        </h5>
        <p>
          100% hand-coded and custom to your business. You have full control with a wide range of feature customizations that align with your company's needs and goals
        </p>
      </div>
      {/* Snippet */}
      <div className="w-full ">
        <h5 className="font-bold text-black dark:text-white">
          <span>
            <BadgeCheck className="inline-block me-1 mb-1 text-alternate dark:text-alt" />
          </span>
          HIGH-QUALITY CONTENT
        </h5>
        <p>
          The key to building client trust is through high-quality content! We use Authoritative Content to establish your brand as a trusted leader in your industry and serve as your brnad's voice
        </p>
      </div>
      {/* Snippet */}
      <div className="w-full ">
        <h5 className="font-bold text-black dark:text-white">
          <span>
            <BadgeCheck className="inline-block me-1 mb-1 text-alternate dark:text-alt" />
          </span>
          MONEY BACK GUARENTEE
        </h5>
        <p>
          If we can't design something you are 100% satisfied with and no longer wish to continue with our services, we will refund you the amount paid to us to get started
        </p>
      </div>
    </div>
  );
};

export default GuarenteeGrid;
