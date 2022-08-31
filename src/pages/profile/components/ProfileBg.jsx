import React, { useState, useEffect } from "react";
import "../ProfilePage.css";
import "antd/dist/antd.css";
import axios from "axios";
import { Button, Modal, Upload } from "antd";
import { UploadOutlined} from "@ant-design/icons"
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

  const showModal1 = () => {
    setModal1(true);
  };

  const showModal2 = () => {
    setModal2(true);
  };

  const handleOk = (event) => {
    setModal1(false);
    setModal2(false);
    console.log(event.target.files[0]);
  };

  const handleCancel = () => {
    setModal1(false);
    setModal2(false);
  };

  
  

  const [url,setUrl] = useState({});

  const token = localStorage.getItem('token');
  const uploadImage = () => {
    const formData = new FormData()
    formData.append("background", url)
    console.log("dd",formData)
    axios({
        headers: { 'Content-Type': "multipart/form-data",
                "Authorization": `Bearer ${token}`
    },
        method: 'post',
        url: "https://rmit-club-dhyty.ondigitalocean.app/api/clubs/630de4a51d03758bef83bfdb/bg",
        data: formData
    })
    .then((response) => {console.log(response)})
    .catch((error) => {console.log(error)});
  }
console.log(url)
  return (
    <div>
      {/* <!-- profile-cover --> */}
      <div
        className="ab bg-image"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
        <button className="btn btn-sm edit_cover_btn" onClick={showModal1}>
          Edit cover image
        </button>
        <Modal
          title="Change cover image"
          visible={modal1}
          onOk={uploadImage}
          onCancel={handleCancel}
        >
          <form className="upload_image" id="post_form">

            <div className="file_img">
              <label htmlFor="file_image">
                <span>
                  <i className="fa-regular fa-image"></i>
                </span>
                <p>Add an image</p>

              </label>
              <input
                type="file"
                name="file_image"
                id="file_image"
                onChange={(e) => {
                    console.log(e.target.files[0]);
                    setUrl(e.target.files[0]);
                }}
              />
              <img src={url.name} alt="background" />
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
                  <label htmlFor="file_image">
                    <span>
                      <i className="fa-regular fa-image"></i>
                    </span>
                    <p>Add an image</p>
                  </label>
                  <input type="file" name="file_image" id="file_image" />
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
