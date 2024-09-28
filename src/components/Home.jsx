import React from "react";
import Cover from "./Cover";
import Cetegore from "./Cetegore";
import SellingSection from "./SellingSection";
import BookTrip from "./BookTrip";
import AboutUs from "./AboutUs";
import Media from "./Media";
import InputeSection from "./InputeSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Cover />
      <Cetegore />
      <SellingSection/>
      <BookTrip/>
      <AboutUs/>
      <Media/>
      <InputeSection/>
      <Footer/>
    </div>
  );
};

export default Home;
