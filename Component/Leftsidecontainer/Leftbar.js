import React from 'react'
import "./leftbar.css"
import image from "../Images/Profile.jpg";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import image7 from "../Images/image7.jpg";
import image9 from "../Images/image9.jpg";

export default function Leftbar() {
    return (
        <div className='Leftbar'>
            <div className='NotificationContainer'>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p style={{marginLeft:"-14px"}}>Notifications</p>
                    <p style={{ color: "#aaa", marginLeft:"40px" }}>See all</p>
                </div>
                <div style={{display:'flex', alignItems:"center", marginTop:-10 }}>
                    <img src={`${image}`} className='notificationimg' alt="" />
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}> Mitchell liked your post</p>
                    <img src={`${image1}`} className='likeimage' alt=""/>
                </div>
                <div style={{display:'flex', alignItems:"center", marginTop:-10 }}>
                    <img src={`${image}`} className='notificationimg' alt="" />
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}> Sam started following you</p>
                    <img src={`${image2}`} className='followinguserimage' alt=""/>
                </div>
                <div style={{display:'flex', alignItems:"center", marginTop:-10 }}>
                    <img src={`${image2}`} className='notificationimg' alt="" />
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}> Mitchell liked your post</p>
                    <img src={`${image3}`} className='likeimage' alt=""/>
                </div>
                <div style={{display:'flex', alignItems:"center", marginTop:-10 }}>
                    <img src={`${image}`} className='notificationimg' alt="" />
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}> Sam started following you</p>
                    <img src={`${image4}`} className='followinguserimage' alt=""/>
                </div>
                <div style={{display:'flex', alignItems:"center", marginTop:-10 }}>
                    <img src={`${image6}`} className='notificationimg' alt="" />
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}>Sam started following you</p>
                    <img src={`${image5}`} className='followinguserimage' alt=""/>
                </div>
                <div style={{display:'flex', alignItems:"center", marginTop:-10 }}>
                    <img src={`${image3}`} className='notificationimg' alt="" />
                    <p style={{marginLeft:"5px", color:"#aaa", fontSize:13, textAlign:"start", width:"120px"}}> Mitchell liked your post</p>
                    <img src={`${image6}`} className='likeimage' alt=""/>
                </div>
            </div>

            <div className='NotificationContainer'>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p style={{marginLeft:"-20px"}}>Explore</p>
                    <p style={{ color: "#aaa", marginLeft:"40px" }}>See all</p>
                </div>
                <div>
                    <img src={`${image}`} className='exploreimage' alt="" />
                    <img src={`${image1}`} className='exploreimage' alt="" />
                    <img src={`${image2}`} className='exploreimage' alt="" />
                    <img src={`${image3}`} className='exploreimage' alt="" />
                    <img src={`${image4}`} className='exploreimage' alt="" />
                    <img src={`${image5}`} className='exploreimage' alt="" />
                    <img src={`${image6}`} className='exploreimage' alt="" />
                    <img src={`${image7}`} className='exploreimage' alt="" />
                    <img src={`${image9}`} className='exploreimage' alt="" />
                   
                </div>
                
            </div>

        </div>
    )
}
