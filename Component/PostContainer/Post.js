import React, { useState } from 'react'
import "./post.css"
import ProfileImage from "../Images/Profile.jpg";
import LikeIcon from "../Images/like.png";
import CommentIcon from "../Images/speech-bubble.png";
import Shareicon from "../Images/share.png";
import Moreoption from "../Images/more.png";
import anotherlikeicon from "../Images/setLike.png";
import image5 from "../Images/image5.jpg";
export default function Post() {
    const [Like, setLike] = useState(LikeIcon);
    const [count, setCount] = useState(10);
    const [Comments, setComments] = useState([]);
    const [commentwriting, setcommentwriting] = useState('');
    const [show , setshow] = useState(false);

    const handleLike = () => {
        if (Like === LikeIcon) {
            setLike(anotherlikeicon);
            setCount(count + 1);
        } else {
            setLike(LikeIcon);
            setCount(count - 1);
        }
    }

    const addComment = () => {
        const comment = {
            "id": "abc123",
            "username": "Mike",
            "title": `${commentwriting}`

        }
        setComments(Comments.concat(comment));
    }

    const handlecomment = () => {
        addComment();
    }

    console.log(Comments)

const handleshow =() => {
    if(show === false){
        setshow(true)
    }else{
        setshow(false)
    }
}
    return (
        <div className='PostContainer'>
            <div className='SubPostContainer'>
                <div>
                    <div style={{ display: 'flex', alignItems: "center" }}>
                        <img src={`${ProfileImage}`} className='PostImage' alt="" />
                        <div>
                            <p style={{ marginLeft: '5px', textAlign: "start" }}>Sam</p>
                            <p style={{ fontSize: "11px", textAlign: "start", marginLeft: 5, marginTop: -13, color: "#aaa" }}>Followed by Grace</p>
                        </div>
                        <img src={`${Moreoption}`} className='moreicons' alt="" />
                    </div>


                    <p style={{ textAlign: 'start', width: "96%", marginLeft: 10, marginTop: 0 }}>Strolling through familiar streets, I pause to reflect on the journey behind me.Always appreciate life's simple moments  </p>
                    <img src={`${ProfileImage}`} className='PostImages' alt="" />
                    <div style={{ display: "flex" }}>

                        <div style={{ display: "flex", marginLeft: "10px" }}>
                            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                                <img src={`${Like}`} className='iconsforPost' onClick={handleLike} alt="" />
                                <p style={{ marginLeft: "6px" }}>{count} Likes</p>
                            </div>


                            <div style={{ display: "flex", alignItems: "center", marginLeft: 20, cursor: "pointer" }}>
                                <img src={`${CommentIcon}`} className='iconsforPost' onClick={handleshow} alt="" />
                                <p style={{ marginLeft: "6px" }}>100k Comments</p>
                            </div>
                        </div>


                        <div style={{ display: "flex", alignItems: "center", marginLeft: 150, cursor: "pointer" }}>
                            <img src={`${Shareicon}`} className='iconsforPost' alt="" />
                            <p style={{ marginLeft: "6px" }}> Share</p>
                        </div>
                    </div>
                    {show === true ?
                    <div style={{padding:'10px'}}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={`${image5}`} className='PostImage' alt="" />
                        {/*<p style={{marginLeft:"6px"}}>Sam</p>*/}
                        <input type="text" className='commentinput' placeholder='Write your comment..' onChange={(e) => setcommentwriting(e.target.value)} />
                        <button className='addCommentbtn' onClick={handlecomment}>Post</button>
                    </div>
                    {Comments.map((item) => (

                        <div style={{ alignItems: "center" }}>
                            <div style={{display:"flex" , alignItems:"center"}}>
                            <img src={`${image5}`} className='PostImage' alt="" />
                            <p style={{ marginLeft: "6px" , fontSize:20 , marginTop:6}}>{item.username}</p>
                            </div>
                            <p style={{ marginLeft: "55px" , textAlign:'start' , marginTop:-16 }}>{item.title}</p>
                            <p style={{ marginLeft: "55px" , textAlign:'start' , marginTop:-10 , color:"#aaa" , fontSize:11 }}>Reply</p>
                        </div>
                    ))}
                </div>:''
                    }
                    

                </div>

            </div>
        </div>
    )
}
