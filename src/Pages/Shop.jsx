import React from "react";
import Popular from "../Components/Popular/Popular";
import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </>
  );
};

export default Shop;
