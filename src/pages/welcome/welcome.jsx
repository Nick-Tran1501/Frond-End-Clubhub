import React from "react";
import "./welcome.css";
import Navbars from "../../components/navbar/navbar";
import Hero from "../../components/hero/hero";
import Gallery from "../../components/gallery/gallery";
import Footer from "../../components/footer/footer";

function welcome() {
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
