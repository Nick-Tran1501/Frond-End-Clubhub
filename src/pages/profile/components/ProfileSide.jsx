import React, {useState, useEffect} from 'react';
import "../ProfilePage.css";
import "antd/dist/antd.css";
import { Image, Button, Comment, Form, Input, List, Carousel, DatePicker, Modal } from "antd";
import { Col, Row,Layout } from "antd";
import axios from 'axios';


const ProfileSide = ({page, changePage}) => {
    const [modal3, setModal3] = useState(false);
    const [modal4, setModal4] = useState(false);


    const clubId = localStorage.getItem("clubId")
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

    function handleSubmit (event) {
        event.preventDefault();
        alert("Hello")
    }

    function handleChange (event) {
        
    }



    //Api
    const [club, setClub] = useState({
        name: "",
        logoUrl: "",
        description: "",
        slogan: "",
        email: "",
        backgroundUrl: "",
        clubCategory: "",
        status:""
      });
    const [clubPres, setClubPres] = useState({
        name:"",
        roles:"",
        avatarUrl: "",
    })
    useEffect(() => {
        axios({
          method: "get",
          url: `https://rmit-club-dhyty.ondigitalocean.app/api/clubs/${clubId}`,
        })
          .then((res) => {
            console.log(res.data.clubData.logoUrl);
            setClub({
              ...club,
              name: res.data.clubData.name,
              logoUrl: res.data.clubData.logoUrl,
              description: res.data.clubData.description,
              slogan: res.data.clubData.slogan,
              email: res.data.clubData.email,
              backgroundUrl: res.data.clubData.backgroundUrl,
              clubCategory:res.data.clubData.clubCategory,
              status: res.data.clubData.status
            });
            setClubPres({
                ...clubPres, 
                name: res.data.clubData.president.name,
                roles: res.data.clubData.president.roles,
                avatarUrl: res.data.clubData.president.avatarUrl,
            })

          }
          
          )
          
          .catch((err) => {
            console.log(err);
          });
      },[]);


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
                    <p>
                        {club.status}
                    </p>
                    </div>
                </div>
            </div>
            <Modal title="Change personal information" visible={modal3} onOk={handleOk} onCancel={handleCancel}>
                <form onSubmit={handleSubmit} className="upload_image" id="post_info">
                    <div className="user_infor">
                        <div className="profile_picture">
                            <img src="image/default_avata_girl.png" alt="profile" />
                        </div>
                        <p>Doraemon</p>
                    </div>

                    <div className='inputFields'>
                        <h5>Club Name:</h5>
                        <input type="text" placeholder='Enter club name' name="name" onChange={handleChange}  className="inputField" /> {/* should declare the value = formData.name because sth called contrilled components */}
                        <h5>Location:</h5>
                        <input type="text" placeholder='Enter location' name="location" onChange={handleChange}  className="inputField" />
                        <h5>President:</h5>
                        <input type="text" placeholder='Enter president' name="president" onChange={handleChange} className="inputField" />
                        <h5>Email:</h5>
                        <input type="text" placeholder='Email' name="email" onChange={handleChange} className="inputField" />
                        <h5>Description:</h5>
                        <input type="text" placeholder='Enter your description' name="description" onChange={handleChange}  className="inputField" />
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
            <Row 
                gutter={{
                    xs: 0,
                    sm: 5,
                    md: 5,
                    lg: 5,
                  }}
                className="memGalery"
            >
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

        <div className="ml friend-list">
            <div className="fr it-row1">
                <div className='row1-title'>
                    <h3>Members</h3>
                    <a onClick={() => changePage("member")}>All members</a>
                </div>
            </div>
            <div className='p-row mem-tag'>
                <img src={clubPres.avatarUrl} alt='avatar' />
                <div className='memInfo'>
                    <h3>{clubPres.name}</h3>
                    <p>{clubPres.roles}</p>
                </div>
            </div>
            <div className='p-row mem-tag'>
                <img src='image/Image1.jpg' />
                <div className='memInfo'>
                    <h3>Doraemon</h3>
                    <p>Role: Club President</p>
                </div>
            </div>
            <div className='p-row mem-tag'>
                <img src='image/Image1.jpg' />
                <div className='memInfo'>
                    <h3>Doraemon</h3>
                    <p>Role: Club President</p>
                </div>
            </div>
            <div className='p-row mem-tag'>
                <img src='image/Image1.jpg' />
                <div className='memInfo'>
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
                <a onClick={showModal4}>Edit</a>
            </div>
            {/* <div className="p-row">
                <i className="fas fa-birthday-cake"></i>
                <div className="p-note">
                    <h3>Birthday !</h3>
                    <p>{info.birthday}</p>
                </div>
            </div>
            <div className="p-row">
                <i className="fa-solid fa-user-graduate"></i>
                <div className="p-note">
                    <h3>Graduated from {info.education}</h3>
                    <p>{info.graduation}</p>
                </div>
            </div> */}

            <div className='p-row'>
                <div className='p-note'>
                    {/* <h3>{info.title}</h3>
                    <p>{info.date}</p> */}
                </div>
            </div>
            <Modal title="Change events" visible={modal4} onOk={handleOk} onCancel={handleCancel}>
                <form onSubmit={handleSubmit} className="upload_image" id="post_form">
                    <div className="user_infor">
                        <div className="profile_picture">
                            <img src="image/default_avata_girl.png" alt="profile" />
                        </div>
                        <p>Doraemon</p>
                    </div>

                    <div className='inputFields'>
                        {/* <DatePicker onChange={handleChange} /> */}
                        <h5>Event Title:</h5>
                        <input type="text" placeholder='Enter event title' name="title" onChange={handleChange} className="inputField" /> {/* should declare the value = formData.name because sth called contrilled components */}
                        <h5>Event Date:</h5>
                        <input type="date" placeholder='Enter date event' name="date" onChange={handleChange} className="inputField" />
                    </div>
                    
                </form>
            </Modal>
        </div>
    </div>
  )
}

export default ProfileSide;