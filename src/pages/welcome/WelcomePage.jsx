import React from "react";
import "./WelcomePage.css";
import Navbars from "../../components/navbar/NavBars";
import Hero from "../../components/hero/Heros";
import Gallery from "../../components/gallery/Gallerys";
import Footer from "../../components/footer/Footers";

const welcome = () => {
  return (
    <div>

      <Navbars />
      <div className="welcomeContainer">
        <Hero/>
        <Gallery />
      </div>
      <Footer/>
    </div>
  );
}

export default welcome;
