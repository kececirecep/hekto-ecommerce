import React from 'react'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Header from '../../components/Header/Header'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'

const Contact = () => {
    return (
        <div>
            <HeaderBar />
            <Header />
            <Breadcrumbs
                title="Contact Us" />

            <div className='container mx-auto grid grid-cols-2  border border-red-500'>
                <div>
                    <h2 className='text-textBlue fnt text-4xl font-bold'>Information About us</h2>
                    <p className='text-my-subText text-lg font-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                </div>
                <div className='border border-red-500'>
                    <h2 className='text-textBlue fnt text-4xl font-bold'>Contact Way</h2>
                    <div className='grid grid-cols-2 text-my-subText text-lg font-medium'>
                        <div>
                            <span>Tel: 877-67-88-99</span>
                            <span>E-Mail: shop@store.com</span>
                        </div>
                        <div>
                            <span>Tel: 877-67-88-99</span>
                            <span>E-Mail: shop@store.com</span>
                        </div>
                        <div>
                            <span>Tel: 877-67-88-99</span>
                            <span>E-Mail: shop@store.com</span>
                        </div>
                        <div>
                            <span>Tel: 877-67-88-99</span>
                            <span>E-Mail: shop@store.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact