/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect,useState} from "react";
import "./SideBars.css";
import "antd/dist/antd.css";
import { Avatar, Menu, Col, Row } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import SignOut from "./SignOut";
import axios from "axios"

// Dropdown Menu
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}




const sidebar = () => {
  // Display all the recent hashtags in posts
  const recentItem = (topic) => (
    <div className="sideRecentItem">
      <span className="sideTag">#</span>
      <p>{topic}</p>
    </div>
  );

  const onClick = (e) => {
    console.log("click ", e);
  };


  const [userProfile,setUserProfile]=useState({})

  useEffect(()=> {
    
      const token = localStorage.getItem('token')
      axios.get("https://rmit-club-dhyty.ondigitalocean.app/api/user/profile",
        {
          headers:{'Authorization': `Bearer ${token}`}
        }
      )
      .then(response =>
        {console.log(response.data)
        setUserProfile(response.data)})
      .catch(err => console.log(err))
  
  },[])

  const items = [
    getItem("Profile", "sub1", <MailOutlined />, [
      getItem(`${userProfile.phone}`, "1"),
      getItem(`${userProfile.dob}`, "2"),
      getItem(`${userProfile.gender}`, "3"),
    ]),
    getItem("News", "sub2", <AppstoreOutlined />, [
      getItem("Option 4", "4"),
      getItem("Option 5", "6"),
    ]),
    getItem("Setting", "sub3", <SettingOutlined />, [
      getItem(<SignOut/>, "9", <ExportOutlined />),
    ]),
  ];
  return (
    <div className="sideContainer">

      
        {/* <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: '100%', borderRight: 0 }}
          items={items}

          // items={item2}
        /> */}


      <Row>
      <Col xs={24} lg={24} className="sideTop">
        <img src={userProfile.avatarUrl} alt="backgorundImage" />
        <Avatar size={60} src={userProfile.avatarUrl} className="sideAvatar" />
        <h2>{userProfile.username}</h2>
        <h4>{userProfile.email}</h4>
      </Col>
      </Row>

      <Menu
        className="sideStats"
        onClick={onClick}
        style={{boxShadow: "1px 2px 5px #888888"}}
        defaultSelectedKeys={[""]}
        defaultOpenKeys={[""]}
        mode="inline"
        items={items}
      />

      <div className="sideBottom">
        <p> Recent </p>
        {recentItem('RMITFOOTBALLCLUB')}
        {recentItem('IONLIFE')}
        {recentItem('RmitConnect')}
        {recentItem('RmitConnect')}
      </div>

      <div className="sideAdvertise">
        <h2> Want to explore more? </h2>
        <a href="https://www.rmit.edu.vn/vi" target="_blank" rel="noreferrer"> Click Here </a>
      </div>

      <div className="sideFooter">
        <p> Copyright ©2022 RMIT CLUB HUB. All Right Reserved </p>
      </div>

    </div>
  );
};

export default sidebar;
