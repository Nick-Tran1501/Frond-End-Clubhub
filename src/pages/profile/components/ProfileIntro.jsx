import React, { useState, useEffect } from "react";
import "../ProfilePage";
import "antd/dist/antd.css";
import { Image} from "antd";

const ProfileIntro = () => {
    
  return (
    <div>
      <Image src={require("../../../image/BaseketballInductionDay.jpeg")}></Image>
      
    </div>
  );
};

export default ProfileIntro;
