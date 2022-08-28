import React from "react";
import "./Comment.css";
import { Avatar} from "antd";


const Comment = ({data}) => {
  return (
    <React.Fragment>
      <div className="CommentContainer">
        <div className="Comment">
          <Avatar
            size={30}
            src={
              data.author.avatarUrl
            }
            className="OwnerAvatar"
          />
          <div className="UserComment">
            <div className="CommentOwner">
              <p>{data.author.username}</p>
            </div>
            <p>{data.content}</p>
            <div className="CommentTime">
              <p>{data.createAt}</p>
            </div>
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default Comment;
