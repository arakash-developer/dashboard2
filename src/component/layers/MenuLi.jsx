import React from 'react'

const MenuLi = ({to,className,litext,highlight}) => {
  return (
    <li className={`font-semibold list-none text-[25px] leading-[159%] text-[#fff] ${highlight?highlight:"opacity-50"}`}><a href={to}>{litext}</a></li>
  )
}

export default MenuLi