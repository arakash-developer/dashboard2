import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from './component/layers/Root.jsx'
import About from './component/pages/About'
import Expenses from './component/pages/Expenses';
import Error from './component/pages/Error';
import React, { lazy, useEffect, useLayoutEffect, useState } from 'react'
import Dashboard from "./component/pages/Dashboard.jsx";


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
      <Route path='/dashboard' element={<Dashboard />} />
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