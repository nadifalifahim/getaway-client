import React from "react";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import HomePackages from "./HomePackages/HomePackages";
import Stats from "./Stats/Stats";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <HomePackages></HomePackages>
      <Stats></Stats>
      <Contact></Contact>
    </div>
  );
};

export default Home;
