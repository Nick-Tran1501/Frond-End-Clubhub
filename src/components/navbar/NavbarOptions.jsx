import { Badge } from "antd";
import React from "react";
import "./NavbarOptions.css";
import {Avatar} from "antd";


const NavbarOption = ({Icon, title}) => {
  return (
    <div className="navOption">
      <Badge count={1}>
      {Icon && <Icon className="navIcon" />}
      </Badge>
      <h3 className="navOption_title">{title}</h3>
    </div>
  );
};

export default NavbarOption;
