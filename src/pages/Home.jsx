import React from "react";
import HomeHeader from "../Components/HomeHeader";
import ServiceCards from "../Components/ServiceCards";
import HomeAbout from "../Components/HomeAbout";

import Pricing from "../Components/Pricing";
import Testimonials from "../Components/Testimonials";
import PortfolioDisplay from "../Components/PortfolioDisplay";

const Home = () => {
  return (
    <div className="min-h-screen">
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
