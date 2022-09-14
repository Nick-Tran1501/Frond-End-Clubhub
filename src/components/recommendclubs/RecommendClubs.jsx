import React, { useState, useEffect } from "react";
import Clubs from "./Clubs";
import "antd/dist/antd.min.css";
import "./RecommendClubs.css"
import axios from "axios"
import { Button } from "antd";
import {
  ArrowRightOutlined
} from "@ant-design/icons";

const RecommendClub = () => {

  const [clubInfo, setClubInfo] = useState([
    {
      id: "",
      name: "",
      slogan: "",
      logoUrl: ""
    }
  ]
  )

  const [clubArray, setClubArray] = useState([])

  const token = localStorage.getItem("token")

  const onClickRefresh = () => {
    let data = clubArray.sort((a, b) => 0.5 - Math.random());
    data = data.slice(0, 3)
    console.log('refresh')
    setClubInfo(data)
  }







  useEffect(() => {
    axios({
      headers: { Authorization: `Bearer ${token}` },
      method: "get",
      url: "https://rmit-club-dhyty.ondigitalocean.app/api/clubs/?recruit=true",
    })
      .then((res) => {
        setClubArray(res.data)
        let shuffledArray = []
        shuffledArray = res.data.sort((a, b) => 0.5 - Math.random());
        shuffledArray = shuffledArray.slice(0, 3)
        setClubInfo(shuffledArray)
      })
      .catch((err) => { console.log(err) })
  }, [])

  return (
    <React.Fragment>

      <div className="RecommendContainer">
        <h5 className="RecommendTitle"
        >Recommend for you</h5>

        {clubInfo.map((club) => {

          return (
            <div key={club?.name} >
              <Clubs id={club?._id} name={club?.name} slogan={club?.slogan} logoUrl={club?.logoUrl} />
            </div>

          )
        })}




        <Button
          className="ViewMoreButton"
          shape="round" size="medium"
          onClick={() => onClickRefresh()}
        >
          <p>Refresh</p>
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