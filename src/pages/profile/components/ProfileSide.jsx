import React, { useState, useEffect } from "react";
import "../ProfilePage.css";
import "antd/dist/antd.css";
import { Image, Avatar, Modal } from "antd";
import { Col, Row } from "antd";
import axios from "axios";

const ProfileSide = ({ changePage }) => {
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  const clubId = localStorage.getItem("clubId");
  const showModal3 = () => {
    setModal3(true);
  };

  const showModal4 = () => {
    setModal4(true);
  };
  const handleOk = () => {
    setModal3(false);
    setModal4(false);
  };

  const handleCancel = () => {
    setModal3(false);
    setModal4(false);
  };

  function handleSubmit(event) {
    event.preventDefault();
    alert("Hello");
  }

  function handleChange(event) {}

  //Api
  const [club, setClub] = useState({
    name: "",
    logoUrl: "",
    description: "",
    slogan: "",
    email: "",
    backgroundUrl: "",
    clubCategory: "",
    status: "",
    member: [],
    username: "",
  });
  const [clubPres, setClubPres] = useState({
    id: "",
    name: "",
    roles: "",
    avatarUrl: "",
    username: "",
  });

  useEffect(() => {
    axios({
      method: "get",
      url: `https://rmit-club-dhyty.ondigitalocean.app/api/clubs/${clubId}`,
    })
      .then((res) => {
        setClub({
          ...club,
          name: res.data.clubData.name,
          logoUrl: res.data.clubData.logoUrl,
          description: res.data.clubData.description,
          slogan: res.data.clubData.slogan,
          email: res.data.clubData.email,
          backgroundUrl: res.data.clubData.backgroundUrl,
          clubCategory: res.data.clubData.clubCategory,
          status: res.data.clubData.status,
          member: res.data.clubData.members,
          username: res.data.clubData.username,
        });

        setClubPres({
          ...clubPres,
          id: res.data.clubData.president._id,
          name: res.data.clubData.president.name,
          roles: res.data.clubData.president.roles,
          avatarUrl: res.data.clubData.president.avatarUrl,
          username: res.data.clubData.president.username,
        });
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  const token = localStorage.getItem("token");
  const [clubImg, setClubImg] = useState([]);
  // ----------Images-------------
  useEffect(() => {
    axios({
      method: "get",
      url: `https://rmit-club-dhyty.ondigitalocean.app/api/clubs/featureimage/${clubId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setClubImg(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="main-left">
      <div className="ml intro">
        <div className="it it-row1">
          <h3>Intro</h3>
          <a onClick={showModal3}>Edit</a>
        </div>
        <div className="it it-row2">
          <div className="p-row">
            <i className="fa-solid fa-graduation-cap"></i>
            <div className="p-note">
              <p>{club.name}</p>
            </div>
          </div>
          <div className="p-row">
            <i className="bi bi-briefcase-fill"></i>
            <div className="p-note">
              <p>{club.clubCategory}</p>
            </div>
          </div>
          <div className="p-row">
            <i className="bi bi-house-fill"></i>
            <div className="p-note">
              <p>{club.slogan}</p>
            </div>
          </div>
          <div className="p-row">
            <i className="bi bi-envelope-fill"></i>
            <div className="p-note">
              <p>{club.email}</p>
            </div>
          </div>
          <div className="p-row">
            <i className="bi bi-blockquote-left"></i>
            <div className="p-note">
              <p>{club.status}</p>
            </div>
          </div>
        </div>
        <Modal
          title="Change personal information"
          visible={modal3}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <form onSubmit={handleSubmit} className="upload_image" id="post_info">
            <div className="user_infor">
              <div className="profile_picture">
                <img src="image/default_avata_girl.png" alt="profile" />
              </div>
              <p>Doraemon</p>
            </div>

            <div className="inputFields">
              <h5>Club Name:</h5>
              <input
                type="text"
                placeholder="Enter club name"
                name="name"
                onChange={handleChange}
                className="inputField"
              />{" "}
              {/* should declare the value = formData.name because sth called contrilled components */}
              <h5>Location:</h5>
              <input
                type="text"
                placeholder="Enter location"
                name="location"
                onChange={handleChange}
                className="inputField"
              />
              <h5>President:</h5>
              <input
                type="text"
                placeholder="Enter president"
                name="president"
                onChange={handleChange}
                className="inputField"
              />
              <h5>Email:</h5>
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="inputField"
              />
              <h5>Description:</h5>
              <input
                type="text"
                placeholder="Enter your description"
                name="description"
                onChange={handleChange}
                className="inputField"
              />
            </div>
          </form>
        </Modal>
      </div>

      <div className="ml media">
        <div className="md it-row1">
          <div className="row1-title">
            <h3>Images</h3>
            <a onClick={() => changePage("media")}>All images</a>
          </div>
        </div>
        <Row
          gutter={{
            xs: 0,
            sm: 5,
            md: 5,
            lg: 5,
          }}
          className="memGalery"
        >
          {clubImg.map((img) => {
            return (
              <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                <Image
                  width="100%"
                  // height="6rem"
                  src={img.url}
                  key={img.key}
                  className="Images img"
                />
              </Col>
            );
          })}
        </Row>
      </div>

      <div className="ml friend-list">
        <div className="fr it-row1">
          <div className="row1-title">
            <h3>Members</h3>
            <a onClick={() => changePage("member")}>All members</a>
          </div>
        </div>
        <div className="p-row mem-tag">
          <Avatar size="large" src={clubPres.avatarUrl} alt="avatar" />
          <div className="memInfo">
            <h3>
              {clubPres.username} {"(President)"}
            </h3>
          </div>
        </div>

        {club.member.map((mem) => {
          return mem._id !== clubPres.id ? (
            <div className="p-row mem-tag" key={mem.snumber}>
              <Avatar size="large" src={mem.avatarUrl}></Avatar>
              <div className="memInfo">
                <h3>{mem.username}</h3>
              </div>
            </div>
          ) : (
            ""
          );
        })}

        {/* <div className="fr img-list">
                
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Doraemon</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Shizuka</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Chaien</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Suneo</div>
            </div> */}
      </div>

      
    </div>
  );
};

export default ProfileSide;
