import React from "react";
import "./navbar.css";
import "antd/dist/antd.css";
import {
  SearchOutlined,
  UserOutlined,
  WechatFilled,
  BellFilled,
} from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import userAvatar from "../../image/42527221_688413261531308_7133408386179137536_n.jpg";
import {Col, Row,} from "antd";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavbarBrand } from "react-bootstrap";

const navbar = () => {
  return (
    <div className="navbar--container">
      <div className="topbarLeft">
        <span className="logo">CLUB HUB</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchOutlined className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>

      <Row className="topbarRight">
        <Col xs={0} sm={0} md={0} lg={6} xl={6} className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </Col>
      
        <Col xs={0} sm={0} md={0} lg={0} xl={6} className="topbarIcons">
          <div className="topbarIconItem">
            <UserOutlined />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <WechatFilled />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <BellFilled />
            <span className="topbarIconBadge">1</span>
          </div>
        </Col>
        <Col>
        <img src={userAvatar} alt="" className="topbarImg" />
        </Col>
      </Row>
    </div>
  );
};

export default navbar;
