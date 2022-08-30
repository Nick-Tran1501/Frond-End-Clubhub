/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import "./Post.css";
import { Image, Carousel, Modal, Avatar } from "antd";
import {
  EditOutlined,
  LikeOutlined,
  ShareAltOutlined,
  CommentOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import CommentsBox from "../commentsbox/CommentsBox";
import moment from "moment";

import axios from "axios";

const Post = ({ data }) => {
  const [userProfile, setUserProfile] = useState({});
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://rmit-club-dhyty.ondigitalocean.app/api/user/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUserProfile(response.data))
      .catch((err) => console.log(err));
  }, []);

  // ------Show Comments-----
  const [show, setShow] = useState(false);

  // -------Like Count--------
  const token = localStorage.getItem("token");
  const handleLike = (postId) => {
    axios({
      headers: { Authorization: `Bearer ${token}` },
      method: "post",
      url: "https://rmit-club-dhyty.ondigitalocean.app/api/posts/like",
      data: {
        postId,
      },
    });
  };

  // ------------Read More--------------
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="readOrHide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  // edit Box

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <React.Fragment>
      <div className="PostContainer">
        {/* -----Post Header----- */}
        <div className="PostHeader">
          {/* Profile Image */}
          <div className="ProfileImage">
            <Avatar
              size={60}
              src={data.author.avatarUrl}
              className="sideAvatar"
            />
          </div>
          {/* Post Info */}
          <div className="PostInfo">
            <div>
              <p
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {data.author.username}
              </p>
            </div>

            <div>
              <p
                style={{
                  opacity: "0.6",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                {data.createAt}
              </p>
            </div>
            <div
              style={{
                opacity: "0.6",
                fontWeight: "bold",
                fontSize: "12px",
              }}
            >
              <p>{data.location}</p>
            </div>
          </div>
          {/* Post Setting */}
          <div className="PostSetting">
            {data.updateAt ?
            <p
              style={{
                opacity: "0.6",
                paddingTop: "13px",
              }}
            >
              Updated:{data?.updateAt}
            </p>
            : ""
            }
            <button
              style={{
                padding: "0 ",
                margin: "0 0 2rem 0",
                border: "none",
                background: "none",
                fontSize: "1.4rem",
                height: "64px",
              }}
              onClick={showModal}
            >
              <EditOutlined />
            </button>
            <Modal
              title="Basic Modal"
              visible={visible}
              onOk={handleOk}
              onCancel={handleCancel}
              okButtonProps={{
                // functin here
                disabled: true,
              }}
              cancelButtonProps={{
                disabled: false,
              }}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
          </div>
        </div>

        {/* -----Post Content----- */}
        <div className="PostContent">
          <div className="Content">
            <ReadMore>{data.content}</ReadMore>
          </div>

          <div className="PostImage">
            <Carousel
              dots={false}
              arrows
              prevArrow={<LeftOutlined />}
              nextArrow={<RightOutlined />}
              style={{
                width: "100%",
              }}
            >
              {data.images.map((image) => {
                return (
                  <Image
                    key={image.key}
                    width="100%"
                    height="20rem"
                    src={image.url}
                    className="Images"
                  />
                );
              })}
            </Carousel>
          </div>

          <div className="PostResult">
            <div className="ReactResult">
              <p>{data.likes.length}</p>
            </div>

            <div className="ResultIcon">
              <LikeOutlined />
            </div>

            <div className="CommentsResult">
              <p style={{ fontSize: "18px", paddingTop: "5px" }}>
                {data.comments.length}
              </p>
              <span className="commentsIcon">
                <CommentOutlined></CommentOutlined>
              </span>
            </div>
          </div>
          <hr />
        </div>

        {/* -------Post Footer------ */}
        <div className="PostFooter">
          <button className="Button" onClick={() => handleLike(data._id)}>
            <div className="ActionButtons">
              <p>Like</p>
              <LikeOutlined className="ButtonIcons" />
            </div>
          </button>

          <button className="Button">
            <div
              className="ActionButtons"
              onClick={() => {
                setShow(!show);
              }}
            >
              <p>Comment</p>
              <CommentOutlined className="ButtonIcons" />
            </div>
          </button>

          <button className="Button">
            <div className="ActionButtons">
              <p>Share</p>
              <ShareAltOutlined className="ButtonIcons" />
            </div>
          </button>
        </div>

        {show && (
          <CommentsBox
            data={data.comments}
            postId={data._id}
            userimage={data.author.avatarUrl}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default Post;
