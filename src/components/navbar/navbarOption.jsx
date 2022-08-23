import { Badge } from "antd";
import React from "react";
import "./navbarOption.css";
import {Avatar} from "antd";


const navbarOption = ({avatar, Icon, title}) => {
  return (
    <div className="navOption">
       
      {Icon && <Badge count={5}> <Icon className="navIcon" /> </Badge>}
      
      {avatar && (
        <Avatar size={50} className='navIcon' style={{width: '100',height:'100'}} src={avatar}/>
      )}
      
      <h3 className="navOption_title">{title}</h3>
    </div>
  );
};

export default navbarOption;
