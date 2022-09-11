import React, { useState } from "react";
import "antd/dist/antd.css";
import "../../pages/loginpage/LoginPage.css";
import {
  Button,
  Form,
  Input,
  DatePicker,
  Select,
  Checkbox,
  Modal,
  notification,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import { Link } from "react-router-dom";

import axios from "axios";
import { Col, Row } from "antd";
import PrivacyForm from "../termpolicys/PrivacyForm";
import TermForm from "../termpolicys/TermForm";

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

  // ------------Get Date value Function----------

  const onChange = (date, dateString) => {
    setUserDetail({ ...userDetail, dob: dateString });
  };
  // --------Validate Functions----------

  // ----------------Validate Fullname------
  const checkNamelValid = (input) => {
    const fullNameRegex = /^[A-Z][a-zA-Z]{1,}(?:[A-Z][a-zA-Z]*){0,5}$/;
    const emptyInput = "";
    if (!fullNameRegex.test(input) && emptyInput.match(input)) {
      document.querySelector(".FullNameWarning").style.visibility = "visible";
    } else {
      document.querySelector(".FullNameWarning").style.visibility = "hidden";
    }
  };

  // ------------ Validate Email Function----------
  const checkEmailValid = (input) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@rmit.edu.vn$/;
    const emptyInput = "";
    if (!emailRegex.test(input) || emptyInput.match(input)) {
      document.querySelector(".EmailWarning").style.visibility = "visible";
    } else {
      document.querySelector(".EmailWarning").style.visibility = "hidden";
    }
  };

  //-------- Validate Phone Function----------
  const checkPhoneValid = (input) => {
    const emailRegex = /^[0-9]{9,10}$/;
    const emptyInput = "";
    if (!emailRegex.test(input) || emptyInput.match(input)) {
      document.querySelector(".PhoneWarning").style.visibility = "visible";
    } else {
      document.querySelector(".PhoneWarning").style.visibility = "hidden";
    }
  };

  // -------- Validate Password Function----------
  const checkPasswordValid = (input) => {
    const emptyInput = "";
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(input) || emptyInput.match(input)) {
      document.querySelector(".PasswordWarning").style.visibility = "visible";
    } else {
      document.querySelector(".PasswordWarning").style.visibility = "hidden";
    }
  };
  // -------- Validate Re-Type Password Function----------

  const checkPasswordRetypeValid = () => {
    const emptyInput = "";
    if (
      userDetail.retype === userDetail.password &&
      !emptyInput.match(userDetail.retype)
    ) {
      document.querySelector(".RetypePasswordWarning").style.visibility =
        "hidden";
    } else {
      document.querySelector(".RetypePasswordWarning").style.visibility =
        "visible";
    }
  };

  // -------- Validate Username Function----------
  const checkUsernamelValid = (input) => {
    const UsernameRegex = /^[a-zA-Z0-9._%+-]{1,}(?:[A-Z][a-zA-Z]*)$/;
    const emptyInput = "";
    if (!UsernameRegex.test(input) || emptyInput.match(input)) {
      document.querySelector(".UsernameWarning").style.visibility = "visible";
    } else {
      document.querySelector(".UsernameWarning").style.visibility = "hidden";
      setUserDetail({ ...userDetail, username: input });
    }
  };

  // -------- Validate DOB Function----------
  const checkDobValid = () => {
    const emptyInput = "";
    if (emptyInput.match(userDetail.dob)) {
      document.querySelector(".DateWarning").style.visibility = "visible";
    } else {
      document.querySelector(".DateWarning").style.visibility = "hidden";
    }
  };
  //----------Validate Gender Function----------
  const checkGenderlValid = (input) => {
    const emptyInput = "";

    if (emptyInput.match(input)) {
      document.querySelector(".GenderWarning").style.visibility = "visible";
    } else {
      document.querySelector(".GenderWarning").style.visibility = "hidden";

      setUserDetail({ ...userDetail, gender: input });
    }
  };
  const openNotificationWithIcon = (type,errorMessage) => {
    notification[type]({
      message: "Error",
      description: errorMessage,
    }); 
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // -----Left Column Input -----
    checkNamelValid(userDetail.name);
    checkEmailValid(userDetail.email);
    checkPhoneValid(userDetail.phone);
    checkPasswordValid(userDetail.password);
    checkPasswordRetypeValid();
    // -----Right Column Input -----
    checkGenderlValid(userDetail.gender);
    checkUsernamelValid(userDetail.username);
    checkDobValid();
    //

    axios({
      method: "POST",
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
       openNotificationWithIcon('error',err.response.data.message)
        console.error(err);
        
      });
  };
 
  //Handle to pop up the Modal
  const [modal2Visible, setModal2Visible] = useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);
  return (
    <React.Fragment>
      <div className="RegisterCotainer">
        <div className="button-box">
          {/* <div id="toggle" style={{ left: "100px", width: "90px" }}></div> */}

          <div id="toggle" style={{ left: "100px", width: "50%" }}></div>
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
                rules={[{ required: true }]}
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
                  setUserDetail({ ...userDetail, email: e.target.value });
                }}
                rules={[{ required: true }]}
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
                  required
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
                  required
                />
                <p
                  className="DateWarning"
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
                    width: "100%",
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
                onChange={(e) => {
                  setUserDetail({ ...userDetail, retype: e.target.value });
                }}
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
                  Error: Password Not Match
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
            required
          >
            I agree to all the &nbsp;
            <span className="Agreement" onClick={() => setModal2Visible(true)}>
              Privacy Policy
            </span>
            <Modal
              title="Privacy Policy"
              centered
              visible={modal2Visible}
              onOk={() => setModal2Visible(false)}
              onCancel={() => setModal2Visible(false)}
              width={1000}
            >
              <PrivacyForm />
            </Modal>
            , and &nbsp;
            <span className="Agreement" onClick={() => setModal1Visible(true)}>
              Term Condition
            </span>
            <Modal
              title="Term & Condition"
              centered
              visible={modal1Visible}
              onOk={() => setModal1Visible(false)}
              onCancel={() => setModal1Visible(false)}
              width={1000}
            >
              e\
              <TermForm />
            </Modal>
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
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Register
          </Button>
        </Form>
      </div>
    </React.Fragment>
  );
};

export default Register;
