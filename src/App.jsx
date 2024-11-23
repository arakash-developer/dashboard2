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
  return (
    <RouterProvider router={router} />
  )
}
export default App