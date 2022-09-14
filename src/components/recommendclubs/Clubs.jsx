import React, {useState, useEffect} from "react";
import "antd/dist/antd.min.css";
import { useNavigate } from "react-router-dom";
import { Button, Avatar } from "antd";
import "./Clubs.css";

const Clubs = ({id,name,slogan, logoUrl}) => {
  const navigate = useNavigate();
  const getClubId = () =>{
    localStorage.setItem("clubId",id);
    navigate("/profile")
  }

  return (
    <React.Fragment >
      <div className="ClubContainer" key={id}>
        <button className="ButtonImage" key="ButtonIamge">
          
          <Avatar size={50} src={logoUrl} key={logoUrl}/>
        </button>

        <div className="clubInfo" key={name}>
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

      <Button className="JoinButton" shape="round" size="medium" onClick={()=>{getClubId()}}>
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
