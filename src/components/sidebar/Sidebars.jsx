/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import "./SideBars.css";
import "antd/dist/antd.css";
import { Avatar, Menu, Col, Row, Button, Modal, Select, Input } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  ExportOutlined,
  EditOutlined,
} from "@ant-design/icons";
import SignOut from "./SignOut";
import axios from "axios";

import { useNavigate } from "react-router-dom"

import { editUser } from "./SidebarAPI";


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

  const navigate = useNavigate()

  //  ------- fix ---------
  const { Option } = Select;

  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  // ---------------------------------------------------------------

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

  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://rmit-club-dhyty.ondigitalocean.app/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        setUserProfile(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const items = [
    getItem("Profile", "sub1", <MailOutlined />, [
      getItem(`${userProfile?.name}`, "1"),
      getItem(`${userProfile?.phone}`, "2"),
      getItem(`${userProfile?.dob}`, "3"),
      getItem(`${userProfile?.gender}`, "4"),
    ]),
    getItem("Manage", "sub2", <AppstoreOutlined />, [getItem(
      <Button
        style={{
          all: "unset",
        }}
        onClick={() => { navigate("/president") }}
      >My Club</Button>
      , "5")]),
    getItem("Setting", "sub3", <SettingOutlined />, [
      getItem(
        <Button
          style={{
            all: "unset",
          }}
          onClick={() => {
            // console.log(userProfile);
            onEditStudent(userProfile);
          }}
        >
          Edit Profile
        </Button>,
        "editBtn",
        <EditOutlined />
      ),
      getItem(<SignOut />, "7", <ExportOutlined />),
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
          <Avatar
            size={60}
            src={userProfile?.avatarUrl}
            className="sideAvatar"
          />
          <h2>{userProfile?.username}</h2>
          <h4>{userProfile?.email}</h4>
        </Col>
      </Row>

      <Menu
        className="sideStats"
        onClick={onClick}
        style={{ boxShadow: "1px 2px 5px #888888" }}
        defaultSelectedKeys={[""]}
        defaultOpenKeys={[""]}
        mode="inline"
        items={items}
      />
      {/* fix part */}

      <Modal
        title="Edit Personal Information"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          // console.log(editingStudent);
          const username = editingStudent.username;
          const name = editingStudent.name;
          const dob = editingStudent.dob;
          const phone = editingStudent.phone;
          const gender = editingStudent.gender;

          // console.log(username, name, dob, phone, gender);
          editUser(username, name, dob, phone, gender)
            .then((status) => {
              console.log(status);
            })
          setUserProfile(editingStudent);
          resetEditing();
        }}
      >
        <Input
          value={editingStudent?.username}
          addonBefore="Edit User name"
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, username: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.name}
          addonBefore="Edit Name"
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.dob}
          addonBefore="Edit Birthday"
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, dob: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.gender}
          addonBefore="Edit Gender"
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, gender: e.target.value };
            });
          }}
        />
      </Modal>

      {/* __________ */}

      <div className="sideBottom">
        <p> Recent </p>
        {recentItem("RMITFOOTBALLCLUB")}
        {recentItem("IONLIFE")}
        {recentItem("RmitConnect")}
        {recentItem("RmitConnect")}
      </div>

      <div className="sideAdvertise">
        <h2> Want to explore more? </h2>
        <a href="https://www.rmit.edu.vn/vi" target="_blank" rel="noreferrer">
          Click Here
        </a>
      </div>

      <div className="sideFooter">
        <p> Copyright ©2022 RMIT CLUB HUB. All Right Reserved </p>
      </div>
    </div>
  );
};

export default sidebar;
