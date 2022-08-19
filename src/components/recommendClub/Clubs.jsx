import React from "react";
import "antd/dist/antd.min.css";

import { Button } from "antd";
import {ArrowRightOutlined} from "@ant-design/icons"; 
import "./Clubs.css"

const Clubs = () => {
  return(

    <React.Fragment>
      <div className="ClubContainer">
        <button
          className="ButtonImage"
        >

          <img src={require("../../image/Image1.jpg")} alt="logo" width="50px" height="50px" 
            style={{
              borderRadius:"50%"
            }}
          />
        </button>

        <div className="clubInfo">
          <p
            style={{
              fontWeight:"bold"
            }}
          >Football</p>
          <p
            style={{
              fontWeight:"bold",
              opacity:"0.6"
            }}
          >Together Stronger</p>
          
        </div>
      </div>
      <div className="JoinButton"
        style={{
          textAlign:"center"
        }}
      >
        <Button type="primary" shape="round"  size="medium" >
          Join us <ArrowRightOutlined style={{
            color:"white",
            fontSize:"12px"
            }}/>
        </Button>
      </div>
        <hr></hr>
    </React.Fragment>
  )
}

export default Clubs;