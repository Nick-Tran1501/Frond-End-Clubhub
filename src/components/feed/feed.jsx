import React from 'react';
import './feed.css';
import PostList from '../PostList/PostList';

const feed = () => {
  return (
    <div className='feedContainer'> 
      <PostList/>
    </div>
  )
}

export default feed