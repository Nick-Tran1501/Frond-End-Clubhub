import React from "react";
import "./WelcomePage.css";
import Hero from "../../components/hero/Heros";
import Gallery from "../../components/gallery/Gallerys";

const welcome = () => {
  return (
    <div>

      <div className="welcomeContainer">
        <Hero/>
        <Gallery />
      </div>
    </div>
  );
}

export default welcome;
