import React from "react";
import "./Comment.css";
import { Avatar } from "antd";

const Comment = ({ data }) => {
  return (
    <React.Fragment>
      <div className="CommentContainer">
        <div className="Comment">
          <Avatar
            size={30}
            src={data.author.avatarUrl}
            className="OwnerAvatar"
          />
          <div className="UserComment">
            <div className="CommentOwner">
              <p
                style={{
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                {data.author.username}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  opacity: 0.6,
                  paddingTop: "5px",
                }}
              >
                {data.createAt}
              </p>
            </div>
            <div className="CommentContent">
              <p>{data.content}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Comment;
