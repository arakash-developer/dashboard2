import React from 'react'
import MenuLi from './MenuLi'

const Navbar = () => {
  return (
    <ul className="menu mt-[118px] flex flex-col gap-y-[30px]">
      <MenuLi litext='Dashboard' to='dashboard' />
      <MenuLi litext='Expenses' to='/expenses' />
      <MenuLi litext='Wallets' to='/wallets' />
      <MenuLi litext='Summary' to='/summary' />
      <MenuLi litext='Accounts' to='/accounts' />
      <MenuLi litext='Settings' to='/setting' />
    </ul>
  )
}

export default Navbar