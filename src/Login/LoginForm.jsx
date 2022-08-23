/* eslint-disable react/jsx-no-duplicate-props */

import React from "react";
import "antd/dist/antd.css";

import "../css/Login.css";
import { Route, Routes, Link } from "react-router-dom";

import { Button, Form, Input, Checkbox, Tooltip } from "antd";
import {
  UserOutlined,
  InfoCircleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

import { useState, useEffect } from "react";
import axios from "axios";

const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get("https://reqres.in/api/login");
  //     return response;
  //   };
  //   getData()
  //     .then((response) => {
  //       console.log(response.data.data[0].name);
  //       console.log(response.data.data[0].year);
  //       return response;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token') 
    axios.post("https://rmit-club.herokuapp.com/api/auth/signin",{
      
      // headers:{'Authorization': `Bearer ${token}`},
      email: user.username,
      password: user.password
    })
    .then(response =>
      console.log(response)
      
      
      )  
    .catch((err) => {
      console.error(err);
    });
  }

  const OnChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
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
              placeholder="Enter Your Username"
              allowClear="true"
              prefix={<UserOutlined />}
              suffix={
                <Tooltip title="Username is your personal username that you have registered">
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
              onChange={(e) =>{
                setUser({...user, username: e.target.value})
              }}
            
              className="LoginItems"
              required
            />
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
              onChange={(e) =>{
                setUser({...user, password: e.target.value})
              }}
              prefix={<LockOutlined />}
              className="LoginItems"
              allowClear="true"
              required
              style={{
                color: "white",
              }}
            />
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
