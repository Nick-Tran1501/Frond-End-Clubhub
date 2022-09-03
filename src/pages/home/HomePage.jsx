import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbars from "../../components/navbar/NavBars";
import Sidebars from "../../components/sidebar/Sidebars";
import Rightbars from "../../components/rightbar/RightBars";
import "./HomePage.css";
import "antd/dist/antd.css";
import { Col, Row} from "antd";
import PostUpload from "../../components/postUpload/PostUpload";
import Post from "../../components/posts/Post"


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
          <Col xs={0} sm={0} md={0} lg={7} xl={5}>
            <Sidebars />
          </Col>

          < Col xs={24} sm={24} md={18} lg={14} xl={13} style={{marginTop: "2rem"}}>
            <PostUpload />


            <div className="PostListContainer">
              <Post/>
            </div>

          </Col>

          <Col xs={0} sm={0} md={6} lg={6} xl={6} style={{marginTop: "2rem"}}>
            <Rightbars/>
          </Col>
          
        </Row>

    </div>

  );
}

export default Home;
