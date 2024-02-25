import React from 'react'
import "./rightbar.css"
import ordinary from "../Images/ordinary.jpg";
import perfume from "../Images/perfume.jpg";
import bag from "../Images/bag.jpg";
import image2 from "../Images/image2.jpg";
import image1 from "../Images/image1.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import addFriends from "../Images/add-user.png";
export default function Rightbar() {
    return (
        <div className='rightbar'>
            <div className='rightcontainer'>
                <div className='adsContainer'>
                    <img src={`${ordinary}`} className='adsimg' alt="" />
                    <div>
                        <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>The ordinary</p>
                        <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Shop now</p>
                    </div>
                </div>
                <div className='adsContainer'>
                    <img src={`${perfume}`} className='adsimg' alt="" />
                    <div>
                        <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>Chanel</p>
                        <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Shop now</p>
                    </div>
                </div>
                <div className='adsContainer'>
                    <img src={`${bag}`} className='adsimg' alt="" />
                    <div>
                        <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>Chanel</p>
                        <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Shop now</p>
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
