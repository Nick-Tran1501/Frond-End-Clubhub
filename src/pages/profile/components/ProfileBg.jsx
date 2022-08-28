import React, {useState, useEffect} from 'react';
import "../ProfilePage.css";
import "antd/dist/antd.css";
import { Button, Modal } from 'antd';


const ProfileBg = ({page, changePage}) => {
    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);

    const showModal1 = () => {
      setModal1(true);
    };

    const showModal2 = () => {
        setModal2(true);
    };
  
    const handleOk = (event) => {
      setModal1(false);
      setModal2(false);
      console.log(event.target.files[0])
    };
  
    const handleCancel = () => {
      setModal1(false);
      setModal2(false);
    };

    const handleFile = (event) => {
        console.log(event.target.files[0])
    }

  return (
    <div>
        {/* <!-- profile-cover --> */}
        <div className="ab bg-image">
            <button className="btn btn-sm edit_cover_btn" onClick={showModal1}>Edit cover image</button>
            <Modal title="Change cover image" visible={modal1} onOk={handleOk} onCancel={handleCancel}>
                <form className="upload_image" id="post_form">
                    <div className="user_infor">
                        <div className="profile_picture">
                            <img src="image/default_avata_girl.png" alt="profile" />
                        </div>
                        <p>Doraemon</p>
                    </div>

                    <div className="file_img">
                        <label htmlFor="file_image">
                            <span><i className="fa-regular fa-image"></i></span>
                            <p>Add an image</p>
                        </label>
                        <input type="file" name="file_image" id="file_image" onChange={handleFile}/>
                    </div>
                </form>
            </Modal>
        </div>
        {/* <!-- profile-info --> */}
        <div className="ab profile-info">
            <div className="pd-left">
                <div className="pdl-row">
                    <img className="pfi-img" onClick={showModal2} src="image/avatar.png" alt="profile-image" id="profile_btn" />
                    <div>
                        <h1>CLUB NAME</h1>
                        <p>Description</p>
                        <div className="fr-list">
                            <img src="image/Image1.jpg" alt="" />
                            <img src="image/Image2.jpg" alt="" />
                            <img src="image/Image3.jpg" alt="" />
                            <img src="image/Image2.jpg" alt="" />
                            <img src="image/Image1.jpg" alt="" />
                        </div>
                    </div>

                    <Modal title="Change profile image" visible={modal2} onOk={handleOk} onCancel={handleCancel}>
                        <form className="upload_image" id="post_form">
                            <div className="user_infor">
                                <div className="profile_picture">
                                    <img src="image/default_avata_girl.png" alt="profile" />
                                </div>
                                <p>Doraemon</p>
                            </div>

                            <div className="file_img">
                                <label htmlFor="file_image">
                                    <span><i className="fa-regular fa-image"></i></span>
                                    <p>Add an image</p>
                                </label>
                                <input type="file" name="file_image" id="file_image" />
                            </div>
                        </form>
                    </Modal>
                </div>
                
                <div id="edit_profile_btn" className="pdl-row">
                    <button className="btn" onClick={showModal2}>Edit Profile</button>
                </div>
            </div>


            <div className="pd-right">
                <ul className="link">
                    <li><button onClick={() => changePage("post")} className={page === "post" ? 'profileComp active' : "profileComp"}>Post</button></li>
                    <li><button onClick={() => changePage("intro")} className={page === "intro" ? 'profileComp active' : "profileComp"}>Intro</button></li>
                    <li><button onClick={() => changePage("member")} className={page === "member" ? 'profileComp active' : "profileComp"}>Members</button></li>
                    <li><button onClick={() => changePage("media")} className={page === "media" ? 'profileComp active' : "profileComp"}>Images</button></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProfileBg;