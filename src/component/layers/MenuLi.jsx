import React from 'react'
import { NavLink } from "react-router-dom"



const MenuLi = ({to,className,litext}) => {
  return (
    <>
    <li className={`font-semibold list-none text-[25px] leading-[159%] text-[#fff]`}><NavLink to={to}>{litext}</NavLink></li>
    </>
  )
}

export default MenuLi