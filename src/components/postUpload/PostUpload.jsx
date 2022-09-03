import React, {useState, useEffect} from 'react';
import "../../pages/profile/ProfilePage.css";

import "antd/dist/antd.css";
import { Modal } from 'antd';
import {CloseCircleOutlined} from '@ant-design/icons';


export default function PostUpload() {
    const [post, setPost] = useState(false);
    const [postImg, setPostImg] = useState([]);

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
        const fileList = Promise.all([...e.target.files].map((file) => {
            file.preview = URL.createObjectURL(file)
            console.log(file.preview)
            setPostImg((prev) => [...prev, file.preview])
        }))
        // file.preview = URL.createObjectURL(file)
        // setPostImg(file)
        fileList();
    }
  
    const handleOk = () => {
      setPost(false);
    };
  
    const handleCancel = () => {
      setPost(false);
    };
    return (
        <div className='main-home'>
            <div className='postInput mpost'>
                <form className="account">
                    <div className="profile_picture">
                        <img src="image/avatar.png" alt="profile" /> 
                    </div>
                    <input type="text" placeholder="What's on your mind?" id="caption" onClick={showPost} />
                    <label className="btn btn_primary" id="post_btn" onClick={showPost}>Post</label>
                </form>
            </div>
            

            <Modal title="Post" visible={post} onOk={handleOk} onCancel={handleCancel}>
                <form  onSubmit={handleOk} className="upload_image" id="post_form">
                    <div className="user_infor">
                        <div className="profile_picture">
                            <img src="image/default_avata_girl.png" alt="profile"/>
                        </div>
                        <p>Doraemon</p>

                    </div>

                    <div className="caption">
                        <textarea name="text" placeholder="What's on your mind?" className='inputField' style={{width: "100%"}}></textarea>
                    </div>

                    <div className="file_img" id="post_upload">
                        {postImg.length > 0 ? postImg.map((prev, index) => 
                            <div className='post_img'>
                                <img src={prev} alt="post image" />
                                <CloseCircleOutlined className='deleteIcon' />
                            </div>
                        ) :
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
