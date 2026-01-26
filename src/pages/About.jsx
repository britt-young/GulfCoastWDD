import AboutHeader from "../Components/AboutHeader";
import Bio from "../Components/Bio";
import Workflow from "../Components/Workflow";
import PortfolioDisplay from "../Components/PortfolioDisplay";
// import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import SEOHelmet from "../Components/SEOHelmet";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Component */}
      <SEOHelmet
        title="About | Gulf Coast Web Design & Development"
        canonical="/about"
      />
      <AboutHeader />
      <Bio />
      <Workflow />
      <PortfolioDisplay />
      {/* <Testimonials /> */}
      <Contact />
    </div>
  );
};

export default About;
