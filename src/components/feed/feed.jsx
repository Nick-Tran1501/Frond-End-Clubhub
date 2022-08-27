/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect} from 'react';
import axios from "axios"
import './feed.css';
import PostList from '../PostList/PostList';

const feed = () => {
  // console.log("hi");
  useEffect(()=>{
    axios({
      method:"get",
      url:"https://rmit-club.herokuapp.com/api/posts/",
    })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  },[])


  return (
    <div className='feedContainer'> 
      <PostList />
    </div>
  )
}

export default feed