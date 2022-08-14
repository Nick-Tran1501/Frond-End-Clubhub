import React from "react"
import 'antd/dist/antd.css';
import "../css/Login.css"
import { Button, Form, Input , DatePicker, Select, Checkbox} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import {Link } from "react-router-dom";


import { Col, Row } from 'antd';



const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Checked = (e) => {
  console.log(`checked = ${e.target.checked}`);
};


const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const dateFormatList = ['DD/MM/YYYY'];
const Register = () => {
  return(
    <React.Fragment>
        <div
          className="RegisterCotainer"
        >
        <div className="button-box">
            <div id="toggle" style={{left: "100px", width: "120px"}}></div>
            <Link to="/"><button type="button" className="btn-toggle fw-bold">Log in</button></Link>
            <Link to="/register"><button type="button" className="btn-toggle fw-bold">Register</button></Link>
        </div>

        <Form
          className="RegisterForm">
        <Row 
        gutter={8}
        style={{
          width:"100%",
          display:"flex",
          flexFlow:"row nowrap",
          justifyContent:"center",
          alignItems:"center"
          
        }}
        
        >
          {/* Left Column */}
          <Col
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            xs={12}
            style={{
              flexBasis:"50%"
            }}
          >

            {/*Fullname*/}
            <Form.Item
              className="ItemsContainer"
            >
              <h3
                style={{
                  color:"white",
                  textAlign:"left"
                }}
              >Fullname:</h3>
          
              <Input 
                size="large" 
                placeholder="Enter Your Fullname"         
                style={{
                  color:"white"
                }}
                className="RegisterItems"
                allowClear="true"
                required
              />
            </Form.Item>

            {/* Email*/}
            <Form.Item>
              <h3
                style={{
                  color:"white",
                  textAlign:"left"
                }}
              >Email:</h3>
          
              <Input 
                size="large" 
                placeholder="Enter Your Email"         
                style={{
                  color:"white"
                }}
                className="RegisterItems"
                allowClear="true"
                required
              />
            </Form.Item>


            {/* Phone */}
            <Form.Item>
            <h3
                style={{
                  color:"white",
                  textAlign:"left"
                }}
              >Phone:</h3>
          
              <Input 
                size="large" 
                placeholder="Enter Your Phone Number"         
                style={{
                  color:"white"
                }}
                className="RegisterItems"
                allowClear="true"
                required
              />
            </Form.Item>

              {/* Password */}
            <Form.Item>
              <h3
                style={{
                  color:"white",
                  textAlign:"left"
                }}
              >Password:</h3>
          
              <Input.Password 
                size="large" 
                placeholder="Enter Password"         
                style={{
                  color:"white"
                }}
                iconRender={(visible) => (visible ? <EyeTwoTone
                  style={{
                    color:"white"
                  }}
                /> : <EyeInvisibleOutlined 
                  style={{
                    color:"white"
                  }}
                />)}
                prefix={<LockOutlined
                    
                  />}
                className="RegisterItems"
                allowClear="true"
                required
              />

            </Form.Item>

           
          </Col>

          {/* Right Column */}
          <Col  
            xxl={12}
            xl={12}
            lg={12}
            md={12}
            xs={12}

            style={{
              flexBasis:"50%"
            }}
            >
              {/* DOB */}
            <Form.Item>
              <h3
                style={{
                  color:"white",
                  textAlign:"left"
                }}
              >Date of Birth:</h3>
              <DatePicker 
                size="large"
                format={dateFormatList} 
                placeholder="Your Birthday"
                className="RegisterItems"
                style={{
                  
                  color:"white"
                }}
                inputReadOnly="true" 
                allowClear="true"
              />
            </Form.Item>
              
              {/* Gender */}
            <Form.Item>
              <h3
                style={{
                  color:"white",
                  textAlign:"left"
                }}
              >Gender:</h3>
              <Select
                size="large"
                onChange={handleChange}
                className="RegisterItems"
                style={{
                  background:"black",
                  backgroundColor:"black",
                  color:"black"
                }}
                placeholder="Select your gender"
              >
                <Option
                  value="Male"
                >
                  Male
                </Option>
                <Option
                  value="Female"
                >
                  Female
                </Option>
              </Select>
            </Form.Item>
            
            {/* Username */}
            <Form.Item>
              <h3
                style={{
                  color:"white",
                  textAlign:"left"
                }}
              >Username:</h3>
          
              <Input 
                size="large" 
                placeholder="Enter Your Username"         
                style={{
                  color:"white"
                }}
                prefix={<UserOutlined 
                  style={{
                    
                  }}
                />}
                className="RegisterItems"
                allowClear="true"
                required
              />
            </Form.Item>

            {/* Re-type Password  */}
            <Form.Item>
              <h3
                style={{
                  color:"white",
                  textAlign:"left"
                }}
              >Re-type Password:</h3>
          
              <Input.Password 
                size="large" 
                placeholder="Re-type Password"         
                style={{
                  color:"white"
                }}
                iconRender={(visible) => (visible ? <EyeTwoTone
                  style={{
                    color:"white"
                  }}
                /> : <EyeInvisibleOutlined 
                  style={{
                    color:"white"
                  }}
                />)}
                prefix={<LockOutlined
                    
                  />}
                className="RegisterItems"
                allowClear="true"
                required
              />

            </Form.Item>
          </Col>

        </Row>
        
        <Checkbox onChange={Checked}
          style={{
            fontSize:"18px",
            width:"100%",
            
          }}
        >
          I agree to all the <span
            className="Agreement"
            
          >Term</span>,  
          <span
            className="Agreement"
            
          > Privacy Policy</span>, and 
          
          <span
            className="Agreement"
            
          > Fees</span>
        </Checkbox>

          <Button 
            type="primary" 
            shape="round" 
            size="large"
            htmlType="submit"
            className="btn-gradient"
            style={{
              width:"35rem",
              height:"3rem",
              marginTop:"1rem"
              
            }}
          >
            Register
          </Button>

        </Form>

      </div>
    </React.Fragment>
  )
}


export default Register