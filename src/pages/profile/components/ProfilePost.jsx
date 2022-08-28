import React, {useState, useEffect} from 'react';
import "../ProfilePage.css";
import Feed from '../../../components/feed/Feeds';
import "antd/dist/antd.css";
import { Modal } from 'antd';

export default function Profile_main_post() {
    const [post, setPost] = useState(false);

    const showPost = () => {
        setPost(true);
    };
  
    const handleOk = () => {
      setPost(false);
    };
  
    const handleCancel = () => {
      setPost(false);
    };
    return (
        <div className='main-post'>
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
                    <select name="mode" id="mode">
                        <option value="1">Private (Only me)</option>
                        <option value="2">Internal</option>
                        <option value="3">Public</option>
                    </select>

                    <div className="caption">
                        <input type="text" name="text" placeholder="What's on your mind?" />
                    </div>

                    <div className="file_img" id="post_upload">
                        <label htmlFor="imgInp">
                            <span><i className="fa-regular fa-image"></i></span>
                            <p>Add an image</p>
                        </label>
                        <input type="file" name="u_image" id="imgInp"/>
                        <input type="hidden" id="inputImageUrl" name="imageUrl"/>
                    </div>
                </form>
            </Modal>

            {/* POSTS */}
            <Feed />
        </div>
    )
}