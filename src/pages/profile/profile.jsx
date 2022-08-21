import React from 'react';
import "./profile.css";
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';
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

      {/* <Row
        gutter={{
          xs: 0,
          sm: 8,
          md: 16,
          lg: 22,
        }}
      >
        <Col xs={0} sm={0} md={4} lg={4} xl={4}>
          <Sidebars />
        </Col>

        <Col xs={24} sm={18} md={14} lg={14} xl={14}>
          <Feed />
        </Col>

        <Col xs={0} sm={6} md={6} lg={6} xl={6}>
          <Rightbars/>
        </Col>
        
      </Row> */}
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