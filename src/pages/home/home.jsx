import React from "react";
import Navbars from "../../components/navbar/navbar";
import Sidebars from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbars from "../../components/rightbar/rightbar";
import Footer from "../../components/footer/footer";
import "./home.css";
import "antd/dist/antd.css";
import { Col, Row,Layout } from "antd";

function home() {
  return (
    <div className="homeContainer">
  
        <Row>
          <Col span={24} >
            <Navbars />
          </Col>
        </Row>


        <Row
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
          
        </Row>

      <Row>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>


      
      
      

      
    </div>
    // </div>

  );
}

export default home;
