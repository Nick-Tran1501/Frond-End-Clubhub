import React from "react";
import "./CommentList.css";
import Comment from "./Comment";
const CommentList = ({ data }) => {
  

  return (
    <React.Fragment>
      <div className="CommentListContainer">
        {data.map(comment => {
          return(
            <Comment data={comment}/>
          )
        })}
      </div>
    </React.Fragment>
  );
};



export default CommentList;
