import React from 'react';
import "../profile.css";
import "antd/dist/antd.css";


const Profile_bg = () => {
  return (
    <div>
        {/* <!-- profile-cover --> */}
        <div className="ab bg-image">
            <button className="btn btn-sm">Edit cover image</button>
        </div>
        {/* <!-- profile-info --> */}
        <div className="ab profile-info">
            <div className="pd-left">
            <div className="pdl-row">
                <img className="pfi-img" src="image/avatar.png" alt="profile-image" id="profile_btn" />
                <div>
                <h1>Doraemon</h1>
                <p>52 friends, 5 muture friends</p>
                <div className="fr-list">
                    <img src="image/Image1.jpg" alt="" />
                    <img src="image/Image2.jpg" alt="" />
                    <img src="image/Image3.jpg" alt="" />
                    <img src="image/Image2.jpg" alt="" />
                    <img src="image/Image1.jpg" alt="" />
                </div>
                </div>


                {/* <!--UPLOAD IMAGE FORM--> */}
                <div id="overlay">
                <form action="my_profile.php" method="POST" enctype="multipart/form-data" className="upload_image" id="post_form">
                    <div className="form_title">
                    <h3>Change profile image</h3>
                    <i className="fa-regular fa-circle-xmark" id="close_btn"></i>
                    </div>

                    <div className="user_infor">
                    <div className="profile_picture">
                        <img src="<?php echo $image; ?>" alt="profile" />
                    </div>
                    <p>Doraemon</p>
                    </div>

                    <div className="file_img">
                    <label for="file_image">
                        <span><i className="fa-regular fa-image"></i></span>
                        <p>Add an image</p>
                    </label>
                    <input type="file" name="file_image" id="file_image" />
                    </div>

                    <input type="submit" value="Change" name="change_profile" className="btn btn_primary" />
                </form>
                </div>

            </div>
            <div id="edit_profile_btn" className="pdl-row">
                <button className="btn">Edit Profile</button>
            </div>
            </div>


            <div className="pd-right">
            <ul className="link">
                <li><a href="#">Post</a></li>
                <li><a href="#">Intro</a></li>
                <li><a href="#">Friends</a></li>
                <li><a href="#">Images</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">More</a></li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Profile_bg