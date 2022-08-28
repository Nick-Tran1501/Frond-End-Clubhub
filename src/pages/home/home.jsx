import React from "react";
import Navbars from "../../components/navbar/navbar";
import Sidebars from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/feed";
import Rightbars from "../../components/rightbar/rightbar";
import "./home.css";
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
          className="hContainer"
        >
          <Col xs={0} sm={0} md={4} lg={4} xl={4}>
            <Sidebars />
          </Col>

          <Col xs={24} sm={18} md={14} lg={14} xl={14} style={{marginTop: "2rem"}}>
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
