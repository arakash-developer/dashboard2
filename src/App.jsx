import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Root from './component/layers/Root.jsx'
import About from './component/pages/About'
import Expenses from './component/pages/Expenses';
import Error from './component/layers/Error';
import React, { lazy, useEffect, useLayoutEffect, useState } from 'react'
import Container from './component/layers/Container'
import Profile from '../public/Profile.jpg'
import Navbar from "./component/layers/Navbar";
import PulseLoader from "react-spinners/PulseLoader";


// const wait = (time)=>{
//   return new Promise((resolve) =>{
//     setTimeout(() => {
//       resolve()
//     }, time);
//   })
// }
// let Expenses = lazy(()=> wait(800).then(()=> import('./component/pages/Expenses')))


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='/' element={<Expenses />} />
      <Route path='/expenses' element={<Expenses />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='*' element={<Error />} />
    </Route>
  )
);


const App = () => {
  let [loading, setLoading] = useState(true);
  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])
  return (
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
            {
              loading ?
                <div className="w-full h-full bg-[#fff] flex justify-center items-center">
                  <PulseLoader speedMultiplier={1.5} color="#101010" />
                </div> :
                <RouterProvider router={router} />
            }
          </div>
        </div>
      </Container>
    </div>
  )
}
export default App