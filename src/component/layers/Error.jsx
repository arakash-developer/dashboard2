import React from 'react'
import { Link } from 'react-router-dom'
import FOF from '../../../public/FOF.svg'

const Error = () => {
  return (
    <div className='w-full h-[90vh] bg-[#edf0f6] flex justify-center items-center flex-col'>
      <p className='py-2 font-normal text-4xl leading-[123%] text-center text-[#404852] font-poppins opacity-70'>This Page Was Not Found</p>
      <img src={FOF} alt={FOF} />
      <Link className='font-semibold text-[0.81rem] text-[#fff] py-[13px] px-[23px] bg-[#101010] rounded-lg hover:text-[#fff]' to='/'>Go Back Dashboard</Link>
    </div>
  )
}

export default Error