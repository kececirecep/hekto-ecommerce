import React from 'react'
import Button from '../../../components/Button/Button' 

const AboutSectionOne = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-col md:flex-row items-center gap-12'>
                <img src="/images/about/aboutsection1.png" className='w-[500px] object-cover shadow-2xl' alt="" />
                <div>
                    <h2 className='text-4xl fnt font-bold text-textBlue pb-4'>Know About Our Ecomerce <br />Business, History</h2>
                    <p className='text-lg text-my-subText pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    <Button
                        className="bg-my-pink px-6 py-3 text-white rounded"
                        title="Contact us" />
                </div>
            </div>

             
        </div>
    )
}

export default AboutSectionOne