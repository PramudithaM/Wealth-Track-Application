import React from 'react'
import GetStarted from '../assets/component/GetStarted'
import { useNavigate } from "react-router-dom";


const Starting = () => {

  const navigate = useNavigate();
  
  return (
    <main>
      <div className='pattern'/>
      <div className='wrapper min-h-screen flex items-center justify-center'>
        <header>
          <h1>Welcome to wealth os system</h1>
          <p className='text-center font-[var(--font-poppins)] text-white text-white'>Your gateway to financial success starts here. Join us to manage and grow your wealth effectively</p>
          <div 
          onClick={() => navigate("/login")}
          className='cursor-pointer select-none mt-4 flex item-center justify-center'><GetStarted/></div>
          
        </header>
      </div>
    </main>
  )
}

export default Starting