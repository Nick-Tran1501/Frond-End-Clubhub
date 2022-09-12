import React , {useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import { useNavigate} from "react-router-dom";


import "antd/dist/antd.min.css";
import "./LoginPage.css";


import { ArrowRightOutlined } from "@ant-design/icons";
import backgroundVid from "../../image/bg-vid2.mp4";
import ClubLogo from "../../image/ClubHub_Trans.png";

import { Col, Row } from "antd";
import { Layout } from "antd";
import { Button } from "antd";

import LoginForm from "../../components/loginform/LoginForm";
import Register from "../../components/registerform/RegisterForm";



const { Content } = Layout;

const LoginPage = () => {
  
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
    <React.Fragment>
      <Layout>
        <Layout>
          <Content className="BodyCotainer">
            <div className="Logo">
              <div className="logo-img">
                <img
                  src={ClubLogo}
                  alt="ClubHubLogo"
                  width="200px"
                  height="150px"
                />
              </div>

              <div className="title">
                <h1
                  style={{
                    fontSize: "50px",
                    color: "white",
                  }}
                >
                  It's Time To Improve Your Talent
                </h1>
              </div>
            </div>

            <Row className="MainContainer">
              {/* Background Side */}
              <Col
                className="BackgroundSide"
                xxl={14}
                xl={0}
                lg={0}
                md={0}
                xs={0}
              >
                <video loop autoPlay muted id="video">
                  <source src={backgroundVid} type="video/mp4" />
                </video>

                <div className="ButtonContainer">
                
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    htmlType="submit"
                    className="btn-gradient"
                    style={{
                      width: "15rem",
                      height: "3rem",
                      marginTop: "1rem",
                      background: "rgba(0,212,255,1) ",
                    }}
                    onClick={()=>{
                      navigate("/Welcome")
                    }}
                  >
                    Learn More <ArrowRightOutlined />
                  </Button>
                  
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    htmlType="submit"
                    className="btn-gradient"
                    style={{
                      width: "15rem",
                      height: "3rem",
                      marginTop: "1rem",
                    }}
                    
                  >
                   <a href="http://rmit.edu.vn/" target="_blank" rel="noreferrer" style={{all:"unset"}}>RMIT Vietnam</a> 
                  </Button>
                </div>
              </Col>

              {/* Content Size */}
              <Col
                className="ContentSide"
                xxl={10}
                xl={24}
                lg={24}
                md={24}
                xs={24}
              >
                <Routes>
                  <Route exact path="/" element={<LoginForm />} />
                  <Route exact path="/registerpage" element={<Register />} />
                </Routes>
              </Col>
            </Row>
            <footer className="LoginFooter">
              <small>Copyright ©2022 RMIT-Club-Hub. All Right Reserved</small>
            </footer>
          </Content>
        </Layout>
      </Layout>
    </React.Fragment>
  );
};

export default LoginPage;
