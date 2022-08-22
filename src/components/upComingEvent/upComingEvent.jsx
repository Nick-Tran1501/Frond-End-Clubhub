import "./upComingEvent.css";
import React from "react";
import "antd/dist/antd.min.css";
import { Image } from "antd";

const UpcomingEvent = () => {
  return (
    <React.Fragment>
      <div className="upComingContainer">
        <div className="EventImage">
          <Image
            width="100%"
            src={require("../../image/Image1.jpg")}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div className="EventInfo">
          <h5
          style={{
            fontSize:"15px",
            fontWeight:"bold",
            opacity:"0.6"
          }}
          >Event</h5>
          <h5
            style={{
              fontSize:"20px",
              fontWeight:"bold"
              
            }}
          >Club Day</h5>
          <p
            style={{
              fontSize:"15px",
              fontWeight:"bold",
              opacity:"0.6"
            }}
          >Football Club</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpcomingEvent;
