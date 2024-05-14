import React from "react";
import HeroSection from "./componets/HeroSection";

export default function About() {
  const heroDataAbout = {
    aboutTittle: "V V Ecommerce",
  };
  return (
    <>
      <HeroSection
        storeTittle={heroDataAbout.aboutTittle}
        pagePath="/Products"
      />
    </>
  );
}
