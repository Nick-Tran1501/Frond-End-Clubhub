import Post from "../posts/Post";
import React from "react";


const PostList = ({data}) => {
  console.log(data)

 return(
  <React.Fragment>
   {data.map(post => 
    
    <Post
      data={post}
    />
    
   )}
    
  </React.Fragment>
 )
}

export default PostList