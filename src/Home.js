import React from "react";
// import styled from "styled-components";
import HeroSection from "./componets/HeroSection";
import Trusted from "./componets/Trusted";
import ProductsPage from "./componets/FutureProductsPage";

export default function Home() {
  const heroData = {
    storeTittle: "V V shoppoing",
  };
  return (
    <>
      <HeroSection storeTittle={heroData.storeTittle} pagePath="./Products" />
      <Trusted />
      <ProductsPage />
    </>
  );
}
