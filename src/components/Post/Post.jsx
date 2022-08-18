/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "antd/dist/antd.min.css";
import "./Post.css";
import { Image, Button, Comment, Form, Input, List, Carousel } from "antd";
import {
  EditOutlined,
  LikeOutlined,
  ShareAltOutlined,
  CommentOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import moment from "moment";


const { TextArea } = Input;

const Post = () => {
  // ------Show Comments-----
  const [show, setShow] = useState(false);

  // -------Like Count--------
  const [likeCount, setLikeCount] = useState(0);
  const handleLike = () => {
    setLikeCount((prevState) => prevState + 1);
  };

  const CommentList = ({ comments }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={(props) => <Comment {...props} />}
    />
  );

  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </>
  );

  // -------Comment Box-------
  const CommentsContainer = () => {
    const [comments, setComments] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [value, setValue] = useState("");

    const handleSubmit = () => {
      if (!value) return;
      setSubmitting(true);

      setTimeout(() => {
        setSubmitting(false);
        setValue("");
        setComments([
          ...comments,
          {
            author: "Han Solo",
            avatar: Image,
            content: <p>{value}</p>,
            datetime: moment().fromNow(),
          },
        ]);
      }, 1000);
    };

    const handleChange = (e) => {
      setValue(e.target.value);
    };

    return (
      <div>
        <Comment
          avatar={
            <Image width="100%" src={require("../../image/Image1.jpg")} />
          }
          content={
            <Editor
              onChange={handleChange}
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
        {comments.length > 0 && <CommentList comments={comments} />}
      </div>
    );
  };

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

  return (
    <React.Fragment>
      <div className="PostContainer">
        {/* -----Post Header----- */}
        <div className="PostHeader">
          {/* Profile Image */}
          <div className="ProfileImage">
            <img
              src={require("../../image/Image1.jpg")}
              alt="Profile"
              width="100%"
              height="100%"
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          {/* Post Info */}
          <div className="PostInfo">
            <div>
              <p
                style={{
                  fontWeight:"bold"
                }}
              >Nam</p>
            </div>

            <div>
              <p
                style={{
                  opacity:"0.6",
                  fontWeight:"bold"
                }}
              >Today</p>
            </div>
            <div
              style={{
                opacity:"0.6",
                fontWeight:"bold"
              }}
            >
              <p>RMIT University</p>
            </div>
          </div>
          {/* Post Setting */}
          <div className="PostSetting">
            <button
              style={{
                padding: "0",
                border: "none",
                background: "none",
              }}
            >
              <EditOutlined />
            </button>
          </div>
        </div>

        {/* -----Post Content----- */}
        <div className="PostContent">
          <div className="Content">
            <ReadMore>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quam
              ratione natus laudantium? Sint est, inventore ipsa totam sunt
              tempore, laboriosam veniam voluptatem voluptas, illum at
              blanditiis omnis quasi unde in quae. Dolorem dolor deserunt
              accusamus quas officia, esse atque, in vero expedita soluta
              debitis, natus sint ipsam magnam repudiandae nisi aspernatur vel
              tenetur dignissimos pariatur possimus delectus. Sed, ratione.
              Neque ipsum omnis laborum perspiciatis repellendus. Minus
              provident molestiae dolorem eum iure. Aliquam saepe odit culpa
              laudantium possimus, nam maiores est quaerat adipisci, vero modi,
              ipsa rerum commodi nostrum dignissimos facilis pariatur ullam sint
              assumenda aperiam fugit. Iure, quidem possimus.
            </ReadMore>
          </div>

          <div className="PostImage">
            <Carousel
              dots={false}
              arrows
              prevArrow={<LeftOutlined/>}
              nextArrow={<RightOutlined/>}
              style={{
                // width:"100%",
                paddingRight:"5rem"
              }}
            >
              <Image
                width="100%"
                height="20rem"
                src={require("../../image/Image1.jpg")}
                style={{
                  objectFit:"contain"
                }}
              />
              <Image
                width="100%"
                height="20rem"
                src={require("../../image/Image2.jpg")}
                style={{
                  objectFit:"contain"
                }}
              />
              <Image
                width="100%"
                height="20rem"
                src={require("../../image/Image3.jpg")}
                style={{
                  objectFit:"contain"
                }}
              />
              <Image
                width="100%"
                height="20rem"
                src={require("../../image/ClubHub_Trans.png")}
                style={{
                  objectFit:"contain"

                }}
              />
              <Image
                width="100%"
                height="20rem"
                src={require("../../image/Galaxy-login.png")}
                style={{
                  objectFit:"contain"

                }}
              />
              <Image
                width="100%"
                height="20rem"
                src={require("../../image/Image3.jpg")}
                style={{
                  objectFit:"contain"
                }}
              />



            </Carousel>
          </div>

          <div className="PostResult">
            <div className="ReactResult">
              <p>{likeCount}</p>
            </div>

            <div className="ResultIcon">
              <LikeOutlined />
            </div>

            <div className="CommentsResult">
              <p>
                100{" "}
                <span>
                  {" "}
                  <CommentOutlined></CommentOutlined>
                </span>
              </p>
            </div>
          </div>
          <hr />
        </div>

        {/* -------Post Footer------ */}
        <div className="PostFooter">
          <button className="Button" onClick={handleLike}>
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

        {show && <CommentsContainer />}
      </div>
    </React.Fragment>
  );
};

export default Post;
