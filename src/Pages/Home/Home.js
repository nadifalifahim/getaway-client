import React from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import HomePackages from "./HomePackages/HomePackages";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomePackages></HomePackages>
      <Contact></Contact>
    </div>
  );
};

export default Home;
