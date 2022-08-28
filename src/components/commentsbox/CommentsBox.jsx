import axios from "axios";
import React from "react";
import "./CommentsBox.css";
import { Avatar, Input, Button } from "antd";
import  CommentList  from "../commentlist/CommentList";
const CommentsBox = () => {
  const { TextArea } = Input;

  return (
    <React.Fragment>
      <div className="CommentsBoxContainer">
        <div className="CommentBox">
          <Avatar
            size={30}
            src={
              "https://www.24h.com.vn/cong-nghe-thong-tin/da-co-the-tao-den-5-profile-cho-mot-tai-khoan-facebook-c55a1378024.html"
            }
          />
          <TextArea rows={5} maxLength={500}></TextArea>
        </div>

        <div className="SubmitButtonContainer">
          <Button type="primary">
            Submit
          </Button>
        </div>
        
      </div>  
      <CommentList/>
    </React.Fragment>
  );
};

export default CommentsBox;
