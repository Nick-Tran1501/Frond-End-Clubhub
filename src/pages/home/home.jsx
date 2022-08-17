import React from 'react';
import Navbars from '../../components/navbar/navbar';
import Sidebars from '../../components/sidebar/sidebar';
import Feed from '../../components/feed/feed';
import Rightbars from '../../components/rightbar/rightbar';
import Footer from '../../components/footer/footer';
import './home.css';


function home() {
  return (
    <div>
      <Navbars/>
      <div className="homeContainer">
        <Sidebars/>
        <Feed/>

         
        
        <Rightbars/>
      </div>
      <Footer/>
    </div>
  )
}

export default home