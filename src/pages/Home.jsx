import HomeHeader from "../Components/HomeHeader";
import ServiceCards from "../Components/ServiceCards";
import HomeAbout from "../Components/HomeAbout";
import SEOHelmet from '../Components/SEOHelmet'
import Pricing from "../Components/Pricing";
// import Testimonials from "../Components/Testimonials";
import PortfolioDisplay from "../Components/PortfolioDisplay";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Component */}
      <SEOHelmet
        title="Welcome | Gulf Coast Web Designs & Development"
        description="Tallahassee, Florida Website Design & Development"
        canonical="/"
        ogImage="imgs/home-og.png"
      />
      <HomeHeader />
      <HomeAbout />
      <ServiceCards />
      <PortfolioDisplay />
      {/* <Testimonials /> */}
      <Pricing />  
    </div>
  );
};

export default Home;
