import React, {useState, useEffect} from 'react';
import "../../pages/profile/ProfilePage.css";
import axios from "axios"
import "antd/dist/antd.css";
import { Modal, Row, Col } from 'antd';
import {CloseCircleOutlined} from '@ant-design/icons';


export default function PostUpload() {
    const [post, setPost] = useState(false);
    const [postImg, setPostImg] = useState([]);
    const [user,setUser] = useState({})
    const [clubId,setClubId] = useState("")
    const token = localStorage.getItem("token");
    const [postData, setPostData] = useState([]);


    //Get User
    useEffect(() => {
        axios
          .get("https://rmit-club-dhyty.ondigitalocean.app/api/user/profile", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((response) => {
            console.log(response.data);
            setUser(response.data);
            setClubId(response.data.clubs[0].club)
            
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

    const handleFile = (e) => {
        const files = e.target.files;
        console.log(files)
        // mapping all the images and set the temporary URL for previewing
        Promise.all([...e.target.files].map((file) => {
            file.preview = URL.createObjectURL(file)
            console.log(file.preview)
            setPostImg((prev) => [...prev, file.preview])
        }))
        // file.preview = URL.createObjectURL(file)
        // setPostImg(file)
    }
  
    const handleOk = () => {
      setPost(false);
    };
  
    const handleCancel = () => {
      setPost(false);
      setPostImg([])
    };

    console.log(clubId)
      
      
    // --------- Create Post ---------
    const [createPostContent, setCreatePostContent] = useState("")
    const createPost = () => {
        const formData = new FormData();
        formData.append("content", createPostContent)
        formData.append("location", "RMIT University")
        postImg.forEach(img => {

            formData.append("images", img)
        })
        
        formData.append("viewMode", "internal")
        console.log("gig",`${token}`)
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
            console.log(response)})
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

                    <div className="file_img" id="post_upload">
                        {/* Check if there is any image */}
                        {postImg.length > 0 ? 
                            postImg.length > 1 ? 
                            //If more than 2, re-scale image
                            <Row 
                            gutter={{
                                xs: 0,
                                sm: 5,
                                md: 5,
                                lg: 5,
                              }}
                            className='multi_img'>
                                {postImg.map((prev, index) => 
                                <Col span={8}>
                                    <img src={prev} alt="postImg" />
                                    <CloseCircleOutlined
                                        className='deleteIcon' 
                                        // onClick={() => {postImg.slice(index, 1);setPostImg(postImg)}} 
                                    />
                                </Col>
                                )}
                            </Row>
                            : 
                            // If 1 image, full width
                            postImg.map((prev, index) => 
                                <div className='post_img'>
                                    <img src={prev} alt="postImg" />
                                    <CloseCircleOutlined className='deleteIcon' />
                                </div>
                        ) 
                        :
                            // If there is no image yet
                            <label htmlFor="post_img">
                                <span><i className="fa-regular fa-image"></i></span>
                                <p>Add an image</p>
                            </label>
                        }
                        
                        <input type="file" name="post_img" id="post_img" onChange={handleFile} multiple />
                        
                    </div>
                </form>
            </Modal>
        </div>
    )
}
