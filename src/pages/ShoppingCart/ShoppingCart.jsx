import React from 'react'
import Header from '../../components/Header/Header'
import HeaderBar from '../../components/HeaderBar/HeaderBar'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import Footer from '../../components/Footer/Footer'

const ShoppingCart = () => {
    const products = [
        {
            name: 'Ut diam consequat',
            price: 10,
            quantity: 2,
            details: {
                image: '/images/shopping-cart/shoppingcart.png',
                size: 'M'
            }
        },
        {
            name: 'Vel faucibus posuere',
            price: 15,
            quantity: 1,
            details: {
                image: '/images/shopping-cart/shoppingcart.png',
                size: 'L'
            }
        },
        {
            name: 'Ac vitae vestibulum',
            price: 20,
            quantity: 3,
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

            <div className="container mx-auto py-24">
                <table className='border border-red-500'>
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
                                    <img src={product.details.image} alt={product.name} />
                                    <div className='flex flex-col'>
                                        <span>
                                            {product.name}
                                        </span>
                                        <span>
                                            {product.details.size}
                                        </span>
                                    </div>
                                </td>
                                <td className='bd p-4'>{product.price}</td>
                                <td className='bd p-4'>{product.quantity}</td>
                                <td className='bd p-4'>{product.price * product.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Footer />

        </div>
    )
}

export default ShoppingCart