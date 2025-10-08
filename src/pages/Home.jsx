import React from "react";
import HomeHeader from "../Components/HomeHeader";
import ServiceCards from "../Components/ServiceCards";
import HomeAbout from "../Components/HomeAbout";
// import Portfolio from "../Components/Portfolio";
import Pricing from "../Components/Pricing";
import Testimonials from "../Components/Testimonials";
import PortfolioGrid from "../Components/PortfolioGrid";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HomeHeader />
      <HomeAbout />
      <ServiceCards />
      
      <PortfolioGrid />
      {/* <Portfolio /> */}
      
      <Testimonials />
      <Pricing />  
    </div>
  );
};

export default Home;
