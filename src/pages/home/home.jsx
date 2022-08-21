import React from "react";
import Navbars from "../../components/navbar/navbar";
import Sidebars from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbars from "../../components/rightbar/rightbar";
import Footer from "../../components/footer/footer";
import "./home.css";
import "antd/dist/antd.css";
import { Col, Row } from 'antd';



function home() {
  return (
    <div className="homeContainer">
            <Row>
        <Col span={24}>
          <Navbars/>
        </Col>
      </Row>

      <Row gutter={{
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
      }}>
        <Col span={4}>
          <Sidebars/>
        </Col>

        <Col xs={20} sm={14} md={14} lg={14} xl={14}>
          <Feed/>
        </Col>

        <Col xs={0} sm={6} md={6} lg={6} xl={6}>
          <Rightbars/>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Footer/>
        </Col>
      </Row>
    </div>
  );
}

export default home;
