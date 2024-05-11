import React from 'react'

const AboutSectionTwo = () => {
    return (
        <div className='bg-[#FBFBFF] py-32'>
            <div className='container mx-auto flex justify-center flex-col items-center'>
                <h2 className='font-bold text-4xl fnt pb-16'>Our Client Say!</h2>
                <div className='flex items-center gap-4'>
                    <img src="/images/client/client1.png" className='w-[55px] h-[55px] rounded-md object-cover' alt="" />
                    <img src="/images/client/client2.png" className='w-[55px] h-[55px] rounded-md object-cover mb-2' alt="" />
                    <img src="/images/client/client3.png" className='w-[55px] h-[55px] rounded-md object-cover' alt="" />
                </div>
                <h4 className='pt-6 text-2xl font-medium'>Selina Gomez</h4>
                <h6 className='text-[14px] text-my-subText pb-4'>Ceo At Webecy Digital</h6>
                <p className='text-xl text-my-subText pb-12 max-w-[700px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
            </div>
        </div>
    )
}

export default AboutSectionTwo