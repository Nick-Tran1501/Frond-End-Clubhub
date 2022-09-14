import React, {useState, useEffect} from "react";
import Clubs from "./Clubs";
import "antd/dist/antd.min.css";
import "./RecommendClubs.css"
import axios from "axios"
import { Button } from "antd";
import {
  ArrowRightOutlined
} from "@ant-design/icons";

const RecommendClub = () => {

  const [clubInfo,setClubInfo] = useState([
    {
      id:"",
      name:"",
      slogan:"",
      logoUrl:""
    }
  ]
  )
  const token = localStorage.getItem("token")
  useEffect(() => {
    axios({
      headers: { Authorization: `Bearer ${token}` },
      method: "get",
      url: "https://rmit-club-dhyty.ondigitalocean.app/api/clubs/?recruit=true",
    })
    .then((res) => {
      setClubInfo(res.data)
    })
    .catch((err) => {console.log(err)})
  },[])
  
  return(
    <React.Fragment>

      <div className="RecommendContainer">
        <h5 className="RecommendTitle"
        >Recommend for you</h5>

        {clubInfo.map((club) => {
          
          return(
            <div>
              <Clubs key={club?._id} id={club?._id} name={club?.name} slogan={club?.slogan} logoUrl={club?.logoUrl}/>
            </div>

          )
        })}

     


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