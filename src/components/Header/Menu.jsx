import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LuShoppingCart } from "react-icons/lu";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline, IoClose } from "react-icons/io5";
import { useSelector } from 'react-redux';


const Menu = () => {
  const allCartItems = useSelector((state) => state.cart)
  const favArray = useSelector((state) => state.favorite.favoriteArray)


  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  const menuContent = [
    {
      text: "Home",
      url: "/",
    }, {
      text: "About",
      url: "/about",
    }, {
      text: "Products",
      url: "/products",
    }, {
      text: "Contact",
      url: "/contact",
    },
  ]

  const mobileToggleClick = () => {
    setMobileMenuToggle(!mobileMenuToggle)
  }



  return (
    <div className='flex items-center'>
      <div className={`fixed top-0 ${mobileMenuToggle ? "left-0" : "-left-[75%]"}  bg-[#000000ce] text-white flex flex-col justify-center items-center text-4xl font-semibold h-full w-[75%] z-50 md:hidden duration-700`}>
        <ul>
          {
            menuContent.map((item, index) => {
              return (
                <NavLink to={item.url} key={index}><li className='flex items-center py-4 hover:text-my-pink duration-200'>{item.text}</li></NavLink>
              )
            })
          }
          <div className='flex items-center gap-4 mt-12'>
            <Link to="/favorite-products" className='flex items-center gap-1 text-my-pink'>
              {favArray.length >= 1 ? <IoMdHeart size="26px" /> : <IoMdHeartEmpty size="26px" />}
            </Link>
            <Link to="/shopping-cart" className='flex items-center gap-1'><LuShoppingCart size="26px" /></Link>
          </div>
        </ul>
      </div>
      <nav className='hidden md:flex'>
        <ul className='flex items-center gap-9 font-[400] text-lg'>
          {
            menuContent.map((item, index) => {
              return (
                <NavLink to={item.url} key={index}><li className='flex items-center'>{item.text}</li></NavLink>
              )
            })
          }
          <Link to="/favorite-products" className='flex items-center gap-1 text-my-pink'>
            {favArray.length >= 1 ? <IoMdHeart size="26px" /> : <IoMdHeartEmpty size="26px" />}
          </Link>
          <Link to="/shopping-cart" className='relative'>
            <LuShoppingCart size={24} className="text-bodyTextColor" />
            <span className="absolute -top-2 -right-2 bg-my-pink rounded-full text-white w-[20px] h-[20px] flex items-center justify-center text-[12px]">
              {allCartItems.cart.length || 0}
            </span>
          </Link>


        </ul>
      </nav>

      <div className='md:hidden flex fixed top-26 right-6 cursor-pointer z-50'>
        <span className='bg-my-pink text-white p-2' onClick={mobileToggleClick}>{mobileMenuToggle ? <IoClose size={"26px"} /> : <RxHamburgerMenu size={"26px"} />}</span>
      </div>

    </div>
  )
}

export default Menu