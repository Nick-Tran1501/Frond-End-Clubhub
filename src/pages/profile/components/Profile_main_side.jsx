import React from 'react';
import "../profile.css";
import "antd/dist/antd.css";
import { Image, Button, Comment, Form, Input, List, Carousel, Modal } from "antd";
import {
  EditOutlined,
  LikeOutlined,
  ShareAltOutlined,
  CommentOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";


const Profile_main_side = () => {
  return (
    <div className="main-left">
        <div className="ml intro">
            <div className="it it-row1">
            <h3>Intro</h3>
            <a href="#">Edit</a>
            </div>
            <div className="it it-row2">
            <div className="p-row">
                <i className="fa-solid fa-graduation-cap"></i>
                <div className="p-note">
                <p>Graduate at RMIT University</p>
                </div>
            </div>
            <div className="p-row">
                <i className="bi bi-briefcase-fill"></i>
                <div className="p-note">
                <p>Work in BKAV company</p>
                </div>
            </div>
            <div className="p-row">
                <i className="bi bi-house-fill"></i>
                <div className="p-note">
                <p>Live in Hanoi</p>
                </div>
            </div>
            <div className="p-row">
                <i className="bi bi-envelope-fill"></i>
                <div className="p-note">
                <p>zet@gmail.com</p>
                </div>
            </div>
            <div className="p-row">
                <i className="bi bi-blockquote-left"></i>
                <div className="p-note">
                <p>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit.."
                </p>
                </div>
            </div>
            </div>
        </div>

        <div className="ml media">
            <div className="md it-row1">
                <div className='row1-title'>
                    <h3>Media</h3>
                    <a href="#">All images</a>
                </div>
            </div>
            <div className="MediaImage">
                <Carousel
                dots={false}
                arrows
                prevArrow={<LeftOutlined />}
                nextArrow={<RightOutlined />}
                style={{
                    width:"100%",
                    paddingRight: "1rem",
                }}
                >
                <Image
                    width="100%"
                    height="10rem"
                    src={require("../../../image/Image1.jpg")}
                    className="Images"
                />
                <Image
                    width="100%"
                    height="10rem"
                    src={require("../../../image/Image2.jpg")}
                    className="Images"
                />
                <Image
                    width="100%"
                    height="10rem"
                    src={require("../../../image/Image3.jpg")}
                    className="Images"
                />
                <Image
                    width="100%"
                    height="10rem"
                    src={require("../../../image/ClubHub_Trans.png")}
                    className="Images"
                />
                <Image
                    width="100%"
                    height="10rem"
                    src={require("../../../image/Galaxy-login.png")}
                    className="Images"
                />
                <Image
                    width="100%"
                    height="10rem"
                    src={require("../../../image/Image3.jpg")}
                    className="Images"
                />
                </Carousel>
            </div>
            {/* <div className="md img-list">
                <div><img src="image\Image4.JPG" alt="media1" className="img" /></div>
                <div><img src="image\Image4.JPG" alt="media2" className="img" /></div>
                <div><img src="image\Image4.JPG" alt="media1" className="img" /></div>
                <div><img src="image\Image4.JPG" alt="media2" className="img" /></div>
            </div> */}
        </div>

        <div className="ml friend-list">
            <div className="fr it-row1">
                <div className='row1-title'>
                    <h3>Friends</h3>
                    <a href="#">All friends</a>
                </div>
            </div>
            <div className="fr img-list">
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Doraemon</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Shizuka</div>
                <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Chaien</div>
                {/* <div><img src="image/Image1.jpg" alt="Mrs Y" className="img" />Suneo</div> */}
            </div>
        </div>

        <div className="ml event">
            <div className="it it-row1">
            <h3>Event</h3>
            <a href="#">Edit</a>
            </div>
            <div className="p-row">
            <i className="fas fa-birthday-cake"></i>
            <div className="p-note">
                <h4>Birthday !</h4>
                <p>June 11th</p>
            </div>
            </div>
            <div className="p-row">
            <i className="fa-solid fa-user-graduate"></i>
            <div className="p-note">
                <h4>Graduated from RMIT University</h4>
                <p>December 31st</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Profile_main_side