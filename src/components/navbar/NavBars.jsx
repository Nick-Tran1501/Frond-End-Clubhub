import React, { useState } from "react";
import "./NavBars.css";
import "antd/dist/antd.css";
import {
  HomeFilled,
  UserOutlined,
  FlagFilled,
  BellFilled,
} from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import ClubLogo from "../../image/ClubHub_Trans.png";
import { Col, Row, AutoComplete, Input, Avatar, Popover } from "antd";
import Option from "./NavbarOptions";
import { useEffect } from "react";
import axios from "axios";
import { click } from "@testing-library/user-event/dist/click";

// Test function of autocomplete

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

// Render the Navigation Bar
const NavBar = () => {
  // Manange the Handling Search,
  const [userProfile, setUserProfile] = useState({});

  // useEffect(()=> {

  //     const token = localStorage.getItem('token')
  //     axios.get("https://rmit-club.herokuapp.com/api/user",
  //       {
  //         headers:{'Authorization': `Bearer ${token}`}
  //       }
  //     )
  //     .then(response => setUserProfile(response.data))
  //     .catch(err => console.log(err))

  // },[])

  const [options, setOptions] = useState([]);

  //handle Searching function
  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log("onSelect", value);
  };

  // Handle the username, signout in avatar (will put into another component)
  const text = <span>Username</span>;
  const content = (
    <div>
      <p>Sign Out</p>
    </div>
  );
  // Render the View
  return (
    <div className="navbar--container">
      <div className="nContainer">
        <Row>
          <Col lg={24} className="navLeft">
            <img src={ClubLogo} alt="" />
          </Col>
        </Row>

        {/* Nav Search Bar */}
        <Row className="searchBar">
          <Col span={24} className="navSearch">
            <AutoComplete
              dropdownMatchSelectWidth={252}
              style={{}}
              options={options}
              onSelect={onSelect}
              onSearch={handleSearch}
              className="searchInput"
            >
              <Input.Search size="large" placeholder="Search" />
            </AutoComplete>
          </Col>
        </Row>

        {/* Nav Right Icon */}
        <div className="navRight d-flex ">
          <Row>
            <Col xs={0} md={0} lg={24}>
              <div className="navOptions d-flex">
                <Option Icon={HomeFilled} title="Home" />
                <Option Icon={FlagFilled} title="My club" />
                <Option Icon={BellFilled} title="Nofication" />
              </div>
            </Col>
          </Row>
          <div className="navAvatar">
            <Popover
              placement="bottomRight"
              title={text}
              content={content}
              trigger='click'
            >
              <Avatar
                className="userImg"
                size="large"
                icon={<UserOutlined />}
              />
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
