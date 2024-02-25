import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'
export default function login() {
  return (
    <div className='mainContainerForsignup'>
        <div className='submainContainer'>
            <div style={{flex:1 , marginLeft:150 , marginBottom:"170px"}}>
                <p className='logoText'>Connect<span className='part'>U</span> </p>
                <p className='introtext'>Connect with your <span className='part'>friends and family</span></p>
            </div>
            <div style={{flex:3}}>
                <p className='createaccountTxt'>Login</p>
               
                <input type="email" name="" id="" placeholder='Email' className='inputText'/>
                <input type="password" placeholder='******' name="" id="" className='inputText'/>
                <button className='btnforsignup'>Login</button>
                <Link to={"/"}>
                <p style={{textAlign:'start', marginLeft:"30.6%"}}>Forgot Password</p>
                </Link>
                <Link to={"/"}>
                <p style={{textAlign:'start', marginLeft:"30.6%"}}>Create new Account</p>
                </Link>
            </div >

        </div>
      
    </div>
  )
}
