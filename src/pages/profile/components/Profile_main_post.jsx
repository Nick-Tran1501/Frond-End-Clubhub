import React from 'react';
import "../profile.css";
import Feed from '../../../components/feed/feed';
import "antd/dist/antd.css";

export default function Profile_main_post() {
    return (
        <div className='main-post'>
            <form action="index.php" class="account">
                <div class="profile_picture">
                    <img src="image/avatar.png" alt="profile" /> 
                </div>
                <input type="text" placeholder="What's on your mind?" id="caption" />
                <label class="btn btn_primary" id="post_btn">Post</label>
            </form>

            {/* POSTS */}
            <Feed />
        </div>
    )
}