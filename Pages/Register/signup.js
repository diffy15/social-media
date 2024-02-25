import React from 'react'
import "./signup.css"
import { Link } from 'react-router-dom';
export default function signup() {
  return (
    <div className='mainContainerForsignup'>
        <div className='submainContainer'>
            <div style={{flex:1 , marginLeft:150 , marginBottom:"170px"}}>
                <p className='logoText'>Connect<span className='part'>U</span> </p>
                <p className='introtext'>Connect with your <span className='part'>friends and family</span></p>
            </div>
            <div style={{flex:3}}>
                <p className='createaccountTxt'>Create New Account</p>
                <input type="text" placeholder='Username' className='inputText'/>
                <input type="text" placeholder='Phonenumber'className='inputText'/>
                <input type="email" name="" id="" placeholder='email' className='inputText'/>
                <input type="password" placeholder='******' name="" id="" className='inputText'/>
                <button className='btnforsignup'>Signup</button>
                <Link to={"/"}>
                <p style={{textAlign:'start', marginLeft:"30.6%"}}>Already have an account</p>
                </Link>
            </div >

        </div>
      
    </div>
  )
}
