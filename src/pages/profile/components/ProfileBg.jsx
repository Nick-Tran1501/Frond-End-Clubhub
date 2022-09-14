import React, { useState, useEffect } from "react";
import "../ProfilePage.css";
import "antd/dist/antd.css";
import { Button, Modal, Image, notification } from "antd";
import axios from "axios";
import { PictureOutlined } from "@ant-design/icons";
import { createUseStyles } from "react-jss"


const useStyles= createUseStyles({
  disable:{
    backgroundColor:"grey",
    color:"white"
  },

  able: {
    backgroundColor: "#68B8FF"
    
  }
})

const ProfileBg =({
  ClubId,
  page,
  changePage,

}) => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [avatar, setAvatar] = useState();
  const [background, setBackground] = useState();
  
  // Post API
  const token = localStorage.getItem("token");
  const clubId = localStorage.getItem("clubId")
  const uploadBackground = () => {
    const formData = new FormData();
    formData.append("background", background);

    axios({
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`,
      },
      method: "put",
      url: `https://rmit-club-dhyty.ondigitalocean.app/api/clubs/${clubId}/bg`,
      data: formData,
    })
      .then((response) => {
        setClub({...club, backgroundUrl: response.data.backgroundUrl});   
        setBackground(response.data.backgroundUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const uploadAvatar = () => {
    const formData = new FormData();
    formData.append("logo", avatar);

    axios({
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`},
        url: `https://rmit-club-dhyty.ondigitalocean.app/api/clubs/${clubId}/logo`,

      method: "put",
      data: formData,
  })
  .then((response) => {
    setClub({...club, logoUrl: response.data.logoUrl});   

  })
  .catch((error) => {console.log(error)})
  }
  

  //Get Club Api
  const [club, setClub] = useState({
    name: "",
    logoUrl: "",
    description: "",
    slogan: "",
    email: "",
    backgroundUrl: "",
    members:[],
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
          members:res.data.clubData.members
        });
      })
      .catch((err) => {
        
        
        console.log(err);
      });
  },[]);
  
  // Current User Api
  const [userProfile, setUserProfile] = useState("");
  useEffect(() => {
    axios
      .get("https://rmit-club-dhyty.ondigitalocean.app/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserProfile(response.data._id);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar);
    };
  }, [avatar]);

  const showModal1 = () => {
    setModal1(true);
  };

  const showModal2 = () => {
    setModal2(true);
  };

  const handleOkModalBackground = (e) => {
    e.preventDefault();
    setModal1(false);
    uploadBackground();
  };

  const handleOkModalAvatar = (e) => {
    e.preventDefault();
    setModal2(false);
    uploadAvatar();
  };

  const handleCancel = () => {
    setModal1(false);
    setModal2(false);
    setAvatar()
    setBackground()
  };

  const handleCover = (event) => {
    const file = event.target.files[0];
    file.preview = URL.createObjectURL(file);
    setBackground(file);
    console.log(file);
  };

  const handleAvatar = (event) => {
    const file = event.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
    console.log(file);
  };


 
  // ---------Join---------
  const joinClub = () =>{
    axios({
      headers:{
        "Authorization": `Bearer ${token}`
      },
      method: "POST",
      url:`https://rmit-club-dhyty.ondigitalocean.app/api/clubs/${clubId}/join`,
      data:{message: "Can I Joined Your Club?"}
    })
    .then((response)=>{
      
        console.log(response)
      })
    .catch((err)=> {
      
      console.log(err.response.status);
      if( err.response.status===402){
        openNotificationWithIcon("error")
      }
    })
      
  }

//-------Button Display---------
  const memberId = []
  club.members.forEach(member => { 
    memberId.push(member._id)
  })
  
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Pending',
      description:
        'Your request have been send. Please wait for the confirmation',
    });
  };
  
  
  const classes = useStyles();
  return (
    <div>
      {/* <!-- profile-cover --> */}
      <div className="ab bg-image">
        <Image
        className="backgroundImage"
          width="100%"
        
          src={`${club.backgroundUrl}?${new Date().getTime()}`}
          style={{
            width: "100%",
            zIndex: "0",
            objectFit: "cover",
            height: "29vh",
          }}
        />
        <Button
          className="btn btn-sm edit_cover_btn"
          shape="circle"
          icon={
            <PictureOutlined
              style={{
                fontSize: "25px",
              }}
            />
          }
          size="medium"
          onClick={showModal1}
        />

        <Modal
          title="Change cover image"
          destroyOnClose={true}
          visible={modal1}
          onOk={(e)=>{handleOkModalBackground(e)}}
          onCancel={handleCancel}
        >
          <form className="upload_image" id="post_form">
            <div className="user_infor">
              <div className="profile_picture">
                <img src={`${club.logoUrl}?${new Date().getTime()}`} alt="profile" />
              </div>
              <p>{club.name}</p>
            </div>

            <div className="file_img">
              {background ? (
                <label htmlFor="cover">
                  <img
                    src={background.preview}
                    alt="post"
                    className="post_img"
                  />
                </label>
              ) : (
                <label htmlFor="cover">
                  <span>
                    <i className="fa-regular fa-image"></i>
                  </span>
                  <p>Add an image</p>
                </label>
              )}
              <input
                type="file"
                name="cover"
                id="cover"
                onChange={handleCover}
              />
            </div>
          </form>
        </Modal>
      </div>

      {/* <!-- profile-info --> */}
      <div className="ab profile-info">
        <div className="pd-left">
          <div className="pdl-row">
            <Image
              className="pfi-img"
              src={`${club.logoUrl}?${new Date().getTime()}`}
              alt="profile"
              id="profile_btn"
            />
            <div className="pfi-des">
              <h1>{club.name}</h1>
              <p>{club.description}</p>
              <p>{club.slogan}</p>
            </div>

            <Modal
              title="Change profile image"
              destroyOnClose={true}
              visible={modal2}
              onOk={(e) => {handleOkModalAvatar(e)}}
              onCancel={handleCancel}
            >
              <form className="upload_image" id="post_form">
                <div className="user_infor">
                  <div className="profile_picture">
                    <img src={`${club.logoUrl}?${new Date().getTime()}`} alt="profile" />
                  </div>
                  <p>{club.name}</p>
                </div>

                <div className="file_img">
                  {avatar ? (
                    <label htmlFor="avatar">
                      <img
                        src={avatar.preview}
                        alt="post"
                        className="post_img"
                      />
                    </label>
                  ) : (
                    <label htmlFor="avatar">
                      <span>
                        <i className="fa-regular fa-image"></i>
                      </span>
                      <p>Add an image</p>
                    </label>
                  )}
                  <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    onChange={handleAvatar}
                  />
                </div>
              </form>
            </Modal>
          </div>

          <div id="edit_profile_btn" className="pdl-row ProfileButtonContainer">
            <Button className="btn" onClick={showModal2}>
              Edit Profile
            </Button>
            <Button 
              className={ memberId.includes(userProfile) ? classes.disable : classes.able}
              onClick={() => {joinClub()}}
              disabled={memberId.includes(userProfile) ? true : false}
            >
              Join
            </Button>

            
          </div>
        </div>

        <div className="pd-right">
          <ul className="link">
            <li>
              <button
                onClick={() => changePage("post")}
                className={
                  page === "post" ? "profileComp active" : "profileComp"
                }
              >
                Post
              </button>
            </li>
            <li>
              <button
                onClick={() => changePage("intro")}
                className={
                  page === "intro" ? "profileComp active" : "profileComp"
                }
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => changePage("member")}
                className={
                  page === "member" ? "profileComp active" : "profileComp"
                }
              >
                Members
              </button>
            </li>
            <li>
              <button
                onClick={() => changePage("media")}
                className={
                  page === "media" ? "profileComp active" : "profileComp"
                }
              >
                Images
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileBg;
