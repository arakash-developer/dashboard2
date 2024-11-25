import React, { Suspense, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Container from './Container';
import Navbar from "../layers/Navbar";
import Profile from "../layers/Profile";
import PulseLoader from "react-spinners/PulseLoader";


const Root = () => {
    return (
        <>
            <div>
                <Container className='h-screen py-10'>
                    <div className="flex rounded-[30px] w-full h-full bg-[#101010] pl-[80px] py-5 pr-5 text-[#fff]">
                        <div className="mt-[60px] mr-[84px]">
                           <Profile />
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
