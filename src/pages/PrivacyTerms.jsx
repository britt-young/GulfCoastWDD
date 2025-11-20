import Privacy from "../Components/Privacy"
import PrivacyHeader from "../Components/PrivacyHeader";
import Terms from "../Components/Terms";

const PrivacyTerms = () => {
  return (
    <div className="min-h-dvh bg-white dark:bg-dark">
      <PrivacyHeader />
      <Privacy />
      <Terms />
    </div>
  );
};

export default PrivacyTerms;
