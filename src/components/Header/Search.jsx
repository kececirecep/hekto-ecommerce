import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <form className='flex items-center'>
      <input type="text" placeholder='Search..'
        className='border border-my-gray outline-none p-2 w-full' />
      <button className='bg-my-pink p-2 text-white'><CiSearch  size="26px"/></button>
    </form> 
  )
}

export default Search