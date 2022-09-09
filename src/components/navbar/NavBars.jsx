/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState,useEffect } from "react";
import "./NavBar.scss";
import "antd/dist/antd.css";
import {
  MenuOutlined,
  DownOutlined,
  BellOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Rightbars from "../rightbar/RightBars";
import {
  Col,
  Row,
  AutoComplete,
  Input,
  Dropdown,
  Menu,
  Button,
  Drawer,
  Search,
} from "antd";
import Sidebar from "../sidebar/Sidebars";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { click } from "@testing-library/user-event/dist/click";
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


  const [showRight, setShowRight] = useState(false)


  const showRightBar = () => {
    setShowRight(true)
  }

  const closeRightBar = () => {
    setShowRight(false)
  }

  const { Search } = Input;
  const token = localStorage.getItem("token")

 const [searchValue,setSearchValue] = useState("")
  // const [searchDisplay, setSearchDisplay] = useState({
  //   clubs:[],
  //   posts:[],
  //   profiles: [],
  // }) 

  // axios({
  //   method:"post",
  //   url: "https://rmit-club-dhyty.ondigitalocean.app/api/search",
  //   headers:{
  //     "Authorization": `Bearer ${token}` },
  //     data:{
  //       value: searchValue
  //     }
  // })
  // .then((response)=> {
  //   setSearchDisplay(
  //     {...searchDisplay,
  //       clubs: response.data.clubs,
  //       posts: response.data.posts,
  //       profile: response.data.profile
  //     }
  //   )
  // })
  // .catch((err) => {
  //   console.log(err);
  // })
  
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://rmit-club-dhyty.ondigitalocean.app/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserProfile(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  
  
const navigate = useNavigate()
  
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
                cursor:"pointer"
              }}
              onClick={()=>{navigate("/home")}}
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
              color:"black"
            }}
            size="medium"
            onChange={(e) => {
              setSearchValue(e.target.value)
            }}
            allowClear
          />
        
      </Col>

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
                cursor:"pointer"
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
            <Button
              style={{
                all: "unset",
                textAlign: "center",
                cursor:"pointer"
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
          </Col>

          <Col xs={8} sm={8} md={8} lg={0} xl={0} className="EventMenu">
            <Button
              style={{
                all: "unset",
                textAlign: "center",
              }}
              onClick= {
                () => {showRightBar()}
              }
            >
              <NotificationOutlined
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor:"pointer"
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
          paddingTop:"1.5rem",
          backgroundColor:" #F9F2ED"
        }}
      >
        <Rightbars/>
      </Drawer>
    </Row>
  );
};

export default NavBar;
