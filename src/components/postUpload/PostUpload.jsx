import React, {useState, useEffect} from 'react';
import "../../pages/profile/ProfilePage.css";
import axios from "axios"
import "antd/dist/antd.css";
import { Modal, Row, Col, Upload,Button } from 'antd';
import {CloseCircleOutlined} from '@ant-design/icons';
import { createUseStyles } from "react-jss"


export default function PostUpload({reload}) {
    const [post, setPost] = useState(false);
    const [postImg, setPostImg] = useState([]);
    const [user,setUser] = useState({})
    const token = localStorage.getItem("token");
    
    const [postData, setPostData] = useState([]);

    const clubId=localStorage.getItem("clubId")

    //Get User
    useEffect(() => {
        axios
          .get("https://rmit-club-dhyty.ondigitalocean.app/api/user/profile", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            console.log(response.data);
            setUser(response.data);            
          })
          .catch((err) => console.log(err));
      }, []);

    
    useEffect(() => {
        return () => {
            postImg && postImg.map(prev => URL.revokeObjectURL(prev));
        }
    }, [postImg]);

    const showPost = () => {
        setPost(true);
    };

  
    const handleOk = () => {
      setPost(false);
     
    };
  
    const handleCancel = () => {
      setPost(false);
      setPostImg([])
    };      
    

    //Save Image To Stage
    const saveImages = (file) => {
        setPostImg(prev => [...prev,file])
      
    }

    
    // --------- Create Post ---------
    const [createPostContent, setCreatePostContent] = useState("")
    const createPost = () => {
        let formData = new FormData();
        formData.append("content", createPostContent)
        formData.append("location", "RMIT University")
        postImg.forEach(img => {

            formData.append("images", img)
        })
        
        formData.append("viewMode", "internal")
        console.log("gig",formData)
        axios({
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": `Bearer ${token}`,
            },
            url:`https://rmit-club-dhyty.ondigitalocean.app/api/posts/clubs/${clubId}`,
            method:"POST",
            data: formData
        })
        .then((response) => {
            setPost(false) 
            console.log(response)
            setPostImg([])
            {reload()}
        })
        .catch((err) => {console.log(err)})
    }
    return (
        <div className='main-home'>
            <div className='postInput mpost'>
                <form className="account">
                    <div className="profile_picture">
                        <img src={user.avatarUrl} alt="profile" /> 
                    </div>
                    <input type="text" placeholder="What's on your mind?" id="caption" onClick={showPost} />
                    <label className="btn btn_primary" id="post_btn" onClick={showPost}>Post</label>
                </form>
            </div>
            

            <Modal title="Post" visible={post} onOk={() => {
                
                createPost()

                }} onCancel={handleCancel}>
                <form  onSubmit={handleOk} className="upload_image" id="post_form">
                    <div className="user_infor">
                        <div className="profile_picture">
                            <img src={user.avatarUrl} alt="profile"/>
                        </div>
                        <p>{user.name}</p>

                    </div>

                    <div className="caption">
                        <textarea 
                            name="text" 
                            placeholder="What's on your mind?" 
                            className='inputField' 
                            style={{width: "100%"}}
                            onChange ={(e) => {
                                console.log(e.target.value)
                                setCreatePostContent(e.target.value)
                            }}
                        ></textarea>
                    </div>

                    <Upload 
                    action={(file) => saveImages(file)} 
                    multiple listType="picture" 
                    accept='.png,.jpeg,.jpg'
                    beforeUpload={(file) => {
                        console.log({file})
                        return file
                    }}
                    maxCount ={5}
                    
                    >
                        <Button>
                            Click Upload
                        </Button>
                    </Upload>

                </form>
            </Modal>
        </div>
    )
}
