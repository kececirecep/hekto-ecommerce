import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";

const ListProduct = () => {
    return (
        <div className='flex flex-col md:flex-row items-center gap-4 shadow p-3 mb-4'>
            <div>
                <img src="/images/list-proImg/list-proImg.png" className='w-full h-[197px]' alt="" />
            </div>
            <div className=''>
                <h2 className='text-textBlue font-bold text-lg fnt'>Dictum morbi</h2>
                <span className='flex items-center fnt text-textBlue gap-2'>$42.00 <h6 className='text-my-pink line-through'>$65.00</h6></span>
                <p className='text-my-subText py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                <div className='flex items-center gap-4 '>
                    <Link to="#" className='shadow p-2 rounded-full text-[#535399]'><LuShoppingCart size="16px" /></Link>
                    <Link to="#" className='shadow p-2 rounded-full text-[#535399]'><IoMdHeartEmpty size="16px" /></Link>
                    <Link to="#" className='shadow p-2 rounded-full text-[#535399]'><IoMdSearch size="16px" /></Link>
                </div>
            </div>
        </div>
    )
}

export default ListProduct