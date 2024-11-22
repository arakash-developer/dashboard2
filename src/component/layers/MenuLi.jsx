import React from 'react'
import { NavLink } from "react-router"



const MenuLi = ({to,className,litext,highlight}) => {
  return (
    <>
    {/* <NavLink to='/ajasg'>AA</NavLink> */}
    <li className={`font-semibold list-none text-[25px] leading-[159%] text-[#fff] ${highlight?highlight:"opacity-50"}`}><a href={to}>{litext}</a></li>
    {/* <li className={`font-semibold list-none text-[25px] leading-[159%] text-[#fff] ${highlight?highlight:"opacity-50"}`}><NavLink to={to}>{litext}</NavLink></li> */}
    </>
  )
}

export default MenuLi