import React from 'react'
import "./profilerightbar.css"
import image2 from "../Images/image2.jpg";
import image1 from "../Images/image1.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import pic1 from "../Images/pic1.jpg";
import pic2 from "../Images/pic2.jpg";
import pic3 from "../Images/pic3.jpg";

import addFriends from "../Images/add-user.png";
export default function ProfileRightbar() {
    return (
        <div className='Profilerightbar'>
            <div className='Profilerightcontainer'>
                <h3>Friend requests</h3>
               <div>
                <div>
                <div style={{display:'flex' , alignItems:"center" , marginLeft:10 , marginBottom:"10px" , cursor:"pointer"}}>
                   <img src={`${pic2}`} className='Friendsimage' alt=''/>
                   <p style={{textAlign:"start" , marginLeft:"10px"}}>Liam wants to be your friend</p>
                </div> 
                <div style={{display:"flex" , justifyContent:"space-around"}}>
                    <button style={{paddingLeft:"25px" , paddingRight:"25px" , paddingTop:5, paddingBottom:5 , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"10px"}}>Accept</button>
                    <button style={{paddingLeft:"25px" , paddingRight:"25px" , paddingTop:5, paddingBottom:5 , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"10px"}}>Deny</button>
                </div>
                </div>
                <div>
                <div style={{display:'flex' , alignItems:"center" , marginLeft:10 , marginBottom:"10px" , cursor:"pointer"}}>
                   <img src={`${pic1}`} className='Friendsimage' alt=''/>
                   <p style={{textAlign:"start" , marginLeft:"10px"}}>Hazel wants to be your friend</p>
                </div> 
                <div style={{display:"flex" , justifyContent:"space-around"}}>
                    <button style={{paddingLeft:"25px" , paddingRight:"25px" , paddingTop:5, paddingBottom:5 , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"10px"}}>Accept</button>
                    <button style={{paddingLeft:"25px" , paddingRight:"25px" , paddingTop:5, paddingBottom:5 , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"10px"}}>Deny</button>
                </div>
                </div>
                <div>
                <div style={{display:'flex' , alignItems:"center" , marginLeft:10 , marginBottom:"10px" , cursor:"pointer"}}>
                   <img src={`${pic3}`} className='Friendsimage' alt=''/>
                   <p style={{textAlign:"start" , marginLeft:"10px"}}>Lily wants to be your friend</p>
                </div> 
                <div style={{display:"flex" , justifyContent:"space-around"}}>
                    <button style={{paddingLeft:"25px" , paddingRight:"25px" , paddingTop:5, paddingBottom:5 , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"10px"}}>Accept</button>
                    <button style={{paddingLeft:"25px" , paddingRight:"25px" , paddingTop:5, paddingBottom:5 , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"10px"}}>Deny</button>
                </div>
                </div>
                
               </div>
            

            </div>

            <div className='rightcontainer2'>
                <h3 style={{textAlign:"start" , marginLeft:"10px"}}>Suggested for you</h3>
                <div style={{marginTop:"-10px"}}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={`${image2}`} className='Profileimage' alt="" />
                            <div>
                                <p style={{ marginLeft: "10px" , textAlign:'start'}}>Sam</p>
                                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa"}}>Suggested for you</p>
                                
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" , cursor:'pointer' }}>
                            <img src={`${addFriends}`} className='addfriend' alt="" />
                        </div>
                    </div>
                </div>

                <div style={{marginTop:"-10px"}}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={`${image1}`} className='Profileimage' alt="" />
                            <div>
                                <p style={{ marginLeft: "10px" , textAlign:'start'}}>Grace</p>
                                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa"}}>followed by Sam</p>
                                
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%", cursor:'pointer' }}>
                            <img src={`${addFriends}`} className='addfriend' alt="" />
                        </div>
                    </div>
                </div>

                <div style={{marginTop:"-10px"}}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={`${image3}`} className='Profileimage' alt="" />
                            <div>
                                <p style={{ marginLeft: "10px" , textAlign:'start'}}>Catherine</p>
                                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa"}}>followed by Sam</p>
                                
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%", cursor:'pointer' }}>
                            <img src={`${addFriends}`} className='addfriend' alt="" />
                        </div>
                    </div>
                </div>

                <div style={{marginTop:"-10px"}}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={`${image4}`} className='Profileimage' alt="" />
                            <div>
                                <p style={{ marginLeft: "10px" , textAlign:'start'}}>Elena</p>
                                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa"}}>followed by Sam</p>
                                
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%", cursor:'pointer'  }}>
                            <img src={`${addFriends}`} className='addfriend' alt="" />
                        </div>
                    </div>
                </div>

                <div style={{marginTop:"-10px"}}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={`${image5}`} className='Profileimage' alt="" />
                            <div>
                                <p style={{ marginLeft: "10px" , textAlign:'start'}}>Mike</p>
                                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa"}}>followed by Sam</p>
                                
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" , cursor:'pointer' }}>
                            <img src={`${addFriends}`} className='addfriend' alt="" />
                        </div>
                    </div>
                </div>

                <div style={{marginTop:"-10px"}}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: "center" }}>
                            <img src={`${image6}`} className='Profileimage' alt="" />
                            <div>
                                <p style={{ marginLeft: "10px" , textAlign:'start'}}>Olive</p>
                                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa"}}>followed by Sam</p>
                                
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%", cursor:'pointer'  }}>
                            <img src={`${addFriends}`} className='addfriend' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
