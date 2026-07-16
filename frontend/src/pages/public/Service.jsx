import React from "react";

import ServiceHero from "../../components/services/ServiceHero";

import ServiceSecondSection from "../../components/services/ServiceSecondSection";
import ServiceThirdCarousel from "../../components/services/ServiceThirdCarousel";
import ServiceFourthQuerie from "../../components/services/ServiceFourthQuerie";



console.log("service hero");

const Service = () => {
  return (
    <div>
      <ServiceHero />
      <ServiceSecondSection />
      <ServiceThirdCarousel />
      <ServiceFourthQuerie />
    </div>
  );
};

export default Service;
