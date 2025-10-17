import AboutHeader from "../Components/AboutHeader";
import Bio from "../Components/Bio";
import Workflow from "../Components/Workflow";
import PortfolioGrid from "../Components/PortfolioGrid";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import WaveAnimation1 from "../Components/WaveAnimation3";

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHeader />
      <Bio />
      <Workflow />
      <PortfolioGrid />
      <Testimonials />
      <div className="bg-alternate relative overflow-hidden">
        <WaveAnimation1 />
        <div className="relative pt-20">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default About;
