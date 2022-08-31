import React, { useState, useEffect } from "react";
import "../ProfilePage.css";
import "antd/dist/antd.css";
import {
  Image,
  Button,
  Comment,
  Form,
  Input,
  List,
  Carousel,
  DatePicker,
  Modal,
} from "antd";
import { Col, Row, Layout } from "antd";

const ProfileSide = ({ page, changePage, name, slogan, email }) => {
  return (
    <div className="main-left">
      <div className="ml intro">
        <div className="it it-row1">
          <h3>Introduction</h3>

        <div className="ml intro">
            <div className="it it-row1">
                <h3>Intro</h3>
                <a>Edit</a>
            </div>
            <div className="it it-row2">
                <div className="p-row">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <div className="p-note">
                    <p>Graduate at</p>
                    </div>
                </div>
                <div className="p-row">
                    <i className="bi bi-briefcase-fill"></i>
                    <div className="p-note">
                    <p>Work in </p>
                    </div>
                </div>
                <div className="p-row">
                    <i className="bi bi-house-fill"></i>
                    <div className="p-note">
                    <p>Live in </p>
                    </div>
                </div>
                <div className="p-row">
                    <i className="bi bi-envelope-fill"></i>
                    <div className="p-note">
                    <p></p>
                    </div>
                </div>
                <div className="p-row">
                    <i className="bi bi-blockquote-left"></i>
                    <div className="p-note">
                    <p>
                    </p>
                    </div>
                </div>
            </div>
            <Modal title="Change personal information" >
                <form className="upload_image" id="post_info">
                    <div className="user_infor">
                        <div className="profile_picture">
                            <img src="image/default_avata_girl.png" alt="profile" />
                        </div>
                        <p>Doraemon</p>
                    </div>

                    <div className='inputFields'>
                        <h5>Club Name:</h5>
                        <input type="text" placeholder='Enter club name' name="name"  className="inputField" /> {/* should declare the value = formData.name because sth called contrilled components */}
                        <h5>Location:</h5>
                        <input type="text" placeholder='Enter location' name="location"  className="inputField" />
                        <h5>President:</h5>
                        <input type="text" placeholder='Enter president' name="president" className="inputField" />
                        <h5>Email:</h5>
                        <input type="text" placeholder='Email' name="email" className="inputField" />
                        <h5>Description:</h5>
                        <input type="text" placeholder='Enter your description' name="description"   className="inputField" />
                    </div>
                    
                </form>
            </Modal>
        </div>

        <div className="ml media">
            <div className="md it-row1">
                <div className='row1-title'>
                    <h3>Images</h3>
                    <a onClick={() => changePage("media")}>All images</a>
                </div>
            </div>
            <Row className="memGalery">
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Image
                        width="100%"
                        // height="6rem"
                        src={require("../../../image/Image1.jpg")}
                        className="Images img"
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Image
                        width="100%"
                        // height="6rem"
                        src={require("../../../image/Image1.jpg")}
                        className="Images img"
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Image
                        width="100%"
                        // height="6rem"
                        src={require("../../../image/Image1.jpg")}
                        className="Images img"
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Image
                        width="100%"
                        // height="6rem"
                        src={require("../../../image/Image2.jpg")}
                        className="Images img"
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Image
                        width="100%"
                        // height="6rem"
                        src={require("../../../image/Image3.jpg")}
                        className="Images img"
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Image
                        width="100%"
                        // height="6rem"
                        src={require("../../../image/Image3.jpg")}
                        className="Images img"
                    />
                </Col>
            </Row>
        </div>
        <div className="it it-row2">
          <div className="p-row">
            <div className="p-note">
              <p>{name}</p>
            </div>
          </div>
          <div className="p-row">
            <div className="p-note">
              <p>{slogan}</p>
            </div>
          </div>
          <div className="p-row">
            <div className="p-note">
              <p>{email}</p>
            </div>
          </div>
          <div className="p-row">
            <div className="p-note">
              <p>RMIT University</p>
            </div>
          </div>
          <div className="p-row">
            <div className="p-note">
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className="ml media">
        <div className="md it-row1">
          <div className="row1-title">
            <h3>Images</h3>
            <a onClick={() => changePage("media")}>All images</a>
          </div>
        </div>
        <Row className="memGalery">
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Image
              width="100%"
              height="6rem"
              src={require("../../../image/Image1.jpg")}
              className="Images img"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Image
              width="100%"
              height="6rem"
              src={require("../../../image/Image1.jpg")}
              className="Images img"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Image
              width="100%"
              height="6rem"
              src={require("../../../image/Image1.jpg")}
              className="Images img"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Image
              width="100%"
              height="6rem"
              src={require("../../../image/Image2.jpg")}
              className="Images img"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Image
              width="100%"
              height="6rem"
              src={require("../../../image/Image3.jpg")}
              className="Images img"
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Image
              width="100%"
              height="6rem"
              src={require("../../../image/Image3.jpg")}
              className="Images img"
            />
          </Col>
        </Row>
      </div>

      <div className="ml friend-list">
        <div className="fr it-row1">
          <div className="row1-title">
            <h3>Members</h3>
          </div>
        </div>
        <div className="p-row mem-tag">
          <img src="image/Image1.jpg" />
          <div className="memInfo">
            <h3>Doraemon</h3>
            <p>Role: Club President</p>
          </div>
        </div>
        
        {/* <div className="fr img-list">
                
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Doraemon</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Shizuka</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Chaien</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Suneo</div>
            </div> */}
      </div>

      <div className="ml event">
        <div className="it it-row1">
          <h3>Events</h3>
        </div>

        <div className="p-row">
          <div className="p-note">
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProfileSide
