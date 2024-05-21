import React from 'react'
import Header from '../../components/Header/Header'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Footer from '../../components/Footer/Footer'
import CartTotal from '../../components/CartTotal/CartTotal'

const ShoppingCart = () => {
    const products = [
        {
            name: 'Ut diam consequat',
            price: 32.00,
            details: {
                image: '/images/leatest-proImg/leatestProImg.png',
                size: 'M'
            }
        },
        {
            name: 'Vel faucibus posuere qwdwqdqw qwopkdwqqwdpo qwokpwdqopkwdqpok qowpkdwqokpwqdkop qwpodwdoqpkwqopkqpqpq',
            price: 32.00,
            details: {
                image: '/images/leatest-proImg/leatestProImg.png',
                size: 'L'
            }
        },
        {
            name: 'Ac vitae vestibulum',
            price: 32.00,
            details: {
                image: '/images/leatest-proImg/leatestProImg.png',
                size: 'S'
            }
        },
        {
            name: 'Ac vitae vestibulum',
            price: 32.00,
            details: {
                image: '/images/leatest-proImg/leatestProImg.png',
                size: 'S'
            }
        },
        {
            name: 'Ac vitae vestibulum',
            price: 32.00,
            details: {
                image: '/images/leatest-proImg/leatestProImg.png',
                size: 'S'
            }
        }
    ];

    return (
        <div>
            {/* <HeaderBar />
            <Header /> */}
            <Breadcrumbs
                title="Shopping Cart" />

            <div className="container mx-auto py-24 grid grid-cols-3">
                <div className='flex flex-col h-[500px] overflow-y-auto overflow-x-hidden col-span-3 md:col-span-2 scrollrec'>
                    {
                        products.map((item, index) => {
                            return (
                                <div key={index} className='flex items-center mb-2'>
                                    <img src={item.details.image} alt={item.name} className='w-[150px] object-contain mr-4' />
                                    <div className='flex flex-col'>
                                        <span className='fnt text-textBlue font-semibold text-lg line-clamp-2'>
                                            {item.name}
                                        </span>
                                        <span className='text-my-subText fnt'>Size:
                                            {item.details.size}
                                        </span>
                                        <input type="number" min="1" value="1" className="border border-gray-300 px-2 py-1 w-20 focus:outline-none focus:border-[#fb2e86] my-1" />
                                        <div className='fnt text-textBlue text-lg'>${item.price}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='col-span-3 md:col-span-1 mt-7 md:mt-0'>
                <CartTotal />
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default ShoppingCart