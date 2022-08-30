import React from "react";
import "antd/dist/antd.min.css";

import { Button } from "antd";
import "./Clubs.css";

const Clubs = () => {
  return (
    <React.Fragment>
      <div className="ClubContainer">
        <button className="ButtonImage">
          <img
            src={require("../../image/Image1.jpg")}
            alt="logo"
            width="100%"
            height="55px"
            style={{
              borderRadius: "50%",
            }}
          />
        </button>

        <div className="clubInfo">
          <p
            style={{
              fontWeight: "bold",
              marginBottom:"0"
            }}
          >
            Football SGS Club
          </p>
          <p
            style={{
              fontWeight: "bold",
              opacity: "0.6",
            }}
          >
            Together Stronger
          </p>
        </div>
      </div>

      <Button className="JoinButton" shape="round" size="medium">
        <p
          style={{
            fontWeight: "bold",
          }}
        >
          Join Us
        </p>
      </Button>
      
      <hr></hr>
    </React.Fragment>
  );
};

export default Clubs;
