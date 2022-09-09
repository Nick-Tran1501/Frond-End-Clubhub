import React, { useState, useEffect } from "react";
import "antd/dist/antd.min.css";
import "./Post.css";
import { Image, Carousel, Modal, Avatar, Menu, Dropdown, Button } from "antd";
import PostUpload from "../postUpload/PostUpload";
import {
  EditOutlined,
  LikeOutlined,
  ShareAltOutlined,
  CommentOutlined,
  LeftOutlined,
  RightOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import CommentsBox from "../commentsbox/CommentsBox";
import axios from "axios";
import Comment from "../commentlist/Comment";

const ClubPosts = () => {
  const [clubPostData, setClubPostData] = useState([]);
  const token = localStorage.getItem("token");
  const clubId = localStorage.getItem("clubId");
  const loadClubPost = () => {
    axios({
      headers: { Authorization: `Bearer ${token}` },

      method: "get",
      url: `https://rmit-club-dhyty.ondigitalocean.app/api/posts/clubs/${clubId}`,
    })
      .then((response) => {
        console.log("Club", response.data);
        setClubPostData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    loadClubPost();
  }, []);

  const [show, setShow] = useState(false);

  const [visible, setVisible] = useState(false);


  return(

  <React.Fragment>
    <PostUpload reload={loadClubPost}/>
    {clubPostData.map((post) => {
      // -------Like Count--------
      const handleLike = (postId) => {
        axios({
          headers: { Authorization: `Bearer ${token}` },
          method: "get",
          url: `https://rmit-club-dhyty.ondigitalocean.app/api/posts/${postId}/like`,
          data: {
            postId,
          },
        })
          .then((response) => {
            loadClubPost();
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      // ------------Read More--------------
      const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        if (text.length <= 99) {
          return (
            <div>
              <p className="text">{text}</p>
            </div>
          );
        } else {
          return (
            <div>
              <p className="text">
                {isReadMore ? text.slice(0, 100) : text}

                <span onClick={toggleReadMore} className="readOrHide">
                  {isReadMore ? "...read more" : " show less"}
                </span>
              </p>
            </div>
          );
        }
      };
      // edit Box
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

      // ------Dropdown Menu For Post Setting------
      const menu = (
        <Menu
          style={{
            width: "5rem",
            textAlign: "center",
          }}
          items={[
            {
              key: "1",
              label: (
                <Button
                  style={{
                    all: "unset",
                  }}
                >
                  {" "}
                  Edit
                </Button>
              ),
              onClick: () => {
                showModal();
              },
              icons: <EditOutlined />,
            },
            {
              key: "2",

              label: (
                <Button
                  style={{
                    all: "unset",
                  }}
                  onClick={() => {
                    deletePost();
                  }}
                >
                  {" "}
                  Delete
                </Button>
              ),
              danger: true,
            },
          ]}
        />
      );

      // ------ Delete Post ------------
      const deletePost = () => {
        axios({
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
          url: `https://rmit-club-dhyty.ondigitalocean.app/api/posts/${post._id}`,
        })
          .then((response) => {
            clubPostData.slice(0, post._id);
            loadClubPost();
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      return (
        <div
          className="PostContainer"
          key={`${post._id}?${new Date().getTime()}`}
        >
          {/* -----Post Header----- */}
          <div className="PostHeader">
            {/* Profile Image */}
            <div className="ProfileImage">
              <Avatar
                size={60}
                src={post.author.avatarUrl}
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
                  {post.author.username}
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
                  {post.createAt}
                </p>
              </div>
              <div
                style={{
                  opacity: "0.6",
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                <p>{post.location}</p>
              </div>
            </div>
            {/* Post Setting */}
            <div className="PostSetting">
              {post.updateAt ? (
                <p
                  style={{
                    opacity: "0.6",
                    paddingTop: "13px",
                  }}
                >
                  Updated:{post?.updateAt}
                </p>
              ) : (
                ""
              )}
              <Dropdown overlay={menu} placement="bottomRight">
                <button
                  style={{
                    padding: "0 ",
                    margin: "0 0 2rem 0",
                    border: "none",
                    background: "none",
                    fontSize: "1.4rem",
                    height: "64px",
                  }}
                >
                  <SettingOutlined />
                </button>
              </Dropdown>

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
              <ReadMore>{post.content}</ReadMore>
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
                {post.images.map((image) => {
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
                <p>{post.likes.length}</p>
              </div>

              <div className="ResultIcon">
                <LikeOutlined />
              </div>

              <div className="CommentsResult">
                <p style={{ fontSize: "18px", paddingTop: "5px" }}>
                  {post.comments.length}
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
            <button className="Button" onClick={() => handleLike(post._id)}>
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
            <React.Fragment>
              <CommentsBox
                data={post.comments}
                postId={post._id}
                userimage={post.author.avatarUrl}
                loadPost={loadClubPost}
              />
              <div className="CommentListContainer">
                {post.comments.map((comment) => {
                  return (
                    <Comment
                      data={comment}
                      key={comment._id}
                      loadPost={loadClubPost}
                    />
                  );
                })}
              </div>
            </React.Fragment>
          )}
        </div>
      );
    })}
  </React.Fragment>
  )
};

export default ClubPosts;