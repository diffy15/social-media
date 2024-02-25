import React from 'react'
import "./profilemainPost.css"
import coverimage from "../Images/coverpic1.jpg";
import ContentPost from '../ContentPostContainer/ContentPost'
import Post from '../PostContainer/Post';
export default function ProfileMainPost() {
  return (
    <div className='ProfilemainPostContainer'>
      <div>
        <img src={`${coverimage}`} className="profileCoverimage" alt="" />
        <h2 style={{marginTop:-43 , color:"white" , textAlign:"start" , marginLeft:"34px"}}>Your profile</h2>
      </div>
      <ContentPost />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
