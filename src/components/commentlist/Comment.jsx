import React, { useState } from "react";
import "./Comment.css";
import { Avatar, Dropdown, Menu, Button, Modal, Input } from "antd";
import { SettingOutlined, EditOutlined } from "@ant-design/icons";
import axios from "axios";
const Comment = ({ data, loadPost }) => {
  const [visible, setVisible] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const [editing, setEditing] = useState(null);

  const onEdit = (record) => {
    setVisible(true);
    setEditing({ ...record });
  };
  const resetEditing = () => {
    setVisible(false);
    setEditing(null);
  };
  const menu = (
    <Menu
      style={{
        width: "5rem",
        textAlign: "center",
      }}
      items={[
        {
          key: "1",
          label: (
            <Button
              style={{
                all: "unset",
              }}
              onClick={() => {
                onEdit(data);
                setVisible(true);
              }}
            >
              Edit
            </Button>
          ),
         
          icons: <EditOutlined />,
        },
        {
          key: "2",

          label: (
            <Button
              style={{
                all: "unset",
              }}
              onClick={() => {
                deleteComment(data._id);
              }}
            >
              Delete
            </Button>
          ),
          danger: true,
        },
      ]}
    />
  );

  // ----- Delete Comment ------
  const token = localStorage.getItem("token");
  const deleteComment = (commentId) => {
    axios({
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
      url: `https://rmit-club-dhyty.ondigitalocean.app/api/comment/${commentId}`,
    })
      .then((response) => {
        loadPost();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //--------Update Comment----------
  const updateComment = (id) => {
    console.log("commentid",id);
    axios({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "PUT",
      url: `https://rmit-club-dhyty.ondigitalocean.app/api/comment/${id}`,
      data: { content: editing.content },
    })
    .then((response) => {
      setVisible(false);
      loadPost();
      console.log(response)
    
    })
    .catch((error) => {console.log(error)})
  };

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
          <Dropdown overlay={menu} placement="bottomLeft">
            <button
              style={{
                padding: "0",
                border: "none",
                background: "none",
                fontSize: "0.9rem",
              }}
            >
              <SettingOutlined />
            </button>
          </Dropdown>

          <Modal
            title="Update Comment"
            visible={visible}
            onCancel={() => {
              setVisible(false);
            }}
            onOk={() => {
              setCommentData((pre) => {
                return pre.map((data) => {
                  if (data._id === editing._id) {
                    return editing;
                  } else {
                    return data;
                  }
                });
              });
              updateComment(editing._id);
              resetEditing();
            }}
          >
            <div>
              <Input.TextArea
                rows={3}
                value={editing?.content}
                onChange={(e) => {
                  setEditing((pre) => {
                    return { ...pre, content: e.target.value };
                  });
                }}
              />
            </div>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Comment;
