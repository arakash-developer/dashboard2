import React from 'react'
import { Link } from 'react-router-dom'
import FOF from '../../../public/FOF.svg'

const Error = () => {
  return (
    <div className='w-full h-[90vh] bg-[#FFFFFF] flex justify-center items-center flex-col'>
      <img className='w-[70%]' src={FOF} alt={FOF} />
      <Link className='font-semibold text-[0.81rem] text-[#fff] py-[13px] px-[23px] bg-[#101010] rounded-lg hover:text-[#fff]' to='/'>Go Back Dashboard</Link>
    </div>
  )
}

export default Error