import React from 'react'

const ItemCart = ({ icon, h3, p, bg, money }) => {
    return (
        <div className="flex justify-between items-start">

            <div className="flex items-start gap-x-[17px]">
                <div className={`w-[48px] h-[48px] rounded-full flex justify-center items-center ${bg}`}>
                    {icon}
                </div>
                <div className="">
                    <h3 className='font-medium text-base text-[#273240]'>{h3}</h3>
                    <p className='font-normal text-sm mt-1 text-[#404852] opacity-50'>{p}</p>
                </div>
            </div>
            <div className="">
                <h3 className='font-semibold text-base text-right text-[#273240]'>{money}</h3>
            </div>
        </div>
    )
}

export default ItemCart