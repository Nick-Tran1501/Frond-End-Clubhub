/* eslint-disable react/jsx-no-duplicate-props */

import React from "react";
import "antd/dist/antd.css";

import "../../pages/loginpage/LoginPage.css";
import { Link } from "react-router-dom";

import { Button, Form, Input, Checkbox, Tooltip, Modal } from "antd";
import {
  InfoCircleOutlined,
  LockOutlined,
  MailOutlined 
} from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [user, setUser] = useState({
    email: "",
    password: "",
    forgetemail: "",
  });
  const onReset = () => {
     form.resetFields();
  };
  const handleSubmit = (e) => {
    checkEmailValid(user.email)
    checkPasswordValid(user.password)

    e.preventDefault();
    axios({
      method: "post",
      url: "https://rmit-club-dhyty.ondigitalocean.app/api/auth/signin",
      data: {
        email: user.email,
        password: user.password,
      },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/home");
      })
      .catch((err) => {
        
        onReset()
        // alert("Wrong Email or Password");
        console.error(err);
      });
  };

  const OnChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };


  // -----Login Validate-----
  const checkEmailValid = (input) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@rmit.edu.vn$/;
    const emptyInput = "";
    if (!emailRegex.test(input) && !emptyInput.match(input)) {
      document.querySelector(".EmailWarning").style.visibility = "visible";

    } else {
      document.querySelector(".EmailWarning").style.visibility = "hidden";

      setUser({ ...user, email: input });
    }
  };

  const checkPasswordValid = (input) => {
    const emptyInput = "";
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(input) && !emptyInput.match(input)) {
      document.querySelector(".PasswordWarning").style.visibility = "visible";
      
    } else {
      document.querySelector(".PasswordWarning").style.visibility = "hidden";
      setUser({ ...user, password: input });
    }
  };


  //Forget Password

  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  const checkForgetEmailValid = (input) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@rmit.edu.vn$/;
    const emptyInput = "";
    if (!emailRegex.test(input) && !emptyInput.match(input)) {
      document.querySelector(".ForgetWarning").style.visibility = "visible";

    } else {
      document.querySelector(".ForgetWarning").style.visibility = "hidden";

      setUser({ ...user, forgetmail: input });
    }
  };

  const forgetPassword = (e) => {
    checkForgetEmailValid(user.forgetemail)
    e.preventDefault();
    axios({
      method: "post",
      url: "https://rmit-club-dhyty.ondigitalocean.app/api/auth/password-reset",
      data: {
        email: user.forgetemail,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  }
  
  

  return (
    <React.Fragment>
      <div className="LoginCotainer">
        <div className="button-box">
          <div id="toggle" style={{ left: "0px", width: "100px" }}></div>
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

        <h1>Login</h1>

        <Form
        name="LoginForm"
          className="InputForm"
          style={{
            color: "white",
          }}
          form={form}
          onSubmitCapture={handleSubmit}
          
        >
          <Form.Item
            name="email"
            
          >
            <Input
              size="large"
              placeholder="Enter Your Email"
              allowClear="true"
              prefix={<MailOutlined/>}
              suffix={
                <Tooltip title="Input Your Email">
                  <InfoCircleOutlined
                    style={{
                      color: "white",
                    }}
                  />
                </Tooltip>
              }
              style={{
                color: "white",
              }}
              onChange={(e) => {
                // checkEmailValid(e.target.value);
                setUser({ ...user, email: e.target.value });
              }}
              id="EmailInput"
              className="LoginItems"
              // required
            />
            <p
              className="EmailWarning"
              style={{
                color: "red",
                fontSize: "12px",
                paddingTop: "3px",
                visibility: "hidden",
                height: "10px",
              }}
            >
              Warning: Incorrect Email
            </p>
          </Form.Item>

          <Form.Item
            name="password"
            
          >
            <Input.Password
              size="large"
              placeholder="Enter Your Password"
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
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
              id="PasswordInput"
              prefix={<LockOutlined />}
              className="LoginItems"
              allowClear="true"
              // required
              style={{
                color: "white",
              }}
            />
            <p
              className="PasswordWarning"
              style={{
                color: "red",
                fontSize: "12px",
                paddingTop: "3px",
                visibility: "hidden",
                height: "2px",
              }}
            >
              Warning: Incorrect Password
            </p>
          </Form.Item>

          <Form.Item
            style={{
              textAlign: "left",
            }}
          >
            <Checkbox
              style={{
                color: "white",
              }}
              onChange={OnChange}
            >
              Remember me
            </Checkbox>
          </Form.Item>

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
            Login
          </Button>
        </Form>

        <div>
          <Button
            type="text"
            shape="round"
            size={"large"}
            style={{
              textDecoration: "underline",
              color: "white",
            }}
            onClick={showModal}
          >
            <p
              style={{
                color: "white",
              }}
            >
              Forget Password
            </p>
          </Button>
          <Modal
        title="Forget Password"
        visible={visible}
        onOk={forgetPassword}
        onCancel={handleCancel}
        
        centered
        bodyStyle={{
          backgroundColor:"#5B778B",
        }}
      >
          <Input size="large" placeholder="Input Your Email" prefix={<MailOutlined 
            style={{
              color: "white",
              marginRight: "10px"
            }}
          />}
            onChange={(e) => setUser({...user, forgetemail: e.target.value})}
            style={{

              backgroundColor: "#44505F",
            }}
          />
           <p
              className="ForgetWarning"
              style={{
                color: "red",
                fontSize: "12px",
                paddingTop: "3px",
                visibility: "hidden",
                height: "10px",
              }}
            >
              Warning: Incorrect Email
            </p>
        
      </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
