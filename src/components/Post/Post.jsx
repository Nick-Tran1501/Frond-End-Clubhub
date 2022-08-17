/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "antd/dist/antd.min.css";
import "./Post.css";
import { Image, Button, Comment, Form, Input, List } from "antd";
import {
  EditOutlined,
  LikeOutlined,
  ShareAltOutlined,
  CommentOutlined,
} from "@ant-design/icons";
import moment from "moment";

const { TextArea } = Input;



const Post = () => {
  // ------Show Comments-----
  const [show, setShow] = useState(false);

  // -------Like Count--------
  const [likeCount, setLikeCount] = useState(0);
  const handleLike = () => {
    setLikeCount(prevState => prevState +1)
  }


  

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
          {comments.length > 0 && <CommentList comments={comments}/>}
        </div>
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
              <p>Nam</p>
            </div>

            <div>
              <p>Nam</p>
            </div>
            <div>
              <p>Nam</p>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            ipsa, molestiae laudantium nostrum voluptates inventore dolore
            laborum optio, perspiciatis accusantium architecto repudiandae.
            Repudiandae, consequuntur corrupti. Quod perferendis necessitatibus,
            nihil aperiam ipsam, ad, molestias asperiores delectus sit maiores
            inventore officia magni quos animi sed corrupti vero nam distinctio
            culpa reprehenderit facilis nostrum accusamus repellendus.
            Blanditiis commodi inventore laborum nihil eius beatae soluta ullam
            ducimus, vero qui culpa illum, fuga illo in rerum, velit aliquid
            placeat! Dolorem perspiciatis aspernatur tempora neque veritatis
            amet nulla ipsa quam, non nostrum aperiam perferendis consequuntur
            aliquid fugiat exercitationem quae voluptatibus a quo dolore quos
            fuga nobis.
          </div>

          <div className="PostImage">
            <Image width="100%" src={require("../../image/Image1.jpg")} />
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
                100 <span> <CommentOutlined></CommentOutlined></span>
              </p>
            </div>
          </div>
          <hr />
        </div>

        {/* -------Post Footer------ */}
        <div className="PostFooter">
          <button className="Button"
            onClick={handleLike}
          >
            <div className="ActionButtons">
              <p>Like</p>
              <LikeOutlined className="ButtonIcons" />
            </div>
          </button>

          <button className="Button">
            <div 
              className="ActionButtons"
              onClick={()=>{setShow(!show)}}
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
        
        {show && <CommentsContainer/>}
        
      </div>
    </React.Fragment>
  );
};

export default Post;
