import React from 'react'
import DashBar from '../assets/component/DashBar'

const TransactionPage = () => {
  return (
    <div className='pattern '>
        <DashBar/>
        <div className='wrapper flex items-center justify-center '>
            <div>
                <h1 >Transaction History</h1>
            </div>
            <div className='text-white flex w-full-[60%] hustify-between gap-120 mt-5'>
                <div>
                    <span>Title</span>e
                </div>
                <div>
                    Amount $
                </div>
                
            </div>
            <div className='movie-card mt-4 flex w-full-[60%] hustify-between gap-120'>
                <div>
                    <span className='text-white '>Food</span>
                    
                </div>
                <div>
                    <span className='text-white'>+5000$</span>
                </div>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default TransactionPage