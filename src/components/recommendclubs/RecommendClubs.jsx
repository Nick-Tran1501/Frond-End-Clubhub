import React from "react";
import Clubs from "./Clubs";
import "antd/dist/antd.min.css";
import "./RecommendClubs.css"
import { Button } from "antd";
import {
  ArrowRightOutlined
} from "@ant-design/icons";

const RecommendClub = () => {
  return(
    <React.Fragment>

      <div className="RecommendContainer">
        <h5 className="RecommendTitle"
        >Recommend for you</h5>
        <Clubs/>
        <Clubs/>
        <Clubs/>


        <Button
          className="ViewMoreButton"
        shape="round"  size="medium" >
          <p>View More</p>
          <ArrowRightOutlined 
            size="small"
            className="ViewMoreIcon"
          
          />
        </Button>
      </div>

    
    </React.Fragment>
  )
}

export default RecommendClub;