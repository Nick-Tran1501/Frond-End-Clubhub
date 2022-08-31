import React from "react";
import "antd/dist/antd.min.css";

import { Button } from "antd";
import "./Clubs.css";

const Clubs = ({name,slogan, logoUrl}) => {


  return (
    <React.Fragment>
      <div className="ClubContainer">
        <button className="ButtonImage">
          <img
            src={logoUrl}
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
            {name}
          </p>
          <p
            style={{
              fontWeight: "bold",
              opacity: "0.6",
            }}
          >
            {slogan}
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
