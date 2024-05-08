import React from 'react'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FooterBar from '../../components/FooterBar/FooterBar'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import ContactForm from '../../components/ContactForm/ContactForm'

const Contact = () => {
    return (
        <div>
            <HeaderBar />
            <Header />
            <Breadcrumbs
                title="Contact Us" />
            <div className='container mx-auto py-32 grid grid-cols-2 justify-items-between '>
                <div className=''>
                    <h2 className='text-textBlue fnt text-4xl font-bold pb-3'>Information About us</h2>
                    <p className='text-my-subText text-lg font-medium pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    <div className='flex gap-4'>
                        <span className="bg-[#5726DF] rounded-full h-10 w-10 "></span>
                        <span className="bg-[#FB2E86] rounded-full h-10 w-10 "></span>
                        <span className="bg-[#37DAF3] rounded-full h-10 w-10 "></span>
                    </div>

                </div>
                <div className='justify-self-end'>
                    <h2 className='text-textBlue fnt text-4xl font-bold pb-6'>Contact Way</h2>
                    <div className='grid grid-cols-2 gap-8'>
                        <div className='flex items-center gap-2'>
                            <span className="bg-[#5726DF] rounded-full h-10 w-10 "></span>
                            <div className='flex flex-col text-my-subText text-lg font-semibold'>
                                <span>Tel: 877-67-88-99</span>
                                <span>E-Mail: shop@store.com</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className="bg-[#FB2E86] rounded-full h-10 w-10 "></span>
                            <div className='flex flex-col text-my-subText text-lg font-semibold'>
                                <span>Support Forum</span>
                                <span>For over 24hr</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className="bg-[#FFB265] rounded-full h-10 w-10 "></span>
                            <div className='flex flex-col text-my-subText text-lg font-semibold'>
                                <span>20 Margaret st, London</span>
                                <span>Great britain, 3NM98-LK</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className="bg-[#1BE982] rounded-full h-10 w-10 "></span>
                            <div className='flex flex-col text-my-subText text-lg font-semibold'>
                                <span>Free standard shipping</span>
                                <span>on all orders</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='container mx-auto flex items-start justify-center py-16 pb-32'>
                <ContactForm />
                <img src="/images/contact/contact.png" className='w-[550px] object-cover' alt="" />
            </div>
            <Footer />
        </div>
    )
}

export default Contact