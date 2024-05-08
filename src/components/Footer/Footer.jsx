import React from 'react'
import Logo from '../Header/Logo'
import FooterBar from '../FooterBar/FooterBar'


const Footer = () => {
    return (
        <div>
            <div className='bg-[#EEEFFB] py-24'>
                <div className="container mx-auto grid grid-cols-3 justify-items-center items-start">
                    <div className=''>
                        <Logo />
                        <form className='flex items-center py-8'>
                            <input type="text"
                                placeholder='Enter Email Address'
                                className='border border-my-gray outline-none p-2 w-[250px]' />
                            <button className='bg-my-pink text-white px-8 py-2 rounded'>Sign Up</button>
                        </form>
                        <h6 className='text-my-subText text-lg'>Contact Info</h6>
                        <p className='text-my-subText'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                    <div className=' '>
                        <h2 className='text-black fnt text-2xl'>Categories</h2>
                        <ul className='text-my-subText text-lg'>
                            <li className='py-2'>Laptops & Computers</li>
                            <li className='py-2'>Cameras & Photography</li>
                            <li className='py-2'>Smart Phones & Tablets</li>
                            <li className='py-2'>Video Games & Consoles</li>
                            <li className='py-2'>Waterproof Headphones</li>
                        </ul>
                    </div>
                    <div className=''>
                        <h2 className='text-black fnt text-2xl'>Pages</h2>
                        <ul className='text-my-subText text-lg'>
                            <li className='py-2'>Blog</li>
                            <li className='py-2'>Browse the Shop</li>
                            <li className='py-2'>Category</li>
                            <li className='py-2'>Pre-Built Pages</li>
                            <li className='py-2'>Visual Composer Elements</li>
                        </ul>
                    </div>
                </div>
            </div>
            <FooterBar />
        </div>
    )
}

export default Footer