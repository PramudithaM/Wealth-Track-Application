import React from 'react'

const LatestFiveExpenses = () => {
  return (
    <div>
          <div className='w-80 bg-red-400/18 px-2 py-5 border rounded-lg mt-10 shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:scale-105'>
            <div>
              <div className='flex justify-between items-center'>
                <div >
                  <div>
                  <span className='text-white'>Expense</span>
                  </div>
                  <div>
                  <span className='text-xs text-white'>This Month</span>
                  </div>
                </div>
                <div>
                  <span className='text-white text-base'>$ 85,000</span>
                </div> 
              </div>
            </div>
            <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-1 '>
              <div>
                <span className='text-white text-[11px]'>Expenses</span>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>Food & Drink</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>Transportation</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>housing</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>Bills & Utilities</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
                <div className='w-full bg-light-100/2 px-2 py-2 border rounded-lg mt-5'>
                  <div className='flex justify-between text-white text-xs'>
                    <span>Health & Medical</span>
                    <span>$ 12,000</span>
                  </div>
                </div>
              </div>

            </div>
              
          </div>
        </div>
  )
}

export default LatestFiveExpenses