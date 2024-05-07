import React from 'react'
import Button from '../Button/Button'
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { Link } from 'react-router-dom';

const FeaturedProductCard = (props) => {
    return (
        <div className='flex items-center gap-12 '>
            <div className='w-[340px] shadow my-12 group hover:bg-productHover duration-150'>
                <div className='flex flex-col justify-center items-center bg-productColor p-10 relative'>
                    <div className='flex items-center gap-4 opacity-0 group-hover:opacity-100 duration-150 absolute top-4 left-4'>
                        <Link to="#" className='bg-[#EEEFFB] p-2 rounded-full text-my-purple'><LuShoppingCart size="22px" /></Link>
                        <Link to="#" className='bg-[#EEEFFB] p-2 rounded-full text-[#e74c1d]'><IoMdHeartEmpty size="22px" /></Link>
                        <Link to="#" className='bg-[#EEEFFB] p-2 rounded-full text-[#1389FF]'><IoMdSearch size="22px" /></Link>
                    </div>
                    <img src="/images/featured-proImg/featuredProImg.png" className=" w-[178px] h-[178px] object-cover mb-8" alt="" />
                    <div>
                        <Button
                            className="bg-[#08D15F] rounded px-3 py-2 text-white opacity-0 group-hover:opacity-100 duration-150"
                            title="View Details" />
                    </div>
                </div>
                <div className='flex flex-col items-center py-8'>
                    <h2 className='font-bold text-xl -tracking-tight text-my-pink group-hover:text-white'>Cantilever chair</h2>
                    <h3 className='fnt text-textBlue py-2 font-[400] group-hover:text-white'>Code - Y523201</h3>
                    <h6 className='text-textBlue font-[400] text-md group-hover:text-white'>$42.00</h6>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProductCard