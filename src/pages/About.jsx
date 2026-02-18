import AboutHeader from "../Components/AboutHeader";
import Bio from "../Components/Bio";
import Workflow from "../Components/Workflow";
import PortfolioDisplay from "../Components/PortfolioDisplay";
// import Testimonials from "../Components/Testimonials";
import CTA from "../Components/CTA";
import SEOHelmet from "../Components/SEOHelmet";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Component */}
      <SEOHelmet
        title="About | Gulf Coast Web Designs & Development"
        description="Tallahassee, Florida Website Design & Development"
        canonical="/about"
        ogImage="imgs/home-og.png"
      />
      <AboutHeader />
      <Bio />
      <Workflow />
      <PortfolioDisplay />
      {/* <Testimonials /> */}
      <CTA />
    </div>
  );
};

export default About;
