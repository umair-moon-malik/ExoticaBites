import React from "react";
import Homepage from "./Homepage";
import Footer from "./Footer.jsx";
import Features from "./Features.jsx";
import Testimonals from "./Testimonals.jsx";
import Events from "./Events.jsx";

const Hero = () => {
  return (
    <div>
      <Homepage />
      <Features/>
      <Testimonals/>
      <Events/>
      <Footer/>
    </div>
  );
};

export default Hero;
