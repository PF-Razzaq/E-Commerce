import React from "react";
import Popular from "../Components/Popular/Popular";
import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";

const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </>
  );
};

export default Shop;
