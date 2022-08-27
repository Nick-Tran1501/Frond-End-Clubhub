/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState,useEffect} from 'react';
import axios from "axios"
import './Feeds.css';
import PostList from '../postlists/PostList';

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
      <PostList 
        data={postData}
      />
    </div>
  )
}

export default Feed;