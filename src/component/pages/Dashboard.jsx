import React from 'react'
import Chart from '../layers/Chart'

const Dashboard = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <h1>Dashboard</h1>
            <div className="w-[810px] h-[300px]">
               <Chart />
            </div>
        </div>
    )
}

export default Dashboard