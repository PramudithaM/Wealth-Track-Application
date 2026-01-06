import React from 'react'
import EmailAdd from '../assets/component/EmailAdd'
import { useState } from 'react'
import PassWord from '../assets/component/PassWord'
import CheckBox from '../assets/component/CheckBox'
import SignIn from '../assets/component/SignIn'
import GoogleSignin from '../assets/component/GoogleSignin'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const SignUp = () => {

      const [emailAddress, setEmailAddress] = useState('');
    
      const [passWord,setPassWord] = useState('');
    
      const [isChecked,setIsChecked] = useState('');
    
      const navigate = useNavigate();
  return (
    <main>
          <div className='items-center justify-center'>
            
              <h1 className='pt-5 font-light'>Sign Up</h1>
              <p className='text-center font-[var(--font-poppins)] text-white text-white pt-2 text-sm'>Create an Account to track your wealth</p>
              
              <div className='flex justify-center mt-5'>
                <div className='w-[430px] bg-dark-100 border border-slate-400 rounded-md p-8 shadow-lg blackdrop-filter blackdrop-blur-sm bg-opacity-30 relative  '>
                <div className=''>
                    <span className='text-white  font-poppins'>First Name</span>
                </div>
                <div className='w-full bg-light-100/5 px-2 py-3 rounded-lg mt-1 mb-5 max-w-3xl mx-auto'>
                    <span className='text-white text-sm px-1'>Enter Your First Name</span>
                </div>
                <div>
                    <span className='text-white  font-poppins'>Last Name</span>
                </div>
                <div className='w-full bg-light-100/5 px-2 py-3 rounded-lg mt-1 mb-5 max-w-3xl mx-auto'>
                    <span className='text-white text-sm px-1'>Enter Your Last Name</span>
                </div>
                <div>
                    <span className='text-white  font-poppins'>Email</span>
                </div>
                <div className='w-full bg-light-100/5 px-2 py-3 rounded-lg mt-1 mb-5 max-w-3xl mx-auto'>
                    <span className='text-white text-sm px-1'>shjx@gail.com</span>
                </div>
                <div>
                    <span className='text-white  font-poppins'>Password</span>
                </div>
                <div className='w-full bg-light-100/5 px-2 py-3 rounded-lg mt-1 mb-5 max-w-3xl mx-auto'>
                    <span className='text-white text-sm px-1'>• • • • • •</span>
                </div>
                <div className='w-[50%] bg-light-100/5 px-2 py-3 mt-8 rounded-lg  max-w-3xl mx-auto'>
                    <span className='text-white  flex justify-center'>Create Account</span>
                </div>
               </div>
              </div>
            
          </div>
        </main>
  )
}

export default SignUp