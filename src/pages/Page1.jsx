import React from "react";
import HomeHeader from "../Components/HomeHeader";
import ServiceCards from "../Components/ServiceCards";
import HomeAbout from "../Components/HomeAbout";
import Portfolio from "../Components/Portfolio";

const Page1 = () => {
  return (
    <div>
      <HomeHeader />
      <ServiceCards />
      <HomeAbout />
      <Portfolio />
    </div>
  );
};

export default Page1;
