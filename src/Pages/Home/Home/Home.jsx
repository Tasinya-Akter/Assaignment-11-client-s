import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Category from "../Category/Category";
import NewArrival from "../../NewArrival/NewArrival";
import FollowUs from "../../FollowUs/FollowUs";
import useTitle from "../../../hooks/useTitle";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <NewArrival></NewArrival>
      <FollowUs></FollowUs>
    </div>
  );
};

export default Home;
