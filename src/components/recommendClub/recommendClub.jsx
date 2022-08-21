import React from "react";
import Clubs from "./Clubs";
import "antd/dist/antd.min.css";
import "../recommendClub/recommendClub.css"
import { Button } from "antd";

const RecommendClub = () => {
  return(
    <React.Fragment>

      <div className="RecommendContainer">
        <h5 className="RecommendTitle"
        >Recommend for you</h5>
        <Clubs/>
        <Clubs/>
        <Clubs/>


        <Button type="primary" shape="round"  size="medium" >
          View More
        </Button>
      </div>

    
    </React.Fragment>
  )
}

export default RecommendClub;