/* eslint-disable react/jsx-no-duplicate-props */

import React from "react";
import "antd/dist/antd.css";

import "../../pages/loginpage/LoginPage.css";
import { Link } from "react-router-dom";

import { Button, Form, Input, Checkbox, Tooltip } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
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
        alert("Wrong Email or Password");
        console.error(err);
      });
  };

  const OnChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

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
          className="InputForm"
          style={{
            color: "white",
          }}
          onSubmitCapture={handleSubmit}
        >
          <div></div>
          <Form.Item>
            <Input
              size="large"
              placeholder="Enter Your Email"
              allowClear="true"
              prefix={<UserOutlined />}
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
                checkEmailValid(e.target.value);
              }}
              id="EmailInput"
              className="LoginItems"
              required
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

          <Form.Item>
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
                checkPasswordValid(e.target.value);
              }}
              id="PasswordInput"
              prefix={<LockOutlined />}
              className="LoginItems"
              allowClear="true"
              required
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
          >
            <p
              style={{
                color: "white",
              }}
            >
              Forget Password
            </p>
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
