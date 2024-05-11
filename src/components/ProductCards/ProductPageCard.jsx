import React from 'react'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import { IoMdHeartEmpty } from 'react-icons/io'  

const ProductPageCard = () => {  
    return (
        <div className='py-16'>
            <div className='shadow p-6 flex items-start'>
                <div className='flex items-start gap-4'>
                    <div className='flex flex-col gap-4'>
                        <img src="/images/product-details/small-1.png" className='w-[200px] h-[135px] object-cover' alt="" />
                        <img src="/images/product-details/small-2.png" className='w-[200px] h-[135px] object-cover' alt="" />
                        <img src="/images/product-details/small-3.png" className='w-[200px] h-[135px] object-cover' alt="" />
                    </div>
                    <div>  
                        <img src="/images/product-details/big-1.png" className='w-[550px] h-[440px] object-cover' alt="" />
                    </div>
                </div>
                <div className='p-12'>
                    <h2 className='fnt text-4xl font-semibold text-textBlue'>Playwood arm chair</h2>
                    <span className='flex items-center fnt text-textBlue gap-2 py-2'>$30.00 <h6 className='text-my-pink line-through'>$32.00</h6></span>
                    <p className='text-my-subText fnt text-lg py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                    <div className='flex items-center gap-2'>
                        <Button
                            className="text-textBlue fnt text-lg font-semibold"
                            title="Add To Cart" />
                        <Link to="#" className='shadow p-2 rounded-full text-[#535399]'><IoMdHeartEmpty size="16px" fontWeight="700" /></Link>
                    </div>
                    <div className='flex items-center gap-2'>
                        <h6 className='text-textBlue fnt text-base font-semibold'>Categories:</h6>
                        <span className='text-my-subText fnt text-lg'>Categories</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPageCard