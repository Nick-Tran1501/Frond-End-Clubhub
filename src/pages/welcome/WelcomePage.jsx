import React from "react";
import "./WelcomePage.css";
import Navbars from "../../components/navbar/NavBar";
import Hero from "../../components/hero/Hero";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

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
