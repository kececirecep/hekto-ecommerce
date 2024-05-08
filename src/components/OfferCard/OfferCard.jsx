import React from 'react'

const OfferCard = (props) => {
    return (
        <div className='w-[300px] shadow'>
            <div className='p-10 text-center flex flex-col justify-between items-center'>
                <img src="/images/offer/free-delivery.png" className='w-[65px] h-[65px] object-cover' alt="" />
                <h2 className='fnt text-textBlue text-xl font-semibold py-4'>24/7 Support</h2>
                <p className='font-bold text-base text-[#BAB6CE]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
        </div>
    )
}

export default OfferCard