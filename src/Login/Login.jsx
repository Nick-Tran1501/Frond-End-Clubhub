import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import 'antd/dist/antd.min.css'
import "../css/Login.css"


import { Col, Row } from 'antd';
import { Layout } from "antd";
import {Button} from 'antd';

import LoginForm from "../Login/LoginForm";
import Register from "../Login/Register";



const { Header, Content } = Layout;


const LoginContainer = () => {
 

  return(
    <React.Fragment>
      <Layout>
        {/* Header */}
        <Header
          className="Header"
        >

          <div
            className="Logo"
          >
            <h1
              style={{
                color:"white"
              }}
            >
              CLUBHUB
            </h1>

          </div>

          <div
            className="ActionContainer"
          >
              <Button 
                type="text"
                shape="round"  
                size={"large"}
                style={{
                  textDecoration:"underline",
                  color:"white"        
                }}

              >
                <Link to="/">
                  Login
                </Link>
              </Button>
              <Button 
              type="text"
              shape="round"  
              size={"large"}
              style={{
                textDecoration:"underline",
                color:"white"
                            
              }}
            >
              <Link to="/register">
                Register
              </Link>
            </Button>

          </div>
          
        </Header>

        <Layout>
          <Content
            className="BodyCotainer"
            
          >
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
               <div>
               <img 
                      src={require("../image/Galaxy-login.png")}
                      alt="background"
                      style={{
                        height: "65vh",
                        width:"100%",
                        opacity:"0.9"
                      }}
                      />
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