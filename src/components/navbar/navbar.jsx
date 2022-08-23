import React, { useState } from "react";
import "./navbar.css";
import "antd/dist/antd.css";
import {
  HomeFilled,
  UserOutlined,
  FlagFilled,
  BellFilled,
} from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import userAvatar from "../../image/42527221_688413261531308_7133408386179137536_n.jpg";
import ClubLogo from "../../image/ClubHub_Trans.png";
import { Col, Row, AutoComplete, Input, Avatar } from "antd";
import Option from "./navbarOption";

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

const Navbar = () => {
  // Manange the Handling Search,

  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log("onSelect", value);
  };

  // Render the View
  return (
    <div className="navbar--container">
      <Row>
        <Col lg={24} className="navLeft">
          <img src={ClubLogo} alt="" />

          {/* Nav Search Bar */}
          <Row>
            <Col className="navSearch">
              <AutoComplete
                dropdownMatchSelectWidth={252}
                style={{}}
                options={options}
                onSelect={onSelect}
                onSearch={handleSearch}
              >
                <Input.Search
                  size="large"
                  placeholder="input here"
                  style={{}}
                />
              </AutoComplete>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Nav Right Icon */}
      <Row>
        <Col xs={0} md={0} lg={24}>
          <div className="navRight">
            <Option Icon={HomeFilled} title="Home" />
            <Option Icon={FlagFilled} title="My club" />
            <Option Icon={FlagFilled} title="My club" />
            <Option Icon={BellFilled} title="Nofication" />
            <Option avatar={userAvatar} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;
