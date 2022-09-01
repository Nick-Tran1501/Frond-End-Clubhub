import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../ProfilePage.css";
import "antd/dist/antd.css";
import { Button, Modal, Image } from "antd";
import axios from "axios";
import { PictureOutlined } from "@ant-design/icons";
import collapseMotion from "antd/lib/_util/motion";
const ProfileBg = ({
  page,
  changePage,
  name,
  logoUrl,
  description,
  slogan,
  backgroundUrl,
}) => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [avatar, setAvatar] = useState();
  const [background, setBackground] = useState();
  const [reRender, setReRender] = useState(0);
    console.log("ff",backgroundUrl);
  //API
  const token = localStorage.getItem("token");
  const uploadBackground = () => {
    const formData = new FormData();
    formData.append("background", background);

    axios({
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      method: "post",
      url: `https://rmit-club-dhyty.ondigitalocean.app/api/clubs/630de4a51d03758bef83bfdb/bg`,
      data: formData,
    })
      .then((response) => {
        setBackground(response.data.backgroundUrl)
        console.log(response.data.backgroundUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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

  const handleOk = (e) => {
    e.preventDefault();
    setModal1(false);
    setModal2(false);
    uploadBackground();
    setReRender(reRender+1) 
  };

  const handleCancel = () => {
    setModal1(false);
    setModal2(false);
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
  console.log("gigi", reRender);

  return (
    <div>
      {/* <!-- profile-cover --> */}
      <div className="ab bg-image">
        <Image
        className="backgroundImage"
          width="100%"
          src={backgroundUrl}
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
          visible={modal1}
          onOk={(e)=>{handleOk(e)}}
          onCancel={handleCancel}
        >
          <form className="upload_image" id="post_form">
            <div className="user_infor">
              <div className="profile_picture">
                <img src={logoUrl} alt="profile" />
              </div>
              <p>{name}</p>
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
            <img
              className="pfi-img"
              onClick={showModal2}
              src={logoUrl}
              alt="profile"
              id="profile_btn"
            />
            <div>
              <h1>{name}</h1>
              <p>{description}</p>
              <p>{slogan}</p>
            </div>

            <Modal
              title="Change profile image"
              visible={modal2}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <form className="upload_image" id="post_form">
                <div className="user_infor">
                  <div className="profile_picture">
                    <img src="image/default_avata_girl.png" alt="profile" />
                  </div>
                  <p>Doraemon</p>
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

          <div id="edit_profile_btn" className="pdl-row">
            <button className="btn" onClick={showModal2}>
              Edit Profile
            </button>
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
