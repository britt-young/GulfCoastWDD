import React from "react";
import HomeHeader from "../Components/HomeHeader";
import ServiceCards from "../Components/ServiceCards";
import HomeAbout from "../Components/HomeAbout";

const Page1 = () => {
  return (
    <div>
      <HomeHeader />
      <ServiceCards />
      <HomeAbout />
    </div>
  );
};

export default Page1;
