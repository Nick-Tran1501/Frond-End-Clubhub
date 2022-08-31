import { Badge } from "antd";
import React from "react";
import "./NavbarOptions.css";
import {Avatar} from "antd";


const NavbarOption = ({avatar, Icon, title}) => {
  return (
    <div className="navOption">
       
      {Icon && <Badge count={5}> <Icon className="navIcon" /> </Badge>}
      
      <h3 className="navOption_title">{title}</h3>
    </div>
  );
};

export default NavbarOption;
