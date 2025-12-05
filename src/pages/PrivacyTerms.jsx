import Privacy from "../Components/Privacy";
import PrivacyHeader from "../Components/PrivacyHeader";
import Terms from "../Components/Terms";

const PrivacyTerms = () => {
  return (
    <div className="min-h-dvh bg-white dark:bg-dark">
      <PrivacyHeader />
      <div className="flex flex-col lg:flex-row justify-center lg:gap-10 gap-0">
        <Privacy />
        <Terms />
      </div>
    </div>
  );
};

export default PrivacyTerms;
