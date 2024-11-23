import React, { Suspense, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Container from './Container';
import Profile from '../../../public/Profile.jpg'
import Navbar from "../layers/Navbar";
import PulseLoader from "react-spinners/PulseLoader";


const Root = () => {
    return (
        <>
            <div>
                <Container className='h-screen py-10'>
                    <div className="flex rounded-[30px] w-full h-full bg-[#101010] pl-[80px] py-5 pr-5 text-[#fff]">
                        <div className="mt-[60px] mr-[84px]">
                            <div className="w-16 h-16 relative">
                                <div className="rounded-lg overflow-hidden">
                                    <img src={Profile} alt={Profile} />
                                </div>
                                <div className="w-[29px] h-[29px] flex justify-center items-center absolute -right-[15px] z-[999] -top-[15px] rounded-full bg-[#DC3434]">
                                    <p className='font-semibold text-[0.81rem] text-[#fff]'>1</p>
                                </div>
                            </div>
                            <h1 className='mt-5 mb-1 font-semibold text-3xl leading-[117%] text-[#fff]'>Samantha</h1>
                            <p className='font-normal text-[1.06rem] leading-[159%] text-[#fff] opacity-60'>samantha@email.com</p>
                            <Navbar />
                        </div>
                        <div className="my w-[1060px] rounded-[30px] overflow-hidden bg-[#FFFFFF]">
                            <Suspense fallback={<PulseLoader />}>
                                <Outlet />
                            </Suspense>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}
export default Root
