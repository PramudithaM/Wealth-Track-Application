import React from 'react'
import { useState } from 'react'

const FirstName = () => {
    const [firstName,setFirstName] =useState('');
  return (
    <div>
            <input type='text' placeholder='Enter your Password' value={PassWord} onChange={(e) => setPassWord(e.target.value)} className='text-sm'/>
        </div>
  )
}

export default FirstName