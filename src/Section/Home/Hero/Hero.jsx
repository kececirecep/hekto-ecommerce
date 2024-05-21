import React from 'react' 
import Button from '../../../components/Button/Button'

const Hero = () => {
    return (
        <div className='bg-my-lightpink relative'> 
            <div className='container mx-auto flex flex-col md:flex-row items-center p-4 flex-1  py-20'>
                <div className=''>
                    <span className='font-bold text-lg text-my-pink'>Best Furniture For Your Castle....</span>
                    <h2 className='fnt font-bold text-5xl py-8'>New Furniture Collection <br />Trends in 2020</h2>
                    <p className='text-my-subText font-bold text-lg mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <Button
                        className="bg-my-pink px-6 py-3 rounded-sm text-white fnt font-semibold"
                        title="Shop Now" />
                </div>
                <img src="/images/hero.png" className='w-[600px] h-[500px] object-cover hidden lg:block' alt="" />
            </div>
        </div>
    )
}

export default Hero