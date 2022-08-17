import React from "react";
import "./sidebar.css";
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import {LaptopOutlined, UserOutlined, NotificationOutlined} from "@ant-design/icons";

function sidebar() {

  const item2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);
      return{
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return{
            key: subKey,
            label: `option ${subKey}`,
          };
        })
      };
    }
  );

  return (
    <div className="sideContainer">
      
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: '100%', borderRight: 0 }}
          items={item2}
        />
    </div>
  );
}

export default sidebar;
