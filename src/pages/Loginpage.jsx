import React from 'react'
import EmailAdd from '../assets/component/EmailAdd'
import { useState } from 'react'
import PassWord from '../assets/component/PassWord'
import CheckBox from '../assets/component/CheckBox'
import SignIn from '../assets/component/SignIn'
import GoogleSignin from '../assets/component/GoogleSignin'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'


const Loginpage = () => {
  const [emailAddress, setEmailAddress] = useState('');

  const [passWord,setPassWord] = useState('');

  const [isChecked,setIsChecked] = useState('');

  const navigate = useNavigate();


  return (
    <main>
          <div className='pattern'/>
          <div className='wrapper  flex items-center justify-center'>
            
              <h1>Welcome Back</h1>
              <p className='text-center font-[var(--font-poppins)] text-white text-white pb-4 text-sm'>Sign in to continue to Wealth Track</p> 
              <div className='bg-dark-100 border border-slate-400 rounded-md p-8 shadow-lg blackdrop-filter blackdrop-blur-sm bg-opacity-30 relative'>
                <h3 className='text-white'>
                  Email Address
                </h3>
                <EmailAdd emailAddress = {emailAddress} setEmailAddress = {setEmailAddress} />
                <h3 className='text-white mt-5'>Password</h3>
                <PassWord passWord = {passWord} setPassWord = {setPassWord} />
                <CheckBox isChecked= {isChecked} setIsChecked = {setIsChecked} />
                <div onClick={() => navigate("/home-page")}><SignIn/></div>
                <p className='flex justify-center text-white mt-3 text-sm'>New Here? <Link to='/sign-up'> Create an Account</Link></p>
                <p className='text-center text-white mt-3 text-sm'>or continue with</p>
                
                <div className="flex gap-10 justify-between">
                  <div  onClick={() => navigate("/home-page")}><GoogleSignin  text = "Google"/></div>
                  <div  onClick={() => navigate("/home-page")}><GoogleSignin  text = "GitHub"/></div>
                  
                </div>
              </div>
            
          </div>
        </main>
  )
}

export default Loginpage