import AboutHeader from "../Components/AboutHeader";
import Bio from "../Components/Bio";
import Workflow from "../Components/Workflow";
import PortfolioDisplay from "../Components/PortfolioDisplay";
// import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";

const About = () => {
  return (
    <div className="min-h-screen">
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
