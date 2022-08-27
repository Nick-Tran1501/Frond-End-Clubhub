import React from "react";
import Navbars from "../../components/navbar/NavBar";
import Sidebars from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import Rightbars from "../../components/rightbar/RightBar";
import "./HomePage.css";
import "antd/dist/antd.css";
import { Col, Row} from "antd";

const Home = () => {
  
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
            sm: 1,
            md: 1,
            lg: 1,
          }}
          className="container"
        >
          <Col xs={0} sm={0} md={4} lg={4} xl={4}>
            <Sidebars />
          </Col>

          <Col xs={24} sm={18} md={14} lg={14} xl={14}>
            <Feed/>
          </Col>

          <Col xs={0} sm={6} md={6} lg={6} xl={6}>
            <Rightbars/>
          </Col>
          
        </Row>

    </div>

  );
}

export default Home;
