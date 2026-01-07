import React from 'react'




const EmailAdd = ({email,setEmail}) => {

 
  return (
    <div className='search mt-1'>
        <div>
            <input type='email' 
            placeholder='Enter your Email Address' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} className='text-sm'/>
        </div>
    </div>
  )
}

export default EmailAdd