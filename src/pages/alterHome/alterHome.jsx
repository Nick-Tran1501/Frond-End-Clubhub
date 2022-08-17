import React from 'react';
import "./alterHome.css";
import Navbars from '../../components/navbar/navbar';
import Footers from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/feed/feed';
import Rightbar from '../../components/rightbar/rightbar';


function alterHome() {
  return (
    <div className='homesContainer'>
        <Navbars/>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
    </div>
  )
}

export default alterHome