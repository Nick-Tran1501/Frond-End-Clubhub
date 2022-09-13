/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./NavBar.scss";
import "antd/dist/antd.css";
import {
  MenuOutlined,
  DownOutlined,
  BellOutlined,
  NotificationOutlined,
  LockFilled,
} from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Rightbars from "../rightbar/RightBars";
import {
  Col,
  Row,
  Input,
  Dropdown,
  Menu,
  Button,
  Drawer,
  Avatar,
  notification as Notif,
} from "antd";
import Sidebar from "../sidebar/Sidebars";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NotiCard from "./NotiCard";
// Test function of autocomplete

// Render the Navigation Bar
const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const showSideBar = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [showRight, setShowRight] = useState(false);

  const showRightBar = () => {
    setShowRight(true);
  };

  const closeRightBar = () => {
    setShowRight(false);
  };
  const { Search } = Input;
  const token = localStorage.getItem("token");

  const [searchValue, setSearchValue] = useState();


  const [userProfile, setUserProfile] = useState({});


  useEffect(() => {
    axios
      .get("https://rmit-club-dhyty.ondigitalocean.app/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserProfile(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const navigate = useNavigate();

  // -----------Notification--------------
  const [notification, setNotification] = useState([])

  useEffect(() => {
    axios({
      method: "get",
      headers: {
        "Authorization": `Bearer ${token}`
      },

      url: "https://rmit-club-dhyty.ondigitalocean.app/api/notify"
    })
      .then((response) => {
        setNotification(response.data)

      })
      .catch((err) => { console.log(err) })
  }, [])

  const menu = (
    <Menu
      selectable
      items={notification.length === 0 ? [{ label: "Currently have no notifications", key: "no-notify12", disabled: true }] : notification.map((noti) => {
        return ({
          label:
            <div className="NotiContainer" style={{
              borderBottom: "1px solid"
            }}>{noti.message}
              <br></br>
              <span style={{ opacity: "0.5", fontSize: "10px" }}>{noti.createAt}</span>

            </div>,


          icon:
            <Avatar
              size="large"
              src={noti?.club?.logoUrl}
            />,

          key: noti._id,
        })
      })}
    />
  );


  // function search

  const [searchResult, setSearchResult] = useState([])

  const onSearch = (e) => {
    console.log(e);
    if (!e) {
      Notif['error']({
        message: 'Error',
        description:
          'Search value can\'t be empty',
      });
    } else {
      axios({
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/search",
        data: {
          value: searchValue
        }
      })
        .then((response) => {
          console.log(response.data)
          // setSearchResult(response.data);
          navigate("/results", { state: response.data })

        })
        .catch((err) => { console.log(err) })



    }

  }


  return (
    <Row
      className="navbar--container"
      gutter={{
        xs: "1",
        sm: "1",
        md: "1",
        lg: "0",
        xl: "0",
      }}
    >
      <Col xs={5} sm={5} md={5} lg={5} xl={5} className="NavBarLogoContainer">
        <Row className="NavBarLogo">
          <Col xs={10} sm={10} md={10} lg={0} xl={0}>
            <Button onClick={showSideBar}>
              <MenuOutlined
                style={{
                  color: "black",
                  fontSize: "1.4rem",
                }}
              />
            </Button>
          </Col>

          <Col xs={14} sm={14} md={14} lg={24} xl={24}>
            <Button
              style={{
                all: "unset",
                width: "100%",
                height: "100%",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/home");
              }}
            >
              <img
                src={require("../../image/ClubHub_Trans.png")}
                alt="Logo"
                width="100px"
                height="100%"
                style={{
                  objectFit: "cover",
                }}
              ></img>
            </Button>
          </Col>
        </Row>
      </Col>

      {/* **************************** */}
      <Col
        xs={10}
        sm={10}
        md={10}
        lg={10}
        xl={10}
        className="NavBarSearchContainer"
      >
        <Search
          placeholder="Search For Your Club"
          style={{
            color: "black",
          }}
          size="medium"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onSearch={(e) => onSearch(e)}
          allowClear
        />
      </Col>
      {/* **************************** */}
      <Col
        xs={5}
        sm={5}
        md={5}
        lg={5}
        xl={5}
        className="NavBarSettingContainer"
      >
        <Row
          className="SettingMenu"
          gutter={{
            xs: "5",
            sm: "5",
            md: "5",
            lg: "5",
            xl: "5",
          }}
        >
          <Col xs={8} sm={8} md={8} lg={12} xl={12} className="SettingItems">
            <Button
              style={{
                all: "unset",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <DownOutlined
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              />
              <p
                style={{
                  margin: "0",
                }}
                className="SettingText"
              >
                My Clubs
              </p>
            </Button>
          </Col>

          <Col xs={8} sm={8} md={8} lg={12} xl={12} className="SettingItems">
            <Dropdown
              overlay={menu}
              trigger="click"
              placement="bottomRight"
              arrow
            >
              <Button
                style={{
                  all: "unset",
                  textAlign: "center",
                  cursor: "pointer",
                }}
              >
                <BellOutlined
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                />
                <p
                  style={{
                    margin: "0",
                  }}
                  className="SettingText"
                >
                  Notification
                </p>
              </Button>
            </Dropdown>
          </Col>

          <Col xs={8} sm={8} md={8} lg={0} xl={0} className="EventMenu">
            <Button
              style={{
                all: "unset",
                textAlign: "center",
              }}
              onClick={() => {
                showRightBar();
              }}
            >
              <NotificationOutlined
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              />
              <p
                style={{
                  margin: "0",
                }}
                className="SettingText"
              >
                Event
              </p>
            </Button>
          </Col>
        </Row>
      </Col>

      {/* Side Bar */}
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        key="left"
      >
        <Sidebar />
      </Drawer>

      {/* Right Bar */}
      <Drawer
        placement="right"
        closable={false}
        onClose={closeRightBar}
        visible={showRight}
        key="right"
        drawerStyle={{
          paddingTop: "1.5rem",
          backgroundColor: " #F9F2ED",
        }}
      >
        <Rightbars />
      </Drawer>
    </Row>
  );
};

export default NavBar;
