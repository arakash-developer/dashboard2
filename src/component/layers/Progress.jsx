import React from 'react'

const Progress = ({title,w,money}) => {
  return (
    <div>
        <div className="flex justify-between items-start">
            <h3 className='font-medium text-[0.81rem] leading-[185%] text-[#273240]'>{title}</h3>
            <p className='font-normal text-[0.81rem] leading-[185%] text-right text-[#273240]'>{money}</p>
        </div>
        <div className="w-[250px] mt-2 bg-[#ECEFF5] h-[5px] rounded-[5px] overflow-hidden relative">
            <div className={`${w} bg-[#31BA96] h-full rounded-full`}></div>
        </div>
    </div>
  )
}

export default Progress