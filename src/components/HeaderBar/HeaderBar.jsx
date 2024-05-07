import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { IoIosArrowDown, IoMdHeartEmpty } from "react-icons/io";
import { MdOutlinePhoneInTalk } from "react-icons/md"; 
import { FiUser } from "react-icons/fi";
import { LuShoppingCart } from "react-icons/lu";

const HeaderBar = () => { 
    return (
        <div className='bg-my-purple py-3'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between fnt'>
                    <div className='flex items-center gap-10 text-white'>
                        <span className='flex items-center gap-2'><IoMailOutline size="22px" />kececirecep@outlook.com</span>
                        <span className='flex items-center gap-2'><MdOutlinePhoneInTalk size="22px" />+90 537 337 9376</span>
                    </div>
                    <div className='flex items-center gap-3 text-white'>
                        <span className='flex items-center gap-1'>English<IoIosArrowDown size="22px" /></span>
                        <span className='flex items-center gap-1'>Login<FiUser size="22px" /></span>
                        <span className='flex items-center gap-1'>Wishlist<IoMdHeartEmpty size="22px" /></span>
                        <span className='flex items-center gap-1'><LuShoppingCart size="22px" /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBar