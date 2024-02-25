import React from 'react'
import "./profileleftbar.css";
import image from "../Images/Profile.jpg";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import aaronpr from "../Images/aaronpr.jpg";
import linapr from "../Images/linapr.jpg";
import jackpr from "../Images/jackpr.jpg";
import rosepr from "../Images/rosepr.jpg";
import janepr from "../Images/janepr.jpg";

export default function ProfileLeftbar() {
    return (
        <div className='ProfileLeftbar'>
            <div className='NotificationContainer'>
            <img src={`${image}`} className="ProfilepageCover" alt="" />
                <div style={{display:'flex' , alignItems:'center' , marginTop:-30}}>
                    <img src={`${image2}`} className="Profilepageimage" alt="" />
                    <div>
                    <p style={{marginLeft:6 , marginTop:20 , color:"black" , textAlign:"start"}}>Sam</p>
                    <p style={{marginLeft:6 , color:"black" , textAlign:"start" , marginTop:-16 , fontSize:11}}>FullStack Developer</p>
                    </div>
                </div>
                <div style={{display:'flex' , justifyContent:'space-between'}}>
                    <p style={{color:"black" , marginLeft:20 , fontSize:"14px"}}>ProfileViews</p>
                    <p style={{color:"black" , marginRight:20 , fontSize:"12px" , marginTop:17}}>43281</p>
                </div>
              
                <div style={{display:'flex' , justifyContent:'space-between' , marginTop:-20}}>
                    <p style={{color:"black" , marginLeft:20 , fontSize:"14px"}}>Friends</p>
                    <p style={{color:"black" , marginRight:20 , fontSize:"12px" , marginTop:17}}>4381</p>
                </div>
           
                <div style={{ marginTop:-20}}>
                    <h5 style={{color:"black" , marginLeft:10 , fontSize:"14px" , marginRight:30 , marginTop:30 , textAlign:"start"}}>User bio</h5>
                    <p style={{color:"black"  , fontSize:"12px" , marginTop:-20 , textAlign:"start" , marginLeft:"10px"}}>A heart full of dreams and a cup full of coffee.</p>
                </div>
                <button style={{width:"100%" , paddingTop:7 , paddingBottom:7 , border:"none" , backgroundColor:"green" , color:"white"}}>Edit Bio</button>

            </div>

            <div className='NotificationContainer'>
                <h3>Your friends</h3>
                <div style={{display:"flex" , justifyContent:'space-between'}}>
                    <p style={{marginLeft:10}}>Friends</p>
                    <p style={{marginRight:10 , color:"#aaa"}}>See all</p>
                </div>
                <div style={{display:'flex' , flexWrap:"wrap" , marginLeft:5}}>
                    <div style={{marginLeft:4}}>
                        <img src={`${image1}`} className='friendimage' alt="" />
                        <p style={{marginTop:-2}}>Grace</p>
                    </div>
                    <div style={{marginLeft:4}}>
                        <img src={`${aaronpr}`} className='friendimage' alt="" />
                        <p style={{marginTop:-2}}>Aaron</p>
                    </div>
                    <div style={{marginLeft:4}}>
                        <img src={`${linapr}`} className='friendimage' alt="" />
                        <p style={{marginTop:-2}}>Lina</p>
                    </div>
                    <div style={{marginLeft:4}}>
                        <img src={`${jackpr}`} className='friendimage' alt="" />
                        <p style={{marginTop:-2}}>Jack</p>
                    </div>
                    <div style={{marginLeft:4}}>
                        <img src={`${rosepr}`} className='friendimage' alt="" />
                        <p style={{marginTop:-2}}>Rose</p>
                    </div>
                    <div style={{marginLeft:4}}>
                        <img src={`${janepr}`} className='friendimage' alt="" />
                        <p style={{marginTop:-2}}>Jane</p>
                    </div>
                    
                </div>
                
            </div>

        </div>
    )
}
