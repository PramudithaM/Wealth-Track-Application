import React from 'react'
import DashBar from '../assets/component/DashBar'
import AnalyticChart from '../assets/component/AnalyticChart'
import PersentageChart from '../assets/component/PersentageChart'
import ExpensePercentageChart from '../assets/component/ExpensePercentageChart'

const Analytics = () => {
  return (
    <div><DashBar/>
      <div className='w-full flex justify-center p-5'>
        <div className='w-200 bg-red-400/18 px-2 py-3 border rounded-lg mt-10 shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:scale-105'>
                      <AnalyticChart />
        </div>
        <div className='px-10'>
          <div className='w-80 bg-red-400/18 px-2 pt-5 border rounded-lg mt-10 shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:scale-105 '>
                      <div className='flex items-center justify-center text-white text-xl'>
                        <p>Monthly Goal</p>
                      </div>
                      <div className='flex items-center justify-center text-white text-sm'>
                        <p>Your fixed limit</p>
                      </div>
                        <div>
                          <PersentageChart />
                        </div>
                      
        </div>
        <div className='w-80 bg-red-400/18 px-2 py-5 border rounded-lg mt-10 shadow-md 
                    transition-all duration-300 
                    hover:shadow-xl hover:scale-105'>
                      <div className='flex items-center justify-center text-white text-xl'>
                        <p>Upcoming Payments</p>
                      </div>
                      <div className='flex items-center justify-center text-white text-sm'>
                        <p>Your fixed limit</p>
                      </div>
                        <div>
                          <ExpensePercentageChart />
                        </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics