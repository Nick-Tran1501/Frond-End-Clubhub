import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import Navbar from "../../components/navbar/NavBars";
import "antd/dist/antd.css";
import ProfileBg from "./components/ProfileBg";
import { Col, Row} from "antd";
import ProfileIntro from "./components/ProfileIntro";
import ProfileMember from "./components/ProfileMember";
import ProfileMedia from "./components/ProfileMedia";
import ProfileSide from "./components/ProfileSide";
import ProfilePost from "./components/ProfilePost";
import axios from "axios";

const Profile = () => {
  const [page, setPage] = useState("post");

  function changePage(p) {
    setPage(p);
  }

  const clubId = localStorage.getItem("clubId");

  const [club, setClub] = useState({
    name: "",
    logoUrl: "",
    description: "",
    slogan: "",
    email: "",
    backgroundUrl: "",
  });
  useEffect(() => {
    axios({
      method: "get",
      url: `https://rmit-club-dhyty.ondigitalocean.app/api/clubs/${clubId}`,
    })
      .then((res) => {
        console.log(res.data);
        setClub({
          ...club,
          name: res.data.name,
          logoUrl: res.data.logoUrl,
          description: res.data.description,
          slogan: res.data.slogan,
          email: res.data.email,
          backgroundUrl: res.data.backgroundUrl
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  
  return (
    <div className="profile--container">
      <Row>
        <Col span={24}>
          <Navbar />
        </Col>
      </Row>

      {/* <Sidebar/> */}
      <div className="container">
        <Row>
          <Col span={24}>
            <ProfileBg
              clubId={clubId}
              // page={page}
              // changePage={changePage}
              // name={club.name}
              // logoUrl={club.logoUrl}
              // description={club.description}
              // slogan={club.slogan}
              // backgroundUrl={club.backgroundUrl}
            />
          </Col>
        </Row>

        {/* MAIN CONTENT */}
        {page === "post" && (
          <Row className="main-content">
            <Col xs={24} sm={24} md={7} lg={7} xl={7}>
              <ProfileSide 

                page={page} 
                changePage={changePage}
                name={club.name}
                slogan={club.slogan}
                email={club.email}
                />
            </Col>

            <Col xs={24} sm={24} md={17} lg={17} xl={17}>
              <ProfilePost />
            </Col>
          </Row>
        )}

        {page === "intro" && (
          <Row className="main-content">
            <Col span={24}>
              <ProfileIntro />
            </Col>
          </Row>
        )}

        {page === "member" && (
          <Row className="main-content">
            <Col span={24}>
              <ProfileMember />
            </Col>
          </Row>
        )}

        {page === "media" && (
          <Row className="main-content">
            <Col span={24}>
              <ProfileMedia />
            </Col>
          </Row>
        )}
      </div>
    </div>
  );
};

export default Profile;
