import AboutHeader from "../Components/AboutHeader";
import Bio from "../Components/Bio";
import Workflow from "../Components/Workflow";
import PortfolioGrid from "../Components/PortfolioGrid";
import Testimonials from "../Components/Testimonials";

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHeader />
      <Bio />
      <Workflow />
      <PortfolioGrid />
      <Testimonials />
    </div>
  );
};

export default About;
