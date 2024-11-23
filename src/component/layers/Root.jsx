import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import PulseLoader from "react-spinners/PulseLoader";



const Root = () => {
    return (
        <>
            <Outlet />
        </>
    )
}
export default Root
