import React from 'react'
import MenuLi from './MenuLi'

const Navbar = () => {
  return (
    <ul className="menu mt-[118px] flex flex-col gap-y-[30px]">
      <MenuLi litext='Dashboard' />
      <MenuLi highlight='opacity-1' litext='Expenses' to='/expenses'/>
      <MenuLi litext='Wallets' to='/wallets'/>
      <MenuLi litext='Summary' />
      <MenuLi litext='Accounts' />
      <MenuLi litext='Settings' />
    </ul>
  )
}

export default Navbar