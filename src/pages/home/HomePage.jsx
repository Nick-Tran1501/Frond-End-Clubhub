import React from "react";
import Navbars from "../../components/navbar/NavBars";
import Sidebars from "../../components/sidebar/Sidebars";
import Feed from "../../components/feed/Feeds";
import Rightbars from "../../components/rightbar/RightBars";
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
            sm: 15,
            md: 15,
            lg: 15,
          }}
          className="hContainer"
        >
          <Col xs={0} sm={0} md={4} lg={4} xl={4}>
            <Sidebars />
          </Col>

          <Col xs={24} sm={18} md={14} lg={14} xl={14} style={{marginTop: "2rem"}}>
            <Feed/>
          </Col>

          <Col xs={0} sm={6} md={6} lg={6} xl={6} style={{marginTop: "2rem"}}>
            <Rightbars/>
          </Col>
          
        </Row>

    </div>

  );
}

export default Home;
