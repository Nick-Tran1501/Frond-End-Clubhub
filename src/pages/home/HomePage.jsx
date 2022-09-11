import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate()
  const token = localStorage.getItem("token")


  useEffect(() => {
    if(!token){
      navigate("/")
     }
     else{
       navigate("/home")
     }
  },[])
  
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
          <Col xs={0} sm={0} md={0} lg={5} xl={5}>
            <Sidebars />
          </Col>

          < Col xs={24} sm={24} md={24} lg={13} xl={13} style={{marginTop: "2rem"}}>

            <div className="PostListContainer">
              <Post/>
            </div>

          </Col>

          <Col xs={0} sm={0} md={0} lg={6} xl={6} style={{marginTop: "2rem"}}>
            <Rightbars/>
          </Col>
          
        </Row>

    </div>

  );
}

export default Home;
