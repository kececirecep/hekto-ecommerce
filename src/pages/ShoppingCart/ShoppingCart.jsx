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
                image: '/images/shopping-cart/shoppingcart.png',
                size: 'M'
            }
        },
        {
            name: 'Vel faucibus posuere',
            price: 32.00,
            details: {
                image: '/images/shopping-cart/shoppingcart.png',
                size: 'L'
            }
        },
        {
            name: 'Ac vitae vestibulum',
            price: 32.00,
            details: {
                image: '/images/shopping-cart/shoppingcart.png',
                size: 'S'
            }
        }
    ];

    return (
        <div>
            <HeaderBar />
            <Header />
            <Breadcrumbs
                title="Shopping Cart" />

            <div className="container mx-auto py-24 flex ">
                <table className=' '>
                    <thead>
                        <tr className='text-left'>
                            <th className='text-textBlue fnt font-bold text-xl p-4'>Product</th>
                            <th className='text-textBlue fnt font-bold text-xl p-4'>Price</th>
                            <th className='text-textBlue fnt font-bold text-xl p-4'>Quantity</th>
                            <th className='text-textBlue fnt font-bold text-xl p-4'>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className=''>
                                <td className='flex p-4 w-96'>
                                    <img src={product.details.image} alt={product.name} className='w-[83px] h-[87px] object-contain' />
                                    <div className='flex flex-col p-3'>
                                        <span className='fnt text-textBlue font-semibold text-lg'>
                                            {product.name}
                                        </span>
                                        <span className='pt-2 text-my-subText fnt'>Size:
                                            {product.details.size}
                                        </span>
                                    </div>
                                </td>
                                <td className='p-4 w-96 fnt text-textBlue text-lg '>${product.price}.00</td>
                                <td className='p-4 w-96'>
                                    <div class="flex items-center justify-center">
                                        <input type="number" min="1" value="1" class="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                                    </div>
                                </td>
                                <td className='p-4 w-96 fnt text-textBlue text-lg '>${product.price}.00</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <CartTotal />
            </div>

            <Footer />

        </div>
    )
}

export default ShoppingCart