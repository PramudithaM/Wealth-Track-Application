import React from 'react'

const EmailAdd = ({emailAddress,setEmailAddress}) => {
  return (
    <div className='search mt-1'>
        <div>
            <input type='text' 
            placeholder='Enter your Email Address' 
            value={emailAddress} 
            onChange={(e) => setEmailAddress(e.target.value)} className='text-sm'/>
        </div>
    </div>
  )
}

export default EmailAdd