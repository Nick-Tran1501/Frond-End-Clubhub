import React, { useState } from "react";
import "antd/dist/antd.css";
import "../css/Login.css";
import { Button, Form, Input, DatePicker, Select, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import { Link } from "react-router-dom";

import axios from "axios";
import { Col, Row } from "antd";

const { Option } = Select;

const Checked = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Register = () => {
  //--------Date Format-----
  const dateFormatList = ["DD/MM/YYYY"];

  //---------User Input Detail--------
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    dob: "",
    gender: "",
    phone: "",
  });

 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://rmit-club.herokuapp.com/api/auth/signup",
      data: {
        name: userDetail.name,
        email: userDetail.email,
        password: userDetail.password,
        username: userDetail.username,
        dob: userDetail.dob,
        gender: userDetail.gender,
        phone: userDetail.phone,
      },
    })
      .then((response) => console.log(response))
      .catch((err) => {
        console.error(err);
      });
     
  };

  // ------------Get Date value Function----------
  const onChange = (date, dateString) => {
    setUserDetail({ ...userDetail, dob: dateString });
  };


  return (
    <React.Fragment>
      <div className="RegisterCotainer">
        <div className="button-box">
          <div id="toggle" style={{ left: "100px", width: "90px" }}></div>

          <div id="toggle" style={{ left: "100px", width: "92px" }}></div>
          <Link to="/">
            <button type="button" className="btn-toggle fw-bold">
              Log in
            </button>
          </Link>
          <Link to="/registerpage">
            <button type="button" className="btn-toggle fw-bold">
              Register
            </button>
          </Link>
        </div>

        <Form className="RegisterForm">
          <Row
            gutter={8}
            style={{
              width: "100%",
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "center",
              alignItems: "center",
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
                flexBasis: "50%",
              }}
            >
              {/*Fullname*/}
              <Form.Item
                className="ItemsContainer"
                onChange={(e) => {
                  setUserDetail({ ...userDetail, name: e.target.value });
                }}
              >
                <h3
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "15px",
                  }}
                >
                  Fullname:
                </h3>

                <Input
                  size="large"
                  placeholder="Enter Your Fullname"
                  style={{
                    color: "white",
                  }}
                  className="RegisterItems"
                  allowClear="true"
                  required
                />
              </Form.Item>

              {/* Email*/}
              <Form.Item
                onChange={(e) => {
                  setUserDetail({ ...userDetail, email: e.target.value });
                  console.log(e.target.value);
                }}
              >
                <h3
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "15px",
                  }}
                >
                  Email:
                </h3>

                <Input
                  size="large"
                  placeholder="Enter Your Email"
                  style={{
                    color: "white",
                  }}
                  className="RegisterItems"
                  allowClear="true"
                  required
                />
              </Form.Item>

              {/* Phone */}
              <Form.Item
                onChange={(e) => {
                  setUserDetail({ ...userDetail, phone: e.target.value });
                }}
              >
                <h3
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "15px",
                  }}
                >
                  Phone:
                </h3>

                <Input
                  size="large"
                  placeholder="Enter Your Phone Number"
                  style={{
                    color: "white",
                  }}
                  className="RegisterItems"
                  allowClear="true"
                  required
                />
              </Form.Item>

              {/* Password */}
              <Form.Item
                onChange={(e) => {
                  setUserDetail({ ...userDetail, password: e.target.value });
                  
                }}
              >
                <h3
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "15px",
                  }}
                >
                  Password:
                </h3>

                <Input.Password
                  size="large"
                  placeholder="Enter Password"
                  style={{
                    color: "white",
                  }}
                  iconRender={(visible) =>
                    visible ? (
                      <EyeTwoTone
                        style={{
                          color: "white",
                        }}
                      />
                    ) : (
                      <EyeInvisibleOutlined
                        style={{
                          color: "white",
                        }}
                      />
                    )
                  }
                  prefix={<LockOutlined />}
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
                flexBasis: "50%",
              }}
            >
              {/* DOB */}
              <Form.Item>
                <h3
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "15px",
                  }}
                >
                  Date of Birth:
                </h3>
                <DatePicker
                  size="large"
                  format={dateFormatList}
                  placeholder="Your Birthday"
                  className="RegisterItems"
                  style={{
                    color: "white",
                  }}
                  onChange={onChange}
                  inputReadOnly={true}
                  allowClear={true}
                />
              </Form.Item>

              {/* Gender */}
              <Form.Item>
                <h3
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "15px",
                  }}
                >
                  Gender:
                </h3>
                <Select
                  size="large"
                  onChange={(value) => {
                    setUserDetail({ ...userDetail, gender: value });
                  }}
                  className="RegisterItems"
                  style={{
                    background: "black",
                    backgroundColor: "black",
                    color: "black",
                  }}
                  placeholder="Select your gender"
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>
              </Form.Item>

              {/* Username */}
              <Form.Item
                onChange={(e) => {
                  setUserDetail({ ...userDetail, username: e.target.value });
                }}
              >
                <h3
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "15px",
                  }}
                >
                  Username:
                </h3>

                <Input
                  size="large"
                  placeholder="Enter Your Username"
                  style={{
                    color: "white",
                  }}
                  prefix={<UserOutlined style={{}} />}
                  className="RegisterItems"
                  allowClear="true"
                  required
                />
              </Form.Item>

              {/* Re-type Password  */}
              <Form.Item
                
              >
                <h3
                  style={{
                    color: "white",
                    textAlign: "left",
                    fontSize: "15px",
                  }}

                >
                  Re-type Password:
                </h3>

                <Input.Password
                  size="large"
                  placeholder="Re-type Password"
                  style={{
                    color: "white",
                  }}
                  iconRender={(visible) =>
                    visible ? (
                      <EyeTwoTone
                        style={{
                          color: "white",
                        }}
                      />
                    ) : (
                      <EyeInvisibleOutlined
                        style={{
                          color: "white",
                        }}
                      />
                    )
                  }
                  prefix={<LockOutlined />}
                  className="RegisterItems"
                  allowClear="true"
                  required
                />
              </Form.Item>
            </Col>
          </Row>

          <Checkbox
            onChange={Checked}
            style={{
              fontSize: "15px",
              width: "100%",
            }}
          >
            I agree to all the <span className="Agreement">Term</span>,
            <span className="Agreement"> Privacy Policy</span>, and
            <span className="Agreement"> Fees</span>
          </Checkbox>

          <Button
            type="primary"
            shape="round"
            size="large"
            htmlType="submit"
            className="btn-gradient"
            style={{
              width: "35rem",
              height: "3rem",
              marginTop: "0.3rem",
            }}
            onClick={handleSubmit}
          >
            Register
          </Button>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default Register;
