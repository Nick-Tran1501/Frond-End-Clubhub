import React from "react"
import { Routes, Route, Link } from "react-router-dom";
import 'antd/dist/antd.min.css'
import "./css/Login.css"


import { Col, Row } from 'antd';
import { Layout } from "antd";
import {Button} from 'antd';

import LoginForm from "./LoginForm";
import Register from "./Register";



const { Header, Content } = Layout;


const LoginContainer = () => {
 

  return(
    <React.Fragment>
      <Layout>
        {/* Header */}
        <Header
          className="Header"
          style={{
            backgroundColor:"black",
          }}
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
              gutter={{
                xs: 8,
                sm: 16,
                md: 24,
                lg: 32,
              }}
            >
              {/* Background Side */}
              <Col span={16}
                className="BackgroundSide"
              >
               <div>
               <img 
                      src={require("./image/Galaxy-login.png")}
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
              <Col span={16}
                className="ContentSide"
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