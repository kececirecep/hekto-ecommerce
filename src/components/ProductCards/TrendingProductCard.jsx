import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdHeartEmpty, IoMdSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import Button from '../Button/Button';

const TrendingProductCard = () => {
    return (
        <div className='w-full shadow px-2'>
            <div className='flex flex-col justify-center items-center bg-productColor p-10 relative my-4 mx-2'>
                <img src="/images/featured-proImg/featuredProImg.png" className=" w-[178px] h-[178px] object-cover mb-8" alt="" />
            </div>
            <div className='flex flex-col items-center'>
                <h2 className='font-bold text-xl -tracking-tight text-textBlue  '>Cantilever chair</h2>
                <div className='flex items-center justify-center gap-4 fnt'>
                    <h3 className=' text-textBlue py-2 font-[400] text-base '>$26.00</h3>
                    <h6 className='text-[#B7B8D3] line-through font-[400] text-base  '>$42.00</h6>
                </div>
            </div>
        </div>
    )
}

export default TrendingProductCard