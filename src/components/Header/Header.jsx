import React from 'react'
import Logo from './Logo'
import Menu from './Menu' 

const Header = () => {
  return (
    <div className='bg-white py-5'>
      <div className='container mx-auto'>
        <div className='flex items-center gap-20 justify-between'>
          <Logo />
          <Menu />
        </div> 
      </div>
    </div>
  )
}

export default Header