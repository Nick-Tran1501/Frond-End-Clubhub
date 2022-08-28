import axios from "axios";
import React from "react";
import "./Comment.css";
import { Avatar, Input } from "antd";

const { TextArea } = Input;

const Comment = () => {
  return (
    <React.Fragment>
      <div className="CommentContainer">
        <div className="Comment">
          <Avatar
            size={30}
            src={
              "https://www.24h.com.vn/cong-nghe-thong-tin/da-co-the-tao-den-5-profile-cho-mot-tai-khoan-facebook-c55a1378024.html"
            }
            className="OwnerAvatar"
          />
          <div className="UserComment">
            <div className="CommentOwner">
              <p>Nick</p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, fuga?</p>
            <div className="CommentTime">
              <p>9:00 Am</p>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Comment;
