import React from "react";
import HomeHeader from "../Components/HomeHeader";
import ServiceCards from "../Components/ServiceCards";
import HomeAbout from "../Components/HomeAbout";
import Portfolio from "../Components/Portfolio";
import Pricing from "../Components/Pricing";
import Testimonials from "../Components/Testimonials";

const Page1 = () => {
  return (
    <div>
      <HomeHeader />
      <ServiceCards />
      <HomeAbout />
      <Portfolio />
      <Pricing />
      <Testimonials />  
    </div>
  );
};

export default Page1;
