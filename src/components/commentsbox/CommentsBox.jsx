import React, { useState } from "react";
import "./CommentsBox.css";
import { Avatar, Input, Button, notification, Space } from "antd";
import CommentList from "../commentlist/CommentList";
import axios from "axios";

const CommentsBox = ({ data, postId, userimage }) => {
  const { TextArea } = Input;

  const openNotificationWithIcon = (type) => {

    if(type === "success"){
      notification["success"]
      ({
        message: "Notification Title",
        description:
          "Comment Successfully",
        
      })
      
    }
    else{
      notification["error"]
      ({
        message: "Notification Title",
        description:
          "Please enter your comment",
      })
      
    }
  };

  const [contents, setContents] = useState("");

  const token = localStorage.getItem("token");
  const handleComment = (postId) => {
    axios({
      headers: { Authorization: `Bearer ${token}` },
      method: "post",
      url: "https://rmit-club-dhyty.ondigitalocean.app/api/comment",
      data: {
        post: postId,
        content: contents,
      },
    })
      .then((response) => {
        console.log(response);
        return(
          <Space>
            {openNotificationWithIcon("success")}
          </Space>
        )
      })
      .catch((error) => {
        console.log(error);
        <Space>
            {openNotificationWithIcon("error")}
          </Space>
      });
  };

  return (
    <React.Fragment>
      <div className="CommentsBoxContainer">
        <div className="CommentBox">
          <Avatar
            size={30}
            src={
              userimage
            }
          />
          <TextArea
            rows={5}
            maxLength={500}
            onChange={(e) => {
              setContents(e.target.value);
            }}
            value={contents}
          ></TextArea>
        </div>

        <div className="SubmitButtonContainer">
          <Button
            type="primary"
            onClick={() => {
              handleComment(postId);
              setContents("")
            }}
          >
            Submit
          </Button>
        </div>
      </div>

      <CommentList data={data} />
    </React.Fragment>
  );
};

export default CommentsBox;
