import React from 'react'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

const FooterBar = () => {
    return (
        <div className='bg-[#E7E4F8] py-4'>
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
                <h3 className='text-[#9DA0AE] font-semibold mb-2'>©Webecy - All Rights Reserved</h3>
                <div>
                    <ul className='flex items-center gap-4'>
                        <Link><li className='bg-textBlue text-white p-2 rounded-full'><FaFacebookF /></li></Link>
                        <Link><li className='bg-textBlue text-white p-2 rounded-full'><AiFillInstagram /></li></Link>
                        <Link><li className='bg-textBlue text-white p-2 rounded-full'><FaTwitter /></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterBar