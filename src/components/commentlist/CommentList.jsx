import axios from "axios"
import React from "react"
import "./CommentList.css"
import Comment from "./Comment"
const CommentList = () => {
  return(
    <React.Fragment>
      <div className="CommentListContainer">
        <Comment/>
      </div>
    </React.Fragment>
  )
}

export default CommentList;