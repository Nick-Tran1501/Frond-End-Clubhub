import React from "react";
import "./navbar.css";
import "antd/dist/antd.css";
import { Menu } from "antd";

function navbar() {
  return (
    <div className="navbar--container">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={new Array(3).fill(null).map((_, index) => 
          ({
            key: String(index + 1),
            label: `nav ${index + 1}`
          }))}
        style={{height: '7vh'}}
      />
    </div>
  );
}

export default navbar;
