import React, { useState } from "react";
import "antd/dist/antd.css";
import "../../pages/loginpage/LoginPage.css";
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
    retype: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://rmit-club-dhyty.ondigitalocean.app/api/auth/signup",
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
  // --------Validate Functions----------

  // ----------------Validate Fullname------
  const checkNamelValid = (input) => {
    const fullNameRegex = /^[A-Z][a-zA-Z]{1,}(?: [A-Z][a-zA-Z]*){0,5}$/;
    const emptyInput = "";
    if (!fullNameRegex.test(input) && !emptyInput.match(input)) {
      document.querySelector(".FullNameWarning").style.visibility = "visible";
    } else {
      document.querySelector(".FullNameWarning").style.visibility = "hidden";

      setUserDetail({ ...userDetail, name: input });
    }
  };

  // ------------ Validate Email Function----------
  const checkEmailValid = (input) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@rmit.edu.vn$/;
    const emptyInput = "";
    if (!emailRegex.test(input) && !emptyInput.match(input)) {
      document.querySelector(".EmailWarning").style.visibility = "visible";
    } else {
      document.querySelector(".EmailWarning").style.visibility = "hidden";

      setUserDetail({ ...userDetail, email: input });
    }
  };

  // -------- Validate Password Function----------
  const checkPasswordValid = (input) => {
    const emptyInput = "";
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(input) && !emptyInput.match(input)) {
      document.querySelector(".PasswordWarning").style.visibility = "visible";
    } else {
      document.querySelector(".PasswordWarning").style.visibility = "hidden";
      setUserDetail({ ...userDetail, password: input });
    }
  };
  // -------- Validate Re-Type Password Function----------

  // const checkPasswordRetypeValid = () => {
  //   if (userDetail.retype === userDetail.password) {
  //     document.querySelector(".RetypePasswordWarning").style.visibility =
  //       "hidden";
  //   } else {
  //     document.querySelector(".RetypePasswordWarning").style.visibility =
  //       "visible";
  //   }
  // };

  //-------- Validate Phone Function----------
  const checkPhoneValid = (input) => {
    const emailRegex = /^[0-9]{8,10}$/;
    const emptyInput = "";
    if (!emailRegex.test(input) && !emptyInput.match(input)) {
      document.querySelector(".PhoneWarning").style.visibility = "visible";
    } else {
      document.querySelector(".PhoneWarning").style.visibility = "hidden";

      setUserDetail({ ...userDetail, phone: input });
    }
  };

  // -------- Validate DOB Function----------

  // -------- Validate Username Function----------
  const checkUsernamelValid = (input) => {
    const UsernameRegex = /^[a-zA-Z0-9._%+-]{1,}(?: [A-Z][a-zA-Z]*)$/;
    const emptyInput = "";
    if (!UsernameRegex.test(input) && !emptyInput.match(input)) {
      document.querySelector(".UsernameWarning").style.visibility = "visible";
    } else {
      document.querySelector(".UsernameWarning").style.visibility = "hidden";
      setUserDetail({ ...userDetail, username: input });
    }
  };

  //----------Validate Gender Function----------
  const checkGenderlValid = (input) => {
    const emptyInput = "";

    if (!emptyInput.match(input)) {
      document.querySelector(".GenderWarning").style.visibility = "visible";
    } else {
      document.querySelector(".GenderWarning").style.visibility = "hidden";

      setUserDetail({ ...userDetail, gender: input });
    }
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
                  checkNamelValid(e.target.value);
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
                <p
                  className="FullNameWarning"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingTop: "2px",
                    visibility: "hidden",
                    height: "1px",
                  }}
                >
                  Hint: Word Only, Space between words
                </p>
              </Form.Item>

              {/* Email*/}
              <Form.Item
                onChange={(e) => {
                  checkEmailValid(e.target.value);
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

                <p
                  className="EmailWarning"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingTop: "2px",
                    visibility: "hidden",
                    height: "1px",
                  }}
                >
                  Example: s1234567@rmit.edu.vn
                </p>
              </Form.Item>

              {/* Phone */}
              <Form.Item
                onChange={(e) => {
                  checkPhoneValid(e.target.value);
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
                  maxLength="10"
                  className="RegisterItems"
                  allowClear="true"
                  required
                />
                <p
                  className="PhoneWarning"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingTop: "2px",
                    visibility: "hidden",
                    height: "1px",
                  }}
                >
                  Hint: Number Only, maxinum 10 numbers
                </p>
              </Form.Item>

              {/* Password */}
              <Form.Item
                onChange={(e) => {
                  checkPasswordValid(e.target.value);
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
                <p
                  className="PasswordWarning"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingTop: "2px",
                    visibility: "hidden",
                    height: "1px",
                  }}
                >
                  At least 8 characters include 1 capitalized, 1 special
                  character, and 1 number
                </p>
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
                  placeholder="Your Date Of Birth"
                  className="RegisterItems"
                  style={{
                    color: "white",
                  }}
                  onChange={onChange}
                  inputReadOnly={true}
                  allowClear={true}
                />
                <p
                  className="PasswordWarning"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingTop: "2px",
                    visibility: "hidden",
                    height: "1px",
                  }}
                >
                  Please Choose your birthday
                </p>
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
                    checkGenderlValid(value);
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
                <p
                  className="GenderWarning"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingTop: "2px",
                    visibility: "hidden",
                    height: "1px",
                  }}
                >
                  Please Select Your Gender
                </p>
              </Form.Item>

              {/* Username */}
              <Form.Item
                onChange={(e) => {
                  checkUsernamelValid(e.target.value);
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
                <p
                  className="UsernameWarning"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingTop: "2px",
                    visibility: "hidden",
                    height: "1px",
                  }}
                >
                  Input username
                </p>
              </Form.Item>

              {/* Re-type Password  */}
              <Form.Item
              // onChange={(e) => {
              //   setUserDetail({ ...userDetail, retype: e.target.value });
              //   if(e.target.value === userDetail.password){
              //     document.querySelector(".RetypePasswordWarning").style.visibility = "visible";
              //   }
              //   else{
              //     document.querySelector(".RetypePasswordWarning").style.visibility = "hidden";
              //   }
              // }}
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
                <p
                  className="RetypePasswordWarning"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingTop: "2px",
                    visibility: "hidden",
                    height: "1px",
                  }}
                >
                  {/* Error: Password Not Match */}
                </p>
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
