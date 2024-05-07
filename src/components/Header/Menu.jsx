import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";

const Menu = () => {
  return (
    <nav>
      <ul className='flex items-center gap-9  font-[400] text-lg'>
        <NavLink to=""><li className='flex items-center'>Home </li></NavLink>
        <NavLink to=""><li className='flex items-center gap-2'>Pages<IoIosArrowDown /></li></NavLink>
        <NavLink to=""><li className='flex items-center'>Products </li></NavLink>
        <NavLink to=""><li className='flex items-center'>Blog </li></NavLink>
        <NavLink to=""><li className='flex items-center'>Shop </li></NavLink>
        <NavLink to=""><li className='flex items-center'>Contact </li></NavLink>
      </ul>
    </nav>
  )
}

export default Menu