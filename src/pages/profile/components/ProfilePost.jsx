import React, { useState, useEffect } from "react";
import "../ProfilePage.css";
import "antd/dist/antd.css";
import ClubPosts from "../../../components/posts/ClubPost"

export default function ProfilePost() {
  const [post, setPost] = useState(false);
  const [postImg, setPostImg] = useState();

  useEffect(() => {
    return () => {
      postImg && URL.revokeObjectURL(postImg.preview);
    };
  }, [postImg]);
  const showPost = () => {
    setPost(true);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setPostImg(file);
  };

  const handleOk = () => {
    setPost(false);
  };

  const handleCancel = () => {
    setPost(false);
  };

  return (
    <div className="main-post">
      {/* Post Upload */}
      {/* <PostUpload /> */}
      {/* POSTS */}
      <div className="PostListContainer">
        <ClubPosts />
      </div>
    </div>
  );
}
