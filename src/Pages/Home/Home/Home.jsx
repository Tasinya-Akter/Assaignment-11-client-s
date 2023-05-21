import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Category from "../Category/Category";
import NewArrival from "../../NewArrival/NewArrival";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <NewArrival></NewArrival>
    </div>
  );
};

export default Home;
