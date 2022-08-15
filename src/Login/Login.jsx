import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import 'antd/dist/antd.min.css'
import "../css/Login.css"
import {ArrowRightOutlined} from '@ant-design/icons';
import backgroundVid from "../image/bg-vid2.mp4";
import ClubLogo from '../image/ClubHub_Trans.png'

import { Col, Row } from 'antd';
import { Layout } from "antd";
import {Button} from 'antd';

import LoginForm from "../Login/LoginForm";
import Register from "../Login/Register";



const { Content } = Layout;


const LoginContainer = () => {
 

  return(
    <React.Fragment>
      <Layout>
        {/* Header */}
        

        <Layout>
          <Content
            className="BodyCotainer"
            
          >
            <div
              className="Logo"
            >
              <div className="logo-img">
              <img 
                src= {ClubLogo}  
                alt="ClubHubLogo" 
                width="200px"
                height="150px"
                style={{
                  
                }}
              />

              </div>

            <div className="title">
              <h1 style={{
                fontSize: '50px',
                color:"white"
              }}
              > 
                Wellcome to RMIT CLUB HUB
              </h1>
            </div>   

            </div>
            

            <Row
              className="MainContainer" 
              
            >
              {/* Background Side */}
              <Col span={16}
                className="BackgroundSide"
                xxl={16}
                xl={12}
                lg={0}
                md={0}
                xs={0}
              >
                <video loop autoPlay muted id='video'>
                  <source src={backgroundVid} type='video/mp4'/>
                </video>

                <div
                  className="ButtonContainer"
                >
                  
                  <Button 
                    type="primary" 
                    shape="round" 
                    size="large"
                    htmlType="submit"
                    className="btn-gradient"
                    style={{
                      width:"15rem",
                      height:"3rem",
                      marginTop:"1rem"
                      
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
                      width:"15rem",
                      height:"3rem",
                      marginTop:"1rem"
                      
                    }}
                  >
                    Visit as Guest
                </Button>
                </div>
               


              </Col>

              {/* Content Size */}
              <Col span={8}
                className="ContentSide"
                xxl={8}
                xl={12}
                lg={24}
                md={24}
                xs={24}        
              >
                
                <Routes>
                    <Route path="/" element={<LoginForm/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>

              </Col>

            </Row>

          </Content>
        </Layout>

        
       
      </Layout>
    </React.Fragment>
  )
}

export default LoginContainer