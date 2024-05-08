import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";

const LeatesProductCard = (props) => {
    return (
        <div className='w-[380px] my-12 group'>
            <div className='bg-productColor flex justify-center p-8 relative'>
                <div className='bg-[#3F509E] fnt text-white -rotate-12 px-8 py-1 absolute top-6 left-4 opacity-0 group-hover:opacity-100 duration-150 rounded-tl-lg rounded-br-lg'>
                    Sale
                </div>
                <img src="/images/leatest-proImg/leatestProImg.png" className='w-[223px] h-[229px] object-cover mb-8' alt="" />
                <div className='flex flex-col items-center gap-4 opacity-0 group-hover:opacity-100 duration-150 absolute bottom-4 left-4'>
                    <Link to="#" className='bg-[#EEEFFB] p-2 rounded-full text-textBlue'><LuShoppingCart size="22px" /></Link>
                    <Link to="#" className='bg-[#EEEFFB] p-2 rounded-full text-textBlue'><IoMdHeartEmpty size="22px" /></Link>
                    <Link to="#" className='bg-[#EEEFFB] p-2 rounded-full text-textBlue'><IoMdSearch size="22px" /></Link>
                </div>
            </div>
            <div className='flex items-center justify-between fnt text-textBlue py-4'>
                <h2 className='border-b-4 border-gray-100 text-base font-[600]'>Comfort Handy Craft</h2>
                <span className='flex items-center gap-4'>$42.00 <h6 className='text-my-pink line-through'>$65.00</h6></span>
            </div>
        </div>
    )
}

export default LeatesProductCard