import React from 'react'
import Button from '../../../components/Button/Button'
import { IoCheckmark } from "react-icons/io5";

const Discount = () => {
    const myIconStyle = {
        color: '#7569B2'
    }
    return (
        <div className='py-12'>
            <div className='container mx-auto'>
                <h2 className='text-sectionTitle fnt text-4xl font-bold text-center py-4 pb-12'>Discount Item</h2>
                <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-4'>
                    <div>
                        <h2 className='text-4xl text-textBlue fnt font-bold'>20% Discount Of All Products</h2>
                        <h6 className='text-xl text-my-pink fnt font-bold pt-4'>Eams Sofa Compact</h6>
                        <p className='text-[#B7BACB] text-lg font-[400] py-8'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                        </p>
                        <ul className='grid grid-cols-1 md:grid-cols-2 mb-8'>
                            <li className='flex items-center text-[#B8B8DC] pb-2'><IoCheckmark style={myIconStyle} size="28px" /> Material expose like metals</li>
                            <li className='flex items-center text-[#B8B8DC] pb-2'><IoCheckmark style={myIconStyle} size="28px" /> Clear lines and geomatric figures</li>
                            <li className='flex items-center text-[#B8B8DC] pb-2'><IoCheckmark style={myIconStyle} size="28px" /> Simple neutral colours.</li>
                            <li className='flex items-center text-[#B8B8DC] pb-2'><IoCheckmark style={myIconStyle} size="28px" /> Material expose like metals</li>
                        </ul>
                        <Button
                            className="bg-my-pink px-8 py-3 rounded text-white fnt text-lg font-[400]"
                            title="Shop Now" />
                    </div>
                    <div className=''>
                        <img src="/images/discount/discount.png" className='w-[950px] object-cover' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Discount