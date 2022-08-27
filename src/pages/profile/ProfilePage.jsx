import React, {useState, useEffect} from 'react';
import "./ProfilePage.css";
import Navbar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footers';
import Sidebar from '../../components/sidebar/SideBar';
import "antd/dist/antd.css";
import Profile_bg from './components/Profile_bg';
import Profile_main_side from './components/Profile_main_side';
import Profile_main_post from './components/Profile_main_post';
import { Col, Row,Layout } from "antd";


const profile = () => {
  return (
    <div className='profile--container'>
      <Row>
        <Col span={24} >
          <Navbar />
        </Col>
      </Row>

      {/* <Sidebar/> */}
      <div className='container'>
      <Row>
        <Col span={24} >
          <Profile_bg />
        </Col>
      </Row>

        {/* MAIN CONTENT */}
        <Row className="main-content">
          <Col xs={24} sm={24} md={7} lg={7} xl={7} >
            <Profile_main_side />
          </Col>

          <Col xs={24} sm={24} md={16} lg={16} xl={16} >
            <Profile_main_post />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default profile