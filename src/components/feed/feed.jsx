/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState,useEffect} from 'react';
import axios from "axios"
import './feed.css';
import PostList from '../PostList/PostList';

const Feed = () => {
  
  // ---------Data Collection----------
  const [postData,setPostData] =useState([])

  useEffect(()=>{
    axios({
      method:"get",
      url:"https://rmit-club-dhyty.ondigitalocean.app/api/posts/",
    })
    .then(response => {
      // console.log(response.data)
      setPostData(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[])

  // console.log(postData)
  return (
    <div className='feedContainer'> 
      <div id='inner'>
        <PostList 
          data={postData}
        />
      </div>
    </div>
  )
}

export default Feed;