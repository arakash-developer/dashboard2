import React from 'react'
import ProfileImg from '../../../public/Profile.jpg'

const Profile = () => {
    return (
        <>
            <div className="w-16 h-16 relative">
                <div className="rounded-lg overflow-hidden">
                    <img src={ProfileImg} alt={ProfileImg} />
                </div>
                <div className="w-[29px] h-[29px] flex justify-center items-center absolute -right-[15px] z-[999] -top-[15px] rounded-full bg-[#DC3434]">
                    <p className='font-semibold text-[0.81rem] text-[#fff]'>1</p>
                </div>
            </div>
            <h1 className='mt-5 mb-1 font-semibold text-3xl leading-[117%] text-[#fff]'>Samantha</h1>
            <p className='font-normal text-[1.06rem] leading-[159%] text-[#fff] opacity-60'>samantha@email.com</p>
        </>
    )
}

export default Profile