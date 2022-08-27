import { Badge } from "antd";
import React from "react";
import "./NavbarOption.css";
import {Avatar} from "antd";


const navbarOption = ({avatar, Icon, title}) => {
  return (
    <div className="navOption">
       
      {Icon && <Badge count={5}> <Icon className="navIcon" /> </Badge>}
      
      {avatar && (
        <Avatar className='navIcon' src={avatar}/>
      )}
      
      <h3 className="navOption_title">{title}</h3>
    </div>
  );
};

export default navbarOption;
