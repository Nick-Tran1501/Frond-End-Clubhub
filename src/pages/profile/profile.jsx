import React from 'react';
import "./profile.css";
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/feed/feed';
import "antd/dist/antd.css";


const profile = () =>  {
  return (
    <div className='profile--container'>
        <Navbar/>
        <Sidebar/>

    </div>
  )
}

export default profile