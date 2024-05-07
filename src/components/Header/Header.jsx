import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'

const Header = () => {
  return (
    <div className='bg-white py-5'>
      <div className='container mx-auto flex justify-between'>
        <div className='flex items-center gap-20'>
          <Logo />
          <Menu />
        </div>
        <Search />
      </div>
    </div>
  )
}

export default Header